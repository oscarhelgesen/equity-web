import Link from 'next/link'

export default function Hero() {
  return (
    <section style={{
      background: 'var(--g)',
      padding: '96px 48px',
    }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '7px',
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.14)',
          borderRadius: 'var(--rx)',
          padding: '4px 14px',
          fontSize: '11px',
          fontWeight: 700,
          textTransform: 'uppercase' as const,
          letterSpacing: '0.07em',
          color: '#4DB89E',
          marginBottom: '24px',
        }}>
          Fakturaopfølgning & inkasso
        </div>

        <h1 style={{
          fontSize: '48px',
          fontWeight: 500,
          letterSpacing: '-1px',
          color: '#fff',
          lineHeight: 1.1,
          marginBottom: '20px',
          maxWidth: '620px',
        }}>
          Stop med at rykke manuelt. Lad Equity gøre det.
        </h1>

        <p style={{
          fontSize: '16px',
          color: 'rgba(255,255,255,0.5)',
          maxWidth: '480px',
          lineHeight: 1.7,
          marginBottom: '16px',
        }}>
          Se hvad der er forfaldent, hvem der skylder, og hvad næste skridt er — alt synkroniseret direkte fra dit ERP-system.
        </p>

        <p style={{
          fontSize: '13px',
          color: 'rgba(255,255,255,0.25)',
          marginBottom: '40px',
        }}>
          Brugt af virksomheder der tilsammen håndterer milliarder i tilgodehavender
        </p>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Link href="#" style={{
            fontSize: '14px',
            fontWeight: 500,
            color: 'var(--g)',
            background: '#fff',
            textDecoration: 'none',
            padding: '10px 24px',
            borderRadius: 'var(--rs)',
          }}>
            Book en demo
          </Link>
          <Link href="#" style={{
            fontSize: '14px',
            color: 'rgba(255,255,255,0.6)',
            textDecoration: 'none',
            padding: '10px 24px',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: 'var(--rs)',
          }}>
            Se hvordan det virker
          </Link>
        </div>

        <p style={{
          fontSize: '12px',
          color: 'rgba(255,255,255,0.2)',
          marginTop: '16px',
        }}>
          Ingen binding. Onboarding tager under én dag.
        </p>
      </div>
    </section>
  )
}