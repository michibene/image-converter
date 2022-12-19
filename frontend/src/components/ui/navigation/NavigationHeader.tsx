import photoneoLogo from "assets/Photoneo_logo_horizontal_color.svg";
import { Link } from "react-router-dom";

function NavigationHeader() {
    return (
        <header>
            <Link to={"/"}>
                <img src={photoneoLogo} alt="Photoneo Logo" className="h-full py-8" />
            </Link>
        </header>
    );
}

export default NavigationHeader;
