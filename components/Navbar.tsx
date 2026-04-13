'use client'

import Link from 'next/link'
import { useState } from 'react'

const solutions = [
  { title: 'Payment reminders', subtitle: 'From invoice to paid.' },
  { title: 'Debt collection',   subtitle: 'Seamless transition.' },
  { title: 'Partner solution',  subtitle: 'For accountants and groups.' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

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
        fontWeight: 500,
        fontSize: '15px',
        color: '#fff',
        letterSpacing: '-0.3px',
      }}>
        Equity
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>

        {/* Solutions dropdown */}
        <div
          style={{ position: 'relative' }}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button style={{
            fontSize: '13px',
            color: 'rgba(255,255,255,0.5)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '6px 12px',
            borderRadius: 'var(--rs)',
            fontFamily: 'var(--fn)',
          }}>
            Solutions
          </button>

          {open && (
            <div style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              marginTop: '8px',
              background: '#fff',
              border: '1px solid var(--bdr)',
              borderRadius: 'var(--rm)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
              padding: '8px',
              minWidth: '220px',
            }}>
              {solutions.map(({ title, subtitle }) => (
                <Link key={title} href="#" style={{ textDecoration: 'none', display: 'block' }}>
                  <div
                    style={{
                      padding: '10px 14px',
                      borderRadius: 'var(--rs)',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg2)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                  >
                    <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--ink)' }}>{title}</div>
                    <div style={{ fontSize: '12px', color: 'var(--mu)', marginTop: '2px' }}>{subtitle}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link href="#" style={{
          fontSize: '13px',
          color: 'rgba(255,255,255,0.5)',
          textDecoration: 'none',
          padding: '6px 12px',
          borderRadius: 'var(--rs)',
        }}>
          Integrations
        </Link>

        <Link href="#" style={{
          fontSize: '13px',
          color: 'rgba(255,255,255,0.5)',
          textDecoration: 'none',
          padding: '6px 12px',
          borderRadius: 'var(--rs)',
        }}>
          Pricing
        </Link>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <Link href="#" style={{
          fontSize: '13px',
          color: 'rgba(255,255,255,0.4)',
          textDecoration: 'none',
          padding: '6px 12px',
          borderRadius: 'var(--rs)',
        }}>
          Log in
        </Link>
        <Link href="#" style={{
          fontSize: '13px',
          fontWeight: 500,
          color: '#fff',
          background: 'rgba(255,255,255,0.12)',
          border: '1px solid rgba(255,255,255,0.15)',
          textDecoration: 'none',
          padding: '7px 16px',
          borderRadius: 'var(--rs)',
          marginLeft: '4px',
        }}>
          Contact
        </Link>
      </div>
    </nav>
  )
}
