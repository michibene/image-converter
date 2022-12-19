interface SecondButtonProps {
    buttonText: string;
    onClick: () => void;
}

function SecondButton({ buttonText, onClick }: SecondButtonProps) {
    return (
        <button onClick={onClick} className="text-fontLightColor hover:text-primaryColor">
            {buttonText}
        </button>
    );
}

export default SecondButton;
