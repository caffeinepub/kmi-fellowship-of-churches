import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import SiteLayout from './components/SiteLayout';
import HomePage from './pages/HomePage';
import AboutMinistryPage from './pages/AboutMinistryPage';
import LeadershipPage from './pages/LeadershipPage';
import WorshipServicesPage from './pages/WorshipServicesPage';
import LearningStudyPage from './pages/LearningStudyPage';
import PropheticTrainingPage from './pages/PropheticTrainingPage';
import KmiFellowshipPage from './pages/KmiFellowshipPage';
import KmiGovernancePage from './pages/KmiGovernancePage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import PrayerRequestPage from './pages/PrayerRequestPage';
import ScheduleMeetingPage from './pages/ScheduleMeetingPage';

const rootRoute = createRootRoute({
  component: SiteLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutMinistryPage,
});

const leadershipRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/leadership',
  component: LeadershipPage,
});

const worshipServicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/worship-services',
  component: WorshipServicesPage,
});

const learningStudyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learning-study',
  component: LearningStudyPage,
});

const propheticTrainingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/prophetic-training',
  component: PropheticTrainingPage,
});

const kmiFellowshipRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/kmi-fellowship',
  component: KmiFellowshipPage,
});

const kmiGovernanceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/kmi-governance',
  component: KmiGovernancePage,
});

const getInvolvedRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/get-involved',
  component: GetInvolvedPage,
});

const prayerRequestRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/prayer-request',
  component: PrayerRequestPage,
});

const scheduleMeetingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/schedule-meeting',
  component: ScheduleMeetingPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  leadershipRoute,
  worshipServicesRoute,
  learningStudyRoute,
  propheticTrainingRoute,
  kmiFellowshipRoute,
  kmiGovernanceRoute,
  getInvolvedRoute,
  prayerRequestRoute,
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
