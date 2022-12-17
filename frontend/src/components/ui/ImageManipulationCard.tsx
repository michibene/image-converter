interface ImageManipulationCardProps {
    title: string;
    classNameProps?: string;
    children?: JSX.Element | JSX.Element[];
    actionButton: JSX.Element;
}

function ImageManipulationCard({ title, classNameProps, children, actionButton }: ImageManipulationCardProps) {
    return (
        <section className={`${classNameProps} flex-1 flex flex-col justify-between`}>
            <h2 className="font-bold uppercase text-xl pb-6 md:pb-8">{title}</h2>

            <div className="h-[70%] px-4 py-16 dashed-border flex flex-col justify-center gap-6">{children}</div>

            <div className="self-center md:self-start pt-6 md:pt-10">{actionButton}</div>
        </section>
    );
}

export default ImageManipulationCard;
