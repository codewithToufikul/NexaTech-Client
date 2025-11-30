import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Contact from "../Pages/Contact/Contact";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Login from "../Pages/Admin/Login";
import Dashboard from "../Pages/Admin/Dashboard";
import DashboardHome from "../Pages/Admin/DashboardHome";
import ServicesManagement from "../Pages/Admin/ServicesManagement";
import PortfolioManagement from "../Pages/Admin/PortfolioManagement";
import ContactsManagement from "../Pages/Admin/ContactsManagement";
import Analytics from "../Pages/Admin/Analytics";
import ProtectedRoute from "../Components/ProtectedRoute";
import NotFound from "../Pages/Error/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/about",
            element: <About/>
        },
        {
            path: "/services",
            element: <Services/>
        },
        {
            path: "/services/:id",
            element: <ServiceDetails/>
        },
        {
            path: "/portfolio",
            element: <Portfolio/>
        },
        {
            path: "/contact",
            element: <Contact/>
        }
    ]
  },
  {
    path: "/admin/login",
    element: <Login/>
  },
  {
    path: "/admin/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard>
          <DashboardHome/>
        </Dashboard>
      </ProtectedRoute>
    )
  },
  {
    path: "/admin/dashboard/services",
    element: (
      <ProtectedRoute>
        <Dashboard>
          <ServicesManagement/>
        </Dashboard>
      </ProtectedRoute>
    )
  },
  {
    path: "/admin/dashboard/portfolio",
    element: (
      <ProtectedRoute>
        <Dashboard>
          <PortfolioManagement/>
        </Dashboard>
      </ProtectedRoute>
    )
  },
  {
    path: "/admin/dashboard/contacts",
    element: (
      <ProtectedRoute>
        <Dashboard>
          <ContactsManagement/>
        </Dashboard>
      </ProtectedRoute>
    )
  },
  {
    path: "/admin/dashboard/analytics",
    element: (
      <ProtectedRoute>
        <Dashboard>
          <Analytics/>
        </Dashboard>
      </ProtectedRoute>
    )
  },
  {
    path: "*",
    element: <NotFound/>
  },
]);
