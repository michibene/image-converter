interface ImageManipulationCardProps {
    title: string;
    classNameProps?: string;
    actionButton: JSX.Element;
    secondButton?: JSX.Element;
    isImageLoaded: boolean;
    children?: JSX.Element | JSX.Element[];
}

function ImageManipulationCard({
    title,
    classNameProps,
    actionButton,
    secondButton,
    isImageLoaded,
    children,
}: ImageManipulationCardProps) {
    return (
        <section className={`${classNameProps} flex-1 flex flex-col justify-between`}>
            <h2 className="font-bold text-xl pb-8 md:pb-8">{title}</h2>

            <div className="h-[70%] px-4 md:px-10 py-16 dashed-border flex flex-col justify-center gap-6 
                        text-fontDarkestColor bg-slate-400 bg-opacity-20 bg-clip-padding backdrop-filter backdrop-blur-sm">
                {children}
            </div>

            {secondButton ? (
                <div className="pt-10 flex flex-col md:flex-row gap-6 justify-between">
                    {actionButton}
                    {isImageLoaded && secondButton}
                </div>
            ) : (
                <div className="self-center md:self-start pt-10">{actionButton}</div>
            )}
        </section>
    );
}

export default ImageManipulationCard;
