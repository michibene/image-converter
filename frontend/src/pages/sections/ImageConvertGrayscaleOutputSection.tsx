import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainButton from "buttons/MainButton";
import { Dispatch, RefObject, useEffect, useRef, useState } from "react";
import ImageManipulationCard from "ui/ImageManipulationCard";

interface ImageConvertGrayscaleOutputSectionProps {
    convertedImageUrl: string;
    errorMessage: string;
    setModalIsShown: Dispatch<React.SetStateAction<boolean>>;
    downloadAnchorRef: RefObject<HTMLAnchorElement>;
}

function ImageConvertGrayscaleOutputSection({
    convertedImageUrl,
    errorMessage,
    setModalIsShown,
    downloadAnchorRef,
}: ImageConvertGrayscaleOutputSectionProps) {
    const [isReadyToDownload, setIsReadyToDownload] = useState<boolean>(false);

    useEffect(() => {
        if (convertedImageUrl !== "") {
            setIsReadyToDownload(true);
        }
    }, [convertedImageUrl]);

    return (
        <ImageManipulationCard
            title="Grayscaled Image"
            isImageLoaded={isReadyToDownload}
            actionButton={
                <MainButton
                    type="success"
                    icon={<FontAwesomeIcon icon={faDownload} />}
                    buttonText="Download Image"
                    isDisabled={!isReadyToDownload}
                    onClick={() => setModalIsShown(true)}
                />
            }
        >
            {isReadyToDownload ? (
                <>
                    <img src={convertedImageUrl} alt="Image after conversion" />
                    <a href={convertedImageUrl} className="hidden" ref={downloadAnchorRef} />
                </>
            ) : (
                <div className="flex flex-col items-center text-center">
                    {errorMessage ? (
                        <p className="text-rose-600 font-medium">{errorMessage}</p>
                    ) : (
                        <p>Your black and white image will be ready after successful conversion</p>
                    )}
                </div>
            )}
        </ImageManipulationCard>
    );
}

export default ImageConvertGrayscaleOutputSection;
