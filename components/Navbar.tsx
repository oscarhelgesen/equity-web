import Link from 'next/link'

export default function Navbar() {
  return (
    <nav style={{
      background: 'var(--g)',
      padding: '0 48px',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div style={{
        fontWeight: 600,
        fontSize: '15px',
        color: '#fff',
        letterSpacing: '-0.3px',
      }}>
        Equity
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        {['Integrationer', 'Priser', 'Om os'].map(item => (
          <Link key={item} href="#" style={{
            fontSize: '13px',
            color: 'rgba(255,255,255,0.5)',
            textDecoration: 'none',
            padding: '6px 12px',
            borderRadius: 'var(--rs)',
          }}>
            {item}
          </Link>
        ))}
        <Link href="#" style={{
          fontSize: '13px',
          fontWeight: 500,
          color: '#fff',
          background: 'rgba(255,255,255,0.12)',
          border: '1px solid rgba(255,255,255,0.15)',
          textDecoration: 'none',
          padding: '7px 16px',
          borderRadius: 'var(--rs)',
          marginLeft: '8px',
        }}>
          Kontakt
        </Link>
      </div>
    </nav>
  )
}