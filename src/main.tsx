import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";
import MocPage from './pages/moc';
import AAPage from './pages/arbitration';
import PFPage from './pages/fiction';
import ASPage from './pages/shadow';
import Navbar from './layout/nav';

const router = createBrowserRouter([
  {
    element: (<>
      <Navbar />
      <Outlet />
    </>),
    children: [
      {
        path: "/",
        element: <div>No page</div>
      },
      {
        path: "/chaos",
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
    ]
  }

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
