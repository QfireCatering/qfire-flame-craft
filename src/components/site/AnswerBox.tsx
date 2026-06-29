import { Sparkles } from "lucide-react";

/**
 * AnswerBox — GEO-optimized direct-answer block.
 * Modeled after Google's "featured snippet" and the citation style that
 * ChatGPT / Perplexity / Claude pull when summarizing a page. Place ONE near
 * the top of a service or region page, immediately under the hero.
 *
 * Rules of thumb:
 *  - 40–60 words in the answer
 *  - Lead with the literal question phrasing users search
 *  - Include named entities (Qfire Catering, Chef Terry Matthews, region, price)
 */
export interface AnswerBoxProps {
  question: string;
  answer: string;
  bullets?: string[];
  className?: string;
}

export function AnswerBox({ question, answer, bullets, className = "" }: AnswerBoxProps) {
  return (
    <section className={`py-12 lg:py-16 ${className}`}>
      <div className="container-luxe">
        <article
          className="max-w-3xl mx-auto border border-gold/30 bg-gradient-to-br from-onyx/80 to-ink/95 p-8 lg:p-10"
          itemScope
          itemType="https://schema.org/Question"
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="size-4 text-gold" />
            <div className="text-[0.6rem] tracking-[0.32em] uppercase text-gold">Quick Answer</div>
          </div>
          <h2
            className="font-display text-2xl md:text-3xl text-bone leading-tight mb-5"
            itemProp="name"
          >
            {question}
          </h2>
          <div
            itemProp="acceptedAnswer"
            itemScope
            itemType="https://schema.org/Answer"
          >
            <p className="text-bone/85 text-lg leading-relaxed font-light" itemProp="text">
              {answer}
            </p>
            {bullets && bullets.length > 0 && (
              <ul className="mt-5 space-y-2">
                {bullets.map((b) => (
                  <li key={b} className="text-bone/75 pl-5 relative font-light">
                    <span className="absolute left-0 top-2.5 size-1.5 bg-gold rounded-full" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </article>
      </div>
    </section>
  );
}
