import Navbar from '@/components/Navbar';
import { ReactNode } from 'react';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div>
      {/* <nav>
        <a href="/">Home</a>
        <a href="/admin">Dashboard</a>
      </nav> */}
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
