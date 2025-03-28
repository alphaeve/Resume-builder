import Home from "../pages/Home/Home";
import Details from "../pages/Details/Details";
import About from "../pages/About/About";
import ErrorBoundary from "../pages/Error/ErrorBoundary";
import PdfComponent from "../pages/PdfComponent/PdfComponent";
import NavbarComponent from "../components/Navbar";
import Login from "../pages/Login/Login";

// Creating routing path
export const routes = [
    {
        path: '/',  
        element: <NavbarComponent />,
        errorElement: <ErrorBoundary />, // Error routing

        children: [
            {
                index: true,  // Makes Login the default route
                element: <Login />
            },
            {
                path: '/home',  // Use lowercase for consistency
                element: <Home />
            },
            {
                path: '/preview',
                element: <PdfComponent />
            },
            {
                path: '/details',
                element: <Details />
            },
            {
                path: '/about',
                element: <About />
            },
        ]
    }
];
