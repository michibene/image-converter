interface ButtonProps {
    type: string;
    icon?: JSX.Element;
    buttonText: string;
    isDisabled?: boolean;
    onClick: () => void;
}

function MainButton({ type, icon, buttonText, isDisabled, onClick }: ButtonProps) {
    let color: string = "bg-primaryColor";

    switch (type) {
        case "primary":
            break;
        case "success":
            color = "bg-successColor";
            break;
        default:
            color = "bg-primaryColor";
    }

    return (
        <button
            disabled={isDisabled}
            onClick={onClick}
            className={`py-3 px-12 inline-flex items-center gap-4 rounded-full text-white
                ${
                    isDisabled
                        ? "bg-fontLightestColor opacity-50"
                        : `${color} hover:bg-fontDarkestColor hover:drop-shadow-[6px_6px_18px_rgba(0,0,0,0.3)]`
                }`}
        >
            {icon && <span className="text-2xl">{icon}</span>}
            <p>{buttonText}</p>
        </button>
    );
}

export default MainButton;
