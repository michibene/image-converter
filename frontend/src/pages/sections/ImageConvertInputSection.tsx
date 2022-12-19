import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fileUploadOutlineIcon from "assets/file-arrow-up-regular.svg";
import axios from "axios";
import { Dispatch, useRef, useState } from "react";
import MainButton from "ui/buttons/MainButton";
import SecondButton from "ui/buttons/SecondButton";
import ImageManipulationCard from "ui/ImageManipulationCard";

interface ImageConvertInputSectionProps {
    setConvertedImageUrl: Dispatch<React.SetStateAction<string>>;
}

function ImageConvertInputSection({ setConvertedImageUrl }: ImageConvertInputSectionProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewImageUrl, setPreviewImageUrl] = useState<string>("");
    const [isReadyToUpload, setIsReadyToUpload] = useState(false);

    function handleSelectedFile(event: React.ChangeEvent<HTMLInputElement>) {
        // Check for null first (later I will implement proper error message showing to user)
        if (!event.target.files || event.target.files.length === 0) {
            console.error("File was not selected!");
            return;
        }
        if (event.target.files.length > 1) {
            alert("Please select only 1 file to convert.");
            return;
        }
        // Validation for correct file type is already in input field

        setSelectedFile(event.target.files[0]);
        setPreviewImageUrl(URL.createObjectURL(event.target.files[0]));
        setIsReadyToUpload(true);
    }

    // To create custom button for choosing file (and hide the default input file element)
    function handleBrowseButtonClick() {
        inputRef.current?.click();
    }

    function handleFileUpload() {
        const formData = new FormData();
        if (!selectedFile) {
            console.error("No file selected for uploading.");
            return;
        }
        formData.append("imageToConvert", selectedFile, selectedFile.name);

        axios
            .post("http://localhost:3000/api/convert/grayscale", formData, { responseType: "blob" })
            .then((res) => {
                setConvertedImageUrl(URL.createObjectURL(res.data));
            })
            .catch((err) => {
                console.error(err);
            });
    }

    return (
        <ImageManipulationCard
            title="Input Image"
            classNameProps="section--start"
            isImageLoaded={isReadyToUpload}
            actionButton={
                <MainButton
                    type="primary"
                    icon={<FontAwesomeIcon icon={faFileArrowUp} />}
                    buttonText="Convert Image"
                    isDisabled={!isReadyToUpload}
                    onClick={handleFileUpload}
                />
            }
            secondButton={<SecondButton buttonText="Load different image" onClick={handleBrowseButtonClick} />}
        >
            {selectedFile ? (
                <>
                    <img src={previewImageUrl} alt="Selected image file ready for conversion" />
                </>
            ) : (
                <>
                    <div className="text-fontLightColor flex flex-col items-center text-center">
                        <img src={fileUploadOutlineIcon} alt="File upload icon" className="pb-3" />
                        <p>Select an Image file to upload</p>
                        <p>in JPEG, PNG, BMP or TIFF format</p>
                    </div>

                    <button
                        onClick={handleBrowseButtonClick}
                        className="text-primaryColor hover:text-fontDarkestColor font-bold md:text-lg"
                    >
                        Browse files
                    </button>
                </>
            )}
            <input
                ref={inputRef}
                type="file"
                onChange={handleSelectedFile}
                className="hidden"
                accept=".jpg, .jpeg, .png, .bmp, .tiff"
            />
        </ImageManipulationCard>
    );
}

export default ImageConvertInputSection;
