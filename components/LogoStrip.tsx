const logos = ['e-conomic', 'Business Central', 'Uniconta', 'Zenegy', 'Visma']

export default function LogoStrip() {
  return (
    <section style={{
      background: 'var(--white)',
      borderBottom: '1px solid var(--bdr)',
      padding: '32px 48px',
      textAlign: 'center',
    }}>
      <p style={{
        fontSize: '11px',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.07em',
        color: 'var(--mu)',
        marginBottom: '24px',
      }}>
        Integrated with leading ERP systems
      </p>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '48px',
        flexWrap: 'wrap',
      }}>
        {logos.map(name => (
          <span key={name} style={{
            fontFamily: 'var(--mo)',
            fontSize: '13px',
            color: 'var(--sub)',
          }}>
            {name}
          </span>
        ))}
      </div>
    </section>
  )
}
