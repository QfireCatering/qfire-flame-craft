import React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  name?: string
  email?: string
  phone?: string
  date?: string
  guests?: string
  region?: string
  type?: string
  menu?: string
  message?: string
  source?: string
  submittedAt?: string
}

const rowLabel: React.CSSProperties = {
  color: '#8a8580',
  fontSize: '11px',
  textTransform: 'uppercase',
  letterSpacing: '0.15em',
  margin: '0 0 4px',
}
const rowValue: React.CSSProperties = {
  color: '#111',
  fontSize: '16px',
  margin: '0 0 16px',
  lineHeight: '1.5',
}

const Row = ({ label, value }: { label: string; value?: string }) =>
  value && value.trim() ? (
    <>
      <Text style={rowLabel}>{label}</Text>
      <Text style={rowValue}>{value}</Text>
    </>
  ) : null

const Email = ({
  name,
  email,
  phone,
  date,
  guests,
  region,
  type,
  menu,
  message,
  source,
  submittedAt,
}: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>{`New quote request from ${name ?? 'a client'}${date ? ` for ${date}` : ''}`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Quote Request</Heading>
        <Text style={subtitle}>Qfire Catering — submitted via the website</Text>
        <Hr style={hr} />
        <Section>
          <Row label="Name" value={name} />
          <Row label="Email" value={email} />
          <Row label="Cell Phone" value={phone} />
          <Row label="Event Date" value={date} />
          <Row label="Guests" value={guests} />
          <Row label="Region" value={region} />
          <Row label="Event Type" value={type} />
          <Row label="Menu Interest" value={menu} />
          <Row label="Message" value={message} />
        </Section>
        <Hr style={hr} />
        <Text style={meta}>
          Source: {source || 'quote'} · Submitted: {submittedAt || '—'}
        </Text>
        <Text style={meta}>Reply to the client directly at {email || 'their email above'}.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (data: Record<string, any>) =>
    `New Quote Request — ${data.name || 'Website Lead'}${data.date ? ` (${data.date})` : ''}`,
  displayName: 'Quote Lead Notification',
  to: 'Eat@QfireCatering.com',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    phone: '(602) 555-0123',
    date: '2026-05-15',
    guests: '120',
    region: 'Arizona',
    type: 'Wedding',
    menu: 'Wood-Fired Catering',
    message: 'Outdoor ceremony, we love the brisket!',
    source: 'quote',
    submittedAt: new Date().toISOString(),
  },
} satisfies TemplateEntry

const main: React.CSSProperties = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
  padding: '24px 0',
}
const container: React.CSSProperties = {
  maxWidth: '560px',
  margin: '0 auto',
  padding: '32px 28px',
  border: '1px solid #eee',
  borderRadius: '4px',
}
const h1: React.CSSProperties = {
  color: '#0a0907',
  fontSize: '24px',
  margin: '0 0 4px',
}
const subtitle: React.CSSProperties = {
  color: '#b48b3a',
  fontSize: '12px',
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  margin: '0 0 16px',
}
const hr: React.CSSProperties = { borderColor: '#eee', margin: '20px 0' }
const meta: React.CSSProperties = { color: '#888', fontSize: '12px', margin: '4px 0' }
