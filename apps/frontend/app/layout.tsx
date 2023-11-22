import './global.css';

export const metadata = {
  title: 'Allboard',
  description: 'Shared board for everyone',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
