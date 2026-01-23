import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'John Patrick Hinek | Marketing & Operations Leader',
  description: 'Building marketing teams and operations from zero at high-growth startups'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
