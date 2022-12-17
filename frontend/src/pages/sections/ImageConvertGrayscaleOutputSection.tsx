import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import MainButton from "ui/buttons/MainButton";
import ImageManipulationCard from "ui/ImageManipulationCard";

function ImageConvertGrayscaleOutputSection() {
    const [isClickable, setIsClickable] = useState(false);

    return (
        <ImageManipulationCard
            title="GrayScaled Image"
            actionButton={
                <MainButton
                    type="success"
                    icon={<FontAwesomeIcon icon={faDownload} />}
                    buttonText="Download Image"
                />
            }
        ></ImageManipulationCard>
    );
}

export default ImageConvertGrayscaleOutputSection;
