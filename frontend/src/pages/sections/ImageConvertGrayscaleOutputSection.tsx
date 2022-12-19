import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import MainButton from "buttons/MainButton";
import ImageManipulationCard from "ui/ImageManipulationCard";
import Modal from "modals/Modal";

interface ImageConvertGrayscaleOutputSectionProps {
    convertedImageUrl: string;
}

function ImageConvertGrayscaleOutputSection({ convertedImageUrl }: ImageConvertGrayscaleOutputSectionProps) {
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
                <div className="text-fontLightColor flex flex-col items-center text-center">
                    <p>Your black and white image will be ready after successful conversion</p>
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
