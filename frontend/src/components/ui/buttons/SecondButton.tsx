interface SecondButtonProps {
    buttonText: string;
    onClick: () => void;
}

function SecondButton({ buttonText, onClick }: SecondButtonProps) {
    return (
        <button
            onClick={onClick}
            className="py-4 px-8 inline-flex items-center rounded-full border-[1.5px] font-semibold
            hover:text-fontDarkestColor text-primaryColor hover:border-fontLightestColor border-primaryColor border-opacity-50"
        >
            {buttonText}
        </button>
    );
}

export default SecondButton;
