import Link from 'next/link'

export default function Hero() {
  return (
    <section style={{
      background: 'var(--g)',
      padding: '120px 48px 140px',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '7px',
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.14)',
          borderRadius: 'var(--rx)',
          padding: '4px 14px',
          fontSize: '11px',
          fontWeight: 600,
          textTransform: 'uppercase' as const,
          letterSpacing: '0.07em',
          color: '#4DB89E',
          marginBottom: '32px',
        }}>
          Fakturaopfølgning & inkasso
        </div>

        <h1 style={{
          fontSize: '56px',
          fontWeight: 500,
          letterSpacing: '-1.5px',
          color: '#fff',
          lineHeight: 1.05,
          marginBottom: '24px',
        }}>
          Stop med at rykke manuelt. Lad Equity gøre det.
        </h1>

        <p style={{
          fontSize: '17px',
          color: 'rgba(255,255,255,0.45)',
          lineHeight: 1.7,
          marginBottom: '48px',
          maxWidth: '520px',
          margin: '0 auto 48px',
        }}>
          Se hvad der er forfaldent, hvem der skylder, og hvad næste skridt er — alt synkroniseret direkte fra dit ERP-system.
        </p>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', justifyContent: 'center' }}>
          <Link href="#" style={{
            fontSize: '14px',
            fontWeight: 500,
            color: 'var(--g)',
            background: '#fff',
            textDecoration: 'none',
            padding: '12px 28px',
            borderRadius: 'var(--rs)',
          }}>
            Book en demo
          </Link>
          <Link href="#" style={{
            fontSize: '14px',
            color: 'rgba(255,255,255,0.6)',
            textDecoration: 'none',
            padding: '12px 28px',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: 'var(--rs)',
          }}>
            Se hvordan det virker
          </Link>
        </div>

        <p style={{
          fontSize: '12px',
          color: 'rgba(255,255,255,0.2)',
          marginTop: '20px',
        }}>
          Ingen binding. Onboarding tager under én dag.
        </p>

      </div>
    </section>
  )
}