import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Contact from "../Pages/Contact/Contact";
import Portfolio from "../Pages/Portfolio/Portfolio";

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
]);
