interface ButtonProps {
    icon?: JSX.Element;
    buttonText: string;
}

function PrimaryButton({ icon, buttonText }: ButtonProps) {
    return (
        <button
            className="py-3 px-12 inline-flex items-center gap-4 rounded-full bg-primaryColor text-white
                     hover:bg-fontDarkestColor hover:drop-shadow-[6px_6px_18px_rgba(0,0,0,0.4)]"
        >
            {icon && <span className="text-2xl">{icon}</span>}
            <p>{buttonText}</p>
        </button>
    );
}

export default PrimaryButton;
