const steps = [
  'Send an email to blackossoftwaresolution@gmail.com.',
  'Mention your registered email address or Scholar Number.',
  'Our admin team will process your request within 7 working days.',
];

const deletedData = [
  'User account details such as Name, Email, and Scholar Number',
  'Attendance records',
  'Homework and activity data',
];

const retainedData = [
  'Some records may be retained where needed for administrative review.',
  'Certain information may also be preserved if required for legal, compliance, or security purposes.',
];

export const metadata = {
  title: 'Account Deletion Request - MMPS School App',
  description: 'Instructions for requesting account and associated data deletion for the MMPS School App.',
};

export default function AccountDeletionRequestPage() {
  return (
    <main className="page-shell">
      <section className="hero hero-danger">
        <div className="badge badge-warm">Support and Compliance</div>
        <h1>Account Deletion Request</h1>
        <p className="lead">
          If you want to delete your MMPS School App account and associated data,
          please follow the steps below. This page can be shared directly in the app
          listing or support section.
        </p>

        <div className="top-actions">
          <a href="/privacy-policy" className="action-link">Privacy Policy</a>
          <a href="/account-deletion-request" className="action-link active-link">Account Deletion Request</a>
        </div>

        <div className="hero-grid">
          <div className="hero-card">
            <span className="card-label">Support Email</span>
            <strong>blackossoftwaresolution@gmail.com</strong>
          </div>
          <div className="hero-card">
            <span className="card-label">Turnaround Time</span>
            <strong>Within 7 working days</strong>
          </div>
          <div className="hero-card">
            <span className="card-label">Required Detail</span>
            <strong>Registered email or Scholar Number</strong>
          </div>
        </div>
      </section>

      <section className="highlights">
        <h2>How To Request Deletion</h2>
        <div className="stack-list">
          {steps.map((step, index) => (
            <article key={step} className="stack-card">
              <span className="stack-index">Step {index + 1}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="policy-wrap">
        <article className="policy-card">
          <h3>Data That Will Be Deleted</h3>
          <ul className="info-list">
            {deletedData.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="policy-card">
          <h3>Data That May Be Retained</h3>
          <ul className="info-list">
            {retainedData.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="footer-note">
        <h2>Important Note</h2>
        <p>
          To avoid delays, please make sure your request includes enough information
          to identify the correct account. Incomplete requests may need additional
          verification before deletion is processed.
        </p>
      </section>
    </main>
  );
}
