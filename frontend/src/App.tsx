import NavigationHeader from "navigation/NavigationHeader";
import ImageConverter from "pages/ImageConverter";
import LandingPage from "pages/LandingPage";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/">
                <Route
                    index
                    element={
                        <>
                            <NavigationHeader />
                            <LandingPage />
                        </>
                    }
                />
                <Route
                    path="/converter"
                    element={
                        <>
                            <NavigationHeader />
                            <ImageConverter />
                        </>
                    }
                />
            </Route>
        )
    );

    return (
        <div className="max-w-[1440px] mx-auto min-h-screen px-8 lg:px-12 ">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
