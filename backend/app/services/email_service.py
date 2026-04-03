import resend
from app.config import settings

resend.api_key = settings.resend_api_key


def _send(to: str, subject: str, html: str) -> None:
    resend.Emails.send({
        "from": settings.from_email,
        "to": [to],
        "subject": subject,
        "html": html,
    })


def send_booking_confirmation(booking) -> None:
    duration_label = f"{booking.duration_minutes} minutes"
    html = f"""
    <h2>Your consultation is confirmed! 🎉</h2>
    <p>Hi {booking.name},</p>
    <p>Your nutrition consultation with Paola Michelle has been confirmed.</p>
    <table>
      <tr><td><strong>Date:</strong></td><td>{booking.date}</td></tr>
      <tr><td><strong>Time:</strong></td><td>{booking.time} (CET)</td></tr>
      <tr><td><strong>Duration:</strong></td><td>{duration_label}</td></tr>
      <tr><td><strong>Format:</strong></td><td>Video call (link sent separately)</td></tr>
    </table>
    <p>If you have any questions, reply to this email or reach out via WhatsApp.</p>
    <p>See you soon!<br><strong>Paola Michelle</strong></p>
    """
    _send(booking.email, "Consultation Confirmed — TODOenBALANCE", html)


def send_booking_notification_to_paola(booking) -> None:
    html = f"""
    <h2>New Booking 📅</h2>
    <ul>
      <li><strong>Patient:</strong> {booking.name}</li>
      <li><strong>Email:</strong> {booking.email}</li>
      <li><strong>Phone:</strong> {booking.phone}</li>
      <li><strong>Date:</strong> {booking.date} at {booking.time}</li>
      <li><strong>Duration:</strong> {booking.duration_minutes} min</li>
      <li><strong>Concerns:</strong> {booking.concerns or "none provided"}</li>
    </ul>
    <p><a href="{settings.frontend_url}/admin/dashboard">View in dashboard →</a></p>
    """
    _send(settings.paola_email, f"New booking: {booking.name} on {booking.date}", html)


def send_diet_download(customer_email: str, diet_name: str, download_url: str) -> None:
    html = f"""
    <h2>Your diet plan is ready! 🥗</h2>
    <p>Thank you for your purchase of <strong>{diet_name}</strong>.</p>
    <p><a href="{download_url}" style="background:#4A90E2;color:white;padding:12px 24px;border-radius:6px;text-decoration:none;">
      Download your plan →
    </a></p>
    <p><small>This link expires in 24 hours.</small></p>
    <p>Enjoy and let us know how it goes!<br><strong>Paola Michelle</strong></p>
    """
    _send(customer_email, f"Your {diet_name} — TODOenBALANCE", html)


def send_contact_notification(submission) -> None:
    html = f"""
    <h2>New Contact Message</h2>
    <p><strong>From:</strong> {submission.name} ({submission.email})</p>
    <p><strong>Message:</strong></p>
    <blockquote>{submission.message}</blockquote>
    """
    _send(settings.paola_email, f"Contact form: {submission.name}", html)
