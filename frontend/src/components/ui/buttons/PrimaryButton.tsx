interface ButtonProps {
    onClick: () => void;
    children: JSX.Element | JSX.Element[];
}

function PrimaryButton({ onClick, children }: ButtonProps) {
    return (
        <button className="py-4 px-14 rounded-full bg-primaryColor text-white" onClick={onClick}>
            <div className="inline-flex items-center gap-4">{children}</div>
        </button>
    );
}

export default PrimaryButton;
