import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/unsubscribe")({
  validateSearch: (search: Record<string, unknown>) => ({
    token: typeof search.token === "string" ? search.token : "",
  }),
  head: () => ({
    meta: [
      { title: "Unsubscribe — Qfire Catering" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: UnsubscribePage,
});

type State =
  | "loading"
  | "ready"
  | "already"
  | "invalid"
  | "submitting"
  | "success"
  | "error";

function UnsubscribePage() {
  const { token } = Route.useSearch();
  const [state, setState] = useState<State>("loading");

  useEffect(() => {
    if (!token) {
      setState("invalid");
      return;
    }
    (async () => {
      try {
        const r = await fetch(
          `/email/unsubscribe?token=${encodeURIComponent(token)}`,
        );
        const j = await r.json();
        if (!r.ok) setState("invalid");
        else if (j.valid) setState("ready");
        else if (j.reason === "already_unsubscribed") setState("already");
        else setState("invalid");
      } catch {
        setState("error");
      }
    })();
  }, [token]);

  async function confirm() {
    setState("submitting");
    try {
      const r = await fetch("/email/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const j = await r.json();
      if (j.success) setState("success");
      else if (j.reason === "already_unsubscribed") setState("already");
      else setState("error");
    } catch {
      setState("error");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-ink px-4 py-24">
      <div className="max-w-md w-full text-center">
        <div className="eyebrow justify-center mb-6">Email Preferences</div>
        <h1 className="heading-md text-bone mb-4">Unsubscribe from Qfire Catering</h1>

        {state === "loading" && (
          <p className="text-bone/60">Verifying your link…</p>
        )}
        {state === "ready" && (
          <>
            <p className="text-bone/70 mb-8">
              Click below to stop receiving emails from Qfire Catering.
            </p>
            <button onClick={confirm} className="btn-primary">
              Confirm unsubscribe
            </button>
          </>
        )}
        {state === "submitting" && (
          <p className="text-bone/60">Processing…</p>
        )}
        {state === "success" && (
          <p className="text-bone/80">
            You've been unsubscribed. We're sorry to see you go.
          </p>
        )}
        {state === "already" && (
          <p className="text-bone/80">
            This email address has already been unsubscribed.
          </p>
        )}
        {state === "invalid" && (
          <p className="text-bone/70">
            This unsubscribe link is invalid or has expired.
          </p>
        )}
        {state === "error" && (
          <p className="text-bone/70">
            Something went wrong. Please try again, or email us at{" "}
            <a href="mailto:Eat@QfireCatering.com" className="text-gold">
              Eat@QfireCatering.com
            </a>
            .
          </p>
        )}
      </div>
    </div>
  );
}
