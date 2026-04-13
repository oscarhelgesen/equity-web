'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

const solutionItems = [
  { title: 'Payment reminders', subtitle: 'A/R direct to your bank account.' },
  { title: 'Debt collection',   subtitle: 'Seamless transition.' },
  { title: 'Partner solution',  subtitle: 'For accountants and groups.' },
]

const integrationItems = [
  'e-conomic',
  'Microsoft Business Central',
  'Uniconta',
  'Zenegy',
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const closeTimer              = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }

  const handleNavLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 80)
  }

  const handleDropdownEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }

  const handleDropdownLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 80)
  }

  const navBg      = scrolled ? 'var(--g)' : 'transparent'
  const navShadow  = scrolled ? '0 1px 0 rgba(255,255,255,0.08)' : 'none'
  const linkColor  = 'rgba(255,255,255,0.55)'

  return (
    <>
      <nav
        onMouseEnter={handleNavEnter}
        onMouseLeave={handleNavLeave}
        style={{
          background: navBg,
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 200,
          boxShadow: navShadow,
          transition: 'background 0.2s ease, box-shadow 0.2s ease',
        }}
      >
        {/* Logo — left */}
        <div style={{ paddingLeft: '64px', flexShrink: 0 }}>
          <span style={{
            fontWeight: 500,
            fontSize: '15px',
            color: '#fff',
            letterSpacing: '-0.3px',
          }}>
            Equity
          </span>
        </div>

        {/* Center links — absolutely positioned */}
        <div style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}>
          <button
            onMouseEnter={() => { handleNavEnter(); setOpen(true) }}
            style={{
              fontSize: '13px',
              color: open ? '#fff' : linkColor,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '6px 12px',
              borderRadius: 'var(--rs)',
              fontFamily: 'var(--fn)',
              transition: 'color 0.15s ease',
            }}
          >
            Solutions
          </button>

          {(['Integrations', 'Pricing'] as const).map(label => (
            <Link key={label} href="#" style={{
              fontSize: '13px',
              color: linkColor,
              textDecoration: 'none',
              padding: '6px 12px',
              borderRadius: 'var(--rs)',
            }}>
              {label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div style={{
          marginLeft: 'auto',
          paddingRight: '64px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          flexShrink: 0,
        }}>
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

      {/* Full-width dropdown */}
      {open && (
        <div
          onMouseEnter={handleDropdownEnter}
          onMouseLeave={handleDropdownLeave}
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            right: 0,
            background: 'var(--g)',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            padding: '32px 64px',
            zIndex: 199,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '48px',
          }}
        >
          {/* Column 1 — Solutions */}
          <div>
            <div style={{
              fontSize: '11px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.07em',
              color: 'rgba(255,255,255,0.3)',
              marginBottom: '12px',
            }}>
              Solutions
            </div>
            {solutionItems.map(({ title, subtitle }) => (
              <Link key={title} href="#" style={{ textDecoration: 'none', display: 'block' }}>
                <div
                  style={{ padding: '10px 0' }}
                  onMouseEnter={e => {
                    (e.currentTarget.querySelector('.item-title') as HTMLElement).style.color = '#4DB89E'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget.querySelector('.item-title') as HTMLElement).style.color = '#fff'
                  }}
                >
                  <div className="item-title" style={{ fontSize: '14px', fontWeight: 500, color: '#fff', transition: 'color 0.15s ease' }}>{title}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '2px' }}>{subtitle}</div>
                </div>
              </Link>
            ))}
          </div>

          {/* Column 2 — Integrations */}
          <div>
            <div style={{
              fontSize: '11px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.07em',
              color: 'rgba(255,255,255,0.3)',
              marginBottom: '12px',
            }}>
              Integrations
            </div>
            {integrationItems.map(name => (
              <Link key={name} href="#" style={{ textDecoration: 'none', display: 'block' }}>
                <div
                  style={{ padding: '10px 0' }}
                  onMouseEnter={e => {
                    (e.currentTarget.querySelector('.item-title') as HTMLElement).style.color = '#4DB89E'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget.querySelector('.item-title') as HTMLElement).style.color = '#fff'
                  }}
                >
                  <div className="item-title" style={{ fontSize: '14px', fontWeight: 500, color: '#fff', transition: 'color 0.15s ease' }}>{name}</div>
                </div>
              </Link>
            ))}
            <Link href="#" style={{
              display: 'inline-block',
              marginTop: '8px',
              fontSize: '13px',
              color: '#4DB89E',
              textDecoration: 'none',
            }}>
              + See all integrations
            </Link>
          </div>

          {/* Column 3 — Featured card */}
          <div>
            <div style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 'var(--rm)',
              padding: '20px',
            }}>
              <span style={{
                display: 'inline-block',
                fontSize: '11px',
                fontWeight: 600,
                color: '#4DB89E',
                background: 'rgba(77,184,158,0.12)',
                border: '1px solid rgba(77,184,158,0.2)',
                borderRadius: '20px',
                padding: '2px 10px',
                marginBottom: '12px',
              }}>
                New
              </span>
              <div style={{ fontSize: '14px', fontWeight: 500, color: '#fff', marginBottom: '6px' }}>
                Book a demo
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', marginBottom: '16px' }}>
                See Equity in action in 20 minutes.
              </div>
              <Link href="#" style={{
                display: 'inline-block',
                fontSize: '13px',
                fontWeight: 500,
                color: 'var(--g)',
                background: '#fff',
                textDecoration: 'none',
                padding: '8px 18px',
                borderRadius: 'var(--rs)',
              }}>
                Book now
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
