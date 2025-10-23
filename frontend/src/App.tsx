import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes';

export default function App() {
  const element = useRoutes(routes);
  return (
    <Suspense fallback={<div className="min-h-screen grid place-items-center text-center p-6">Завантаження…</div>}>
      {element}
    </Suspense>
  );
}
