import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Ochrana soukromí - BioStrategy',
}

export default function OchranaPrivacy() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 120, paddingBottom: 80, minHeight: '100vh' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            fontSize: 11, fontWeight: 800, letterSpacing: '3.5px',
            textTransform: 'uppercase', color: '#d4a84b', marginBottom: 20,
          }}>
            <span style={{ width: 40, height: 2, background: '#d4a84b', display: 'inline-block' }} />
            GDPR
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,4.5vw,56px)', lineHeight: 1, letterSpacing: 1, marginBottom: 40 }}>
            OCHRANA SOUKROMÍ
          </h1>

          <div style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: 15 }}>
            <p style={{ marginBottom: 24, padding: 24, background: '#0f1f38', border: '1px solid rgba(212,168,75,0.1)', borderLeft: '3px solid #d4a84b' }}>
              <strong style={{ color: '#e8be6a' }}>Placeholder - obsah dodá právnička.</strong><br />
              Tento text bude nahrazen finální GDPR / privacy policy po jejím zpracování.
            </p>

            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, letterSpacing: 1, color: '#ffffff', marginBottom: 12, marginTop: 32 }}>1. SPRÁVCE OSOBNÍCH ÚDAJŮ</h2>
            <p style={{ marginBottom: 16 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, letterSpacing: 1, color: '#ffffff', marginBottom: 12, marginTop: 32 }}>2. JAKÉ ÚDAJE ZPRACOVÁVÁME</h2>
            <p style={{ marginBottom: 16 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Zpracováváme pouze údaje nezbytné pro poskytnutí služeb.</p>

            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, letterSpacing: 1, color: '#ffffff', marginBottom: 12, marginTop: 32 }}>3. ÚČEL ZPRACOVÁNÍ</h2>
            <p style={{ marginBottom: 16 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, letterSpacing: 1, color: '#ffffff', marginBottom: 12, marginTop: 32 }}>4. VAŠE PRÁVA</h2>
            <p style={{ marginBottom: 16 }}>Máte právo na přístup k osobním údajům, jejich opravu, výmaz, omezení zpracování a přenositelnost. Lorem ipsum dolor sit amet.</p>

            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, letterSpacing: 1, color: '#ffffff', marginBottom: 12, marginTop: 32 }}>5. COOKIES</h2>
            <p style={{ marginBottom: 16 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <p style={{ marginTop: 40, fontSize: 13, color: '#475569' }}>
              Dotazy ohledně ochrany soukromí: <a href="mailto:jakub.nosek@biostrategy.co" style={{ color: '#d4a84b', textDecoration: 'none' }}>jakub.nosek@biostrategy.co</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
