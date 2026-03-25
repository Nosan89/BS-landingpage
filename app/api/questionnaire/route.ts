import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { name, email, occupation, workHours, sleep, exercise, motivation, commitment, lang } = await req.json()

  const isCz = lang !== 'en'

  const subject = `Nový zájemce: ${name}${occupation ? ` — ${occupation}` : ''}`

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: Arial, sans-serif; background: #060e1a; color: #e2e8f0; padding: 32px; max-width: 600px; margin: 0 auto;">
  <div style="border-left: 3px solid #10b981; padding-left: 20px; margin-bottom: 32px;">
    <h1 style="font-size: 24px; margin: 0 0 4px; color: #fff;">${name}</h1>
    <p style="margin: 0; color: #94a3b8; font-size: 14px;">${email}${occupation ? ` · ${occupation}` : ''}</p>
  </div>

  <table style="width: 100%; border-collapse: collapse;">
    <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
      <td style="padding: 12px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 45%;">
        ${isCz ? 'Hodiny práce/týden' : 'Work hours/week'}
      </td>
      <td style="padding: 12px 0; font-size: 14px; font-weight: 600;">${workHours || '—'}</td>
    </tr>
    <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
      <td style="padding: 12px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">
        ${isCz ? 'Spánek' : 'Sleep'}
      </td>
      <td style="padding: 12px 0; font-size: 14px; font-weight: 600;">${sleep || '—'}</td>
    </tr>
    <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
      <td style="padding: 12px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">
        ${isCz ? 'Cvičení' : 'Exercise'}
      </td>
      <td style="padding: 12px 0; font-size: 14px; font-weight: 600;">${exercise || '—'}</td>
    </tr>
    <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
      <td style="padding: 12px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">
        ${isCz ? 'Motivace' : 'Motivation'}
      </td>
      <td style="padding: 12px 0; font-size: 14px; font-weight: 600;">
        ${Array.isArray(motivation) ? motivation.join(', ') : '—'}
      </td>
    </tr>
    <tr>
      <td style="padding: 12px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">
        ${isCz ? 'Připravenost investovat' : 'Commitment'}
      </td>
      <td style="padding: 12px 0; font-size: 14px; font-weight: 600;">${commitment || '—'}</td>
    </tr>
  </table>

  <div style="margin-top: 32px; padding: 16px; background: rgba(16,185,129,0.08); border: 1px solid rgba(16,185,129,0.15);">
    <a href="mailto:${email}" style="color: #10b981; font-size: 14px; font-weight: 700; text-decoration: none;">
      ${isCz ? 'Odpovědět' : 'Reply'}: ${email}
    </a>
  </div>

  <p style="margin-top: 24px; font-size: 11px; color: #334155;">
    ${isCz ? 'Formulář odeslán z' : 'Form submitted from'} biostrategy.co · ${new Date().toLocaleString('cs-CZ', { timeZone: 'Europe/Prague' })}
  </p>
</body>
</html>
`

  const { error } = await resend.emails.send({
    from: 'BioStrategy <noreply@biostrategy.co>',
    to: 'jakub.nosek@biostrategy.co',
    replyTo: email,
    subject,
    html,
  })

  if (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
