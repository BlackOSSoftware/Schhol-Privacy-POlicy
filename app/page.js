const sections = [
  {
    title: '1. Overview',
    body: [
      'This Privacy Policy explains how the School App collects, uses, stores, and protects information when students, parents, teachers, and school administrators use the app.',
      'The app is designed to support school communication and academic operations, including login access, attendance, announcements, homework and notes sharing, study material downloads, notification delivery, bus tracking access, and fee payment redirection.',
    ],
  },
  {
    title: '2. Information We Collect',
    body: [
      'Depending on your role and account, the app may process basic profile details such as name, scholar number, class, section, session, parent name, phone number, and user role.',
      'The app may also process academic and operational data such as attendance records, announcements, homework, notes, uploaded study files, class information, teacher records, bus assignment details, and session information.',
      'When notifications are enabled, the app may collect and store a Firebase Cloud Messaging token so the school can send important updates to your device.',
      'When study files are downloaded, copies may be stored locally on the device in the app documents area for easier access.',
    ],
  },
  {
    title: '3. How the App Uses Your Information',
    body: [
      'Your information is used to authenticate your account, show your dashboard, display attendance and academic data, deliver school announcements, provide homework and notes access, support password updates, and maintain role-based access for students, teachers, and administrators.',
      'Notification tokens are used only to deliver push notifications such as school updates or reminders.',
      'Bus-related details may be shown inside the app so the assigned user can open the external bus tracking portal.',
      'Fee payment is handled by redirecting users to an external payment page. The app itself does not appear to process card or banking information directly in its own codebase.',
    ],
  },
  {
    title: '4. Device Permissions',
    body: [
      'The Android app currently requests internet access so it can connect with backend services and fetch account, attendance, content, and announcement data.',
      'The app also requests notification permission on supported Android versions so it can send push notifications through Firebase Cloud Messaging.',
      'Based on the current mobile codebase, the app does not appear to request direct access to camera, microphone, contacts, or location permissions.',
    ],
  },
  {
    title: '5. Downloads and Local Storage',
    body: [
      'Study materials such as homework and notes files may be downloaded and stored on the device to help users open them later.',
      'Session-related information needed to keep the user signed in may also be stored locally on the device.',
      'Users are responsible for keeping their own devices secure, especially on shared phones or tablets.',
    ],
  },
  {
    title: '6. Third-Party Services',
    body: [
      'The app uses Firebase Cloud Messaging to support push notifications.',
      'The app may open external links for fee payment and bus tracking. These external services operate under their own terms and privacy policies.',
      'Because those third-party pages are outside this app, users should review their policies separately before entering any sensitive information.',
    ],
  },
  {
    title: '7. Data Sharing',
    body: [
      'Information is shared within the school system only as needed to provide the service, such as showing student data to authorized school staff, assigned teachers, students, or administrators according to role-based access.',
      'The app should not sell personal information. Any disclosure outside normal school operations should happen only when required for service delivery, legal compliance, safety, or with proper authorization.',
    ],
  },
  {
    title: '8. Data Security',
    body: [
      'Reasonable steps should be taken to protect personal information against unauthorized access, misuse, or disclosure.',
      'No digital system can guarantee absolute security, but the app is intended to use authenticated access and controlled APIs for protected school data.',
    ],
  },
  {
    title: "9. Children's Privacy",
    body: [
      'Because this is a school-focused platform, some user data may belong to children or minors and is expected to be managed under school supervision or parent/guardian awareness.',
      'Schools and app operators should ensure that any required parent, guardian, or institutional permissions are obtained where applicable.',
    ],
  },
  {
    title: '10. Your Choices and Rights',
    body: [
      'Users may contact the school or app administrator to request correction of inaccurate profile details, attendance issues, or account-related concerns.',
      'Users may also disable notifications from their device settings, although this may prevent them from receiving important school updates.',
    ],
  },
  {
    title: '11. Policy Updates',
    body: [
      'This Privacy Policy may be updated from time to time to reflect app improvements, legal requirements, or operational changes.',
      'The latest version should always be published on the official privacy policy webpage linked with the app.',
    ],
  },
  {
    title: '12. Contact',
    body: [
      'For questions about this Privacy Policy, data handling, or correction requests, please contact the school administration or the official app support contact.',
      'Before publishing this page, replace the contact section with the school name, email address, phone number, and office address.',
    ],
  },
];

const highlights = [
  'Student, teacher, and admin role-based access',
  'Attendance tracking and reporting',
  'Homework, notes, and study file access',
  'School announcements and push notifications',
  'External fee payment and bus tracking links',
  'Local storage for session and downloaded files',
];

export default function PrivacyPolicyPage() {
  const updatedOn = '16 April 2026';

  return (
    <main className="page-shell">
      <section className="hero">
        <div className="badge">Official Web Page</div>
        <h1>School App Privacy Policy</h1>
        <p className="lead">
          A clear and complete privacy policy page for the School App, based on the
          app&apos;s current functionality and permissions.
        </p>

        <div className="hero-grid">
          <div className="hero-card">
            <span className="card-label">Last Updated</span>
            <strong>{updatedOn}</strong>
          </div>
          <div className="hero-card">
            <span className="card-label">App Package</span>
            <strong>com.schoolapp</strong>
          </div>
          <div className="hero-card">
            <span className="card-label">Primary Use</span>
            <strong>School communication and academic access</strong>
          </div>
        </div>
      </section>

      <section className="highlights">
        <h2>What This App Does</h2>
        <div className="chip-grid">
          {highlights.map(item => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="policy-wrap">
        {sections.map(section => (
          <article key={section.title} className="policy-card">
            <h3>{section.title}</h3>
            {section.body.map(paragraph => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        ))}
      </section>

      <section className="footer-note">
        <h2>Important Publishing Note</h2>
        <p>
          This page is written to match the current School App codebase as closely as possible.
          Before making it public, you should review the final legal wording and add the real
          school or company contact information.
        </p>
      </section>
    </main>
  );
}
