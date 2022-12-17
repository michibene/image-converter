import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fileUploadOutlineIcon from "assets/file-arrow-up-regular.svg";
import PrimaryButton from "buttons/PrimaryButton";
import { useRef, useState } from "react";
import ImageManipulationCard from "ui/ImageManipulationCard";

function ImageConvertInputSection() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [selectedFileUrl, setSelectedFileUrl] = useState<string>("");

    const handleSelectedFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Check for null first (later I will implement proper error message showing to user)
        if (!event.target.files || event.target.files.length === 0) {
            console.error("File was not selected!");
            return;
        }
        if (event.target.files.length > 1) {
            alert("Please select only 1 file to convert");
            return;
        }
        setSelectedFile(event.target.files[0]);
        setSelectedFileUrl(URL.createObjectURL(event.target.files[0]));
        console.log(event.target.files[0]);
    };

    // To create custom button for choosing file (and hide the default input file element)
    const handleBrowseButtonClick = () => {
        inputRef.current?.click();
    };

    return (
        <ImageManipulationCard
            title="Input Image"
            classNameProps="section--start"
            actionButton={<PrimaryButton icon={<FontAwesomeIcon icon={faFileArrowUp} />} buttonText="Convert Image" />}
        >
            {selectedFile ? (
                <img src={selectedFileUrl} alt="Selected file for conversion" />
            ) : (
                <>
                    <div className="text-fontLightColor flex flex-col items-center text-center">
                        <img src={fileUploadOutlineIcon} alt="File upload icon" className="pb-3" />
                        <p className="font-bold">Select an Image file to upload</p>
                        <p>in JPEG, PNG, BMP or TIFF format</p>
                    </div>

                    <input
                        ref={inputRef}
                        type="file"
                        name="colorImage"
                        id="colorImage"
                        onChange={handleSelectedFile}
                        className="hidden"
                    />
                    <button onClick={handleBrowseButtonClick} className="text-primaryColor font-bold md:text-lg">
                        Browse files
                    </button>
                </>
            )}
        </ImageManipulationCard>
    );
}

export default ImageConvertInputSection;
