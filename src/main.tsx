import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";
import MocPage from './pages/moc';
import AAPage from './pages/arbitration';
import PFPage from './pages/fiction';
import ASPage from './pages/shadow';
import Navbar from './layout/nav';
import HomePage from './pages/home';
import { LanguageProvider } from './components/i18n/LanguageProvider';
import { LoadedFileProvider } from './components/i18n/LoadedFileProvider';
import { SettingsProvider } from './components/Settings/SettingsProvider';

const router = createBrowserRouter([
  {
    element: (<>
      <Navbar />
      <Outlet />
    </>),
    children: [
      {
        path: "/",
        element: <HomePage />
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
    <SettingsProvider>
      <LanguageProvider>
        <LoadedFileProvider>
          <RouterProvider router={router} />
        </LoadedFileProvider>
      </LanguageProvider>
    </SettingsProvider>
  </StrictMode>,
)
