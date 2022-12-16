interface ButtonProps {
    onClick: () => void;
    icon: JSX.Element;
    buttonText: string;
}

function PrimaryButton({ onClick, icon, buttonText }: ButtonProps) {
    return (
        <button
            className="py-3 px-12 rounded-full bg-primaryColor text-white
                            hover:bg-fontDarkestColor hover:drop-shadow-[6px_6px_18px_rgba(0,0,0,0.4)]"
            onClick={onClick}
        >
            <div className="inline-flex items-center gap-4">
                <span className="text-2xl">{icon}</span>
                <p>{buttonText}</p>
            </div>
        </button>
    );
}

export default PrimaryButton;
