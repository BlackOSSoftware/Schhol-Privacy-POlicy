import './globals.css';

export const metadata = {
  title: 'MMPS School App Web Pages',
  description: 'Privacy Policy and Account Deletion Request pages for the MMPS School App.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
