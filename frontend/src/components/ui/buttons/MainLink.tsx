import { Link } from "react-router-dom";

interface ButtonProps {
    linkToPath: string;
    icon?: JSX.Element;
    buttonText: string;
}

function MainLink({ linkToPath, icon, buttonText }: ButtonProps) {
    return (
        <Link
            to={linkToPath}
            className="py-3 px-12 inline-flex items-center gap-4 rounded-full bg-primaryColor text-white
                     hover:bg-fontDarkestColor hover:drop-shadow-[6px_6px_18px_rgba(0,0,0,0.4)]"
        >
            {icon && <span className="text-2xl">{icon}</span>}
            <p>{buttonText}</p>
        </Link>
    );
}

export default MainLink;
