import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MocPage from './pages/moc';
import AAPage from './pages/arbitration';
import PFPage from './pages/fiction';
import ASPage from './pages/shadow';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MocPage />,
  },
  {
    path: "/arbitration",
    element: <AAPage />
  },
  {
    path: "/fiction",
    element: <PFPage />
  },
  {
    path: "/shadow",
    element: <ASPage />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
