import Link from 'next/link'

export default function Navbar() {
  return (
    <nav style={{
      background: 'var(--white)',
      borderBottom: '1px solid var(--bdr)',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 48px',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div style={{ fontWeight: 600, fontSize: '15px', color: 'var(--ink)', letterSpacing: '-0.3px' }}>
        Equity
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        {['Integrationer', 'Priser', 'Om os'].map(item => (
          <Link key={item} href="#" style={{
            fontSize: '13px',
            color: 'var(--mu)',
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
          color: 'var(--white)',
          background: 'var(--g)',
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