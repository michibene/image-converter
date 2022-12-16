interface ButtonProps {
    onClick: () => void;
    icon: JSX.Element;
    buttonText: string;
}

function PrimaryButton({ onClick, icon, buttonText }: ButtonProps) {
    return (
        <button className="py-4 px-14 rounded-full bg-primaryColor text-white" onClick={onClick}>
            <div className="inline-flex items-center gap-4">
                <span className="text-2xl">{icon}</span>
                <p>{buttonText}</p>
            </div>
        </button>
    );
}

export default PrimaryButton;
