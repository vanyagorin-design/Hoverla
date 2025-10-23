import { lazy } from 'react';

export const HomePage = lazy(() => import('./pages/HomePage'));
export const AboutPage = lazy(() => import('./pages/AboutPage'));
export const TeamPage = lazy(() => import('./pages/TeamPage'));
export const MatchesPage = lazy(() => import('./pages/MatchesPage'));
export const NewsPage = lazy(() => import('./pages/NewsPage'));
export const GalleryPage = lazy(() => import('./pages/GalleryPage'));
export const ContactPage = lazy(() => import('./pages/ContactPage'));

export const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/team', element: <TeamPage /> },
  { path: '/matches', element: <MatchesPage /> },
  { path: '/news', element: <NewsPage /> },
  { path: '/gallery', element: <GalleryPage /> },
  { path: '/contact', element: <ContactPage /> },
];
