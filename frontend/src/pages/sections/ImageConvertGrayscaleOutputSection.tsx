import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainButton from "buttons/MainButton";
import Modal from "modals/Modal";
import { useEffect, useRef, useState } from "react";
import ImageManipulationCard from "ui/ImageManipulationCard";

interface ImageConvertGrayscaleOutputSectionProps {
    convertedImageUrl: string;
    errorMessage: string;
}

function ImageConvertGrayscaleOutputSection({
    convertedImageUrl,
    errorMessage,
}: ImageConvertGrayscaleOutputSectionProps) {
    const [isReadyToDownload, setIsReadyToDownload] = useState<boolean>(false);
    const [modalIsShown, setModalIsShown] = useState<boolean>(false);
    const downloadAnchorRef = useRef<HTMLAnchorElement>(null);
    const downloadInputNamerRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (convertedImageUrl !== "") {
            setIsReadyToDownload(true);
        }
    }, [convertedImageUrl]);

    function handleFileDownload() {
        if (!downloadAnchorRef.current || !downloadInputNamerRef.current) {
            console.error("Cannot download converted image. Missing download tag (<a>) or image name.");
            return;
        }
        // Set name for downloaded image
        downloadAnchorRef.current.download = downloadInputNamerRef.current.value;
        downloadAnchorRef.current.click();

        setModalIsShown(false);
    }

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
                        <p className="text-fontLightColor">
                            Your black and white image will be ready after successful conversion
                        </p>
                    )}
                </div>
            )}

            <>
                {modalIsShown && (
                    <Modal
                        setIsShown={setModalIsShown}
                        inputNameRef={downloadInputNamerRef}
                        handleMainButtonClick={handleFileDownload}
                    />
                )}
            </>
        </ImageManipulationCard>
    );
}

export default ImageConvertGrayscaleOutputSection;
