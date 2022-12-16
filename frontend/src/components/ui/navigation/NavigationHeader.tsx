import photoneoLogo from "assets/Photoneo_logo_horizontal_color.svg";

function NavigationHeader() {
    return (
        <header>
            <img src={photoneoLogo} alt="Photoneo Logo" className="h-full py-8" />
        </header>
    );
}

export default NavigationHeader;
