import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import SiteLayout from './components/SiteLayout';
import HomePage from './pages/HomePage';
import WhoWeArePage from './pages/WhoWeArePage';
import OurMissionPage from './pages/OurMissionPage';
import VisitPage from './pages/VisitPage';
import MinistriesPage from './pages/MinistriesPage';
import OutreachPage from './pages/OutreachPage';
import ConnectPage from './pages/ConnectPage';
import GatheringAt6Page from './pages/GatheringAt6Page';
import LeadershipGovernancePage from './pages/LeadershipGovernancePage';
import ScheduleMeetingPage from './pages/ScheduleMeetingPage';

const rootRoute = createRootRoute({
  component: SiteLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const whoWeAreRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/who-we-are',
  component: WhoWeArePage,
});

const missionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/our-mission',
  component: OurMissionPage,
});

const visitRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/visit',
  component: VisitPage,
});

const ministriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/ministries',
  component: MinistriesPage,
});

const outreachRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/outreach',
  component: OutreachPage,
});

const connectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/connect',
  component: ConnectPage,
});

const gatheringRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/gathering-at-6',
  component: GatheringAt6Page,
});

const leadershipRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/leadership',
  component: LeadershipGovernancePage,
});

const scheduleMeetingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/schedule-meeting',
  component: ScheduleMeetingPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  whoWeAreRoute,
  missionRoute,
  visitRoute,
  ministriesRoute,
  outreachRoute,
  connectRoute,
  gatheringRoute,
  leadershipRoute,
  scheduleMeetingRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
