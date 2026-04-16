import './globals.css';

export const metadata = {
  title: 'School App Privacy Policy',
  description: 'Privacy Policy page for the School App platform.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
