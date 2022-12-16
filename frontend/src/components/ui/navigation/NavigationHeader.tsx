import photoneoLogo from "assets/Photoneo_logo_horizontal_color.svg";

function NavigationHeader() {
    return (
        <header>
            <img src={photoneoLogo} alt="Photoneo Logo" className="h-full" />
        </header>
    );
}

export default NavigationHeader;
