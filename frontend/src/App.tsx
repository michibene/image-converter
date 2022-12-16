import NavigationHeader from "navigation/NavigationHeader";
import LandingPage from "pages/LandingPage";

function App() {
    return (
        <div className="max-w-7xl mx-auto min-h-screen px-8 lg:px-12 ">
            <NavigationHeader />
            <LandingPage />
        </div>
    );
}

export default App;
