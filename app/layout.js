import './globals.css';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';

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
        <Contact />
      </body>
    </html>
  );
}
