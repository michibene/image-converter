import NavigationHeader from "navigation/NavigationHeader";
import ImageConverter from "pages/ImageConverter";
import LandingPage from "pages/LandingPage";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/">
                <Route index element={<LandingPage />} />
                <Route path="/converter" element={<ImageConverter />} />
            </Route>
        )
    );

    return (
        <div className="max-w-7xl mx-auto min-h-screen px-8 lg:px-12 ">
            <NavigationHeader />
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
