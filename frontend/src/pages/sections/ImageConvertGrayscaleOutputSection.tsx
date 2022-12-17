import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PrimaryButton from "buttons/PrimaryButton";
import ImageManipulationCard from "ui/ImageManipulationCard";

function ImageConvertGrayscaleOutputSection() {
    return (
        <ImageManipulationCard
            title="GrayScaled Image"
            actionButton={<PrimaryButton icon={<FontAwesomeIcon icon={faFileArrowUp} />} buttonText="Convert Image" />}
        ></ImageManipulationCard>
    );
}

export default ImageConvertGrayscaleOutputSection;
