interface ButtonProps {
    type: string;
    icon?: JSX.Element;
    buttonText: string;
}

function MainButton({ type, icon, buttonText }: ButtonProps) {
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
            className={`py-3 px-12 inline-flex items-center gap-4 rounded-full ${color} text-white
                     hover:bg-fontDarkestColor hover:drop-shadow-[6px_6px_18px_rgba(0,0,0,0.3)]`}
        >
            {icon && <span className="text-2xl">{icon}</span>}
            <p>{buttonText}</p>
        </button>
    );
}

export default MainButton;
