const cards = [
  {
    title: 'Payment reminders',
    body: 'Automated follow-up on overdue invoices. Synced directly from your ERP.',
  },
  {
    title: 'Debt collection',
    body: 'Seamless handover to collection. Full visibility throughout the process.',
  },
  {
    title: 'Partner solution',
    body: 'Built for accountants and groups managing multiple clients.',
  },
]

export default function Features() {
  return (
    <section style={{
      background: 'var(--bg)',
      padding: '96px 48px',
    }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <p style={{
          fontSize: '11px',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.07em',
          color: 'var(--mu)',
          marginBottom: '12px',
        }}>
          Solutions
        </p>
        <h2 style={{
          fontSize: '32px',
          fontWeight: 500,
          letterSpacing: '-0.5px',
          color: 'var(--ink)',
        }}>
          Everything you need to get paid faster
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px',
        maxWidth: '1080px',
        margin: '0 auto',
      }}>
        {cards.map(({ title, body }) => (
          <div key={title} style={{
            background: 'var(--white)',
            border: '1px solid var(--bdr)',
            borderRadius: 'var(--rm)',
            padding: '32px',
          }}>
            <div style={{
              fontSize: '16px',
              fontWeight: 500,
              color: 'var(--ink)',
              marginBottom: '8px',
            }}>
              {title}
            </div>
            <p style={{
              fontSize: '14px',
              color: 'var(--mu)',
              lineHeight: 1.7,
            }}>
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
