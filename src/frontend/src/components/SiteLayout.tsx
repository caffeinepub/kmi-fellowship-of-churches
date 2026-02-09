import { Outlet } from '@tanstack/react-router';
import SiteNav from './SiteNav';
import SiteFooter from './SiteFooter';
import SeoManager from './SeoManager';

export default function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SeoManager />
      <SiteNav />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
