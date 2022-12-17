import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import MainButton from "ui/buttons/MainButton";
import ImageManipulationCard from "ui/ImageManipulationCard";

function ImageConvertGrayscaleOutputSection() {
    const [isReadyToDownload, setIsReadyToDownload] = useState(true);

    return (
        <ImageManipulationCard
            title="GrayScaled Image"
            actionButton={
                <MainButton
                    type="success"
                    icon={<FontAwesomeIcon icon={faDownload} />}
                    buttonText="Download Image"
                    isDisabled={isReadyToDownload}
                />
            }
        ></ImageManipulationCard>
    );
}

export default ImageConvertGrayscaleOutputSection;
