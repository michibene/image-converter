import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import MainButton from "ui/buttons/MainButton";
import ImageManipulationCard from "ui/ImageManipulationCard";

function ImageConvertGrayscaleOutputSection() {
    const [isReadyToDownload, setIsReadyToDownload] = useState(false);

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
                />
            }
        >
            {isReadyToDownload ? (
                <p>IMAGE</p>
            ) : (
                <div className="text-fontLightColor flex flex-col items-center text-center">
                    <p>Your black and white image will be ready after successful conversion</p>
                </div>
            )}
        </ImageManipulationCard>
    );
}

export default ImageConvertGrayscaleOutputSection;
