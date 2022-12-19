import { useRef, useState } from "react";
import ImageConvertInputSection from "sections/ImageConvertInputSection";
import Modal from "modals/Modal";
import ImageConvertGrayscaleOutputSection from "sections/ImageConvertGrayscaleOutputSection";

function ImageConverter() {
    const [convertedImageUrl, setConvertedImageUrl] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [modalIsShown, setModalIsShown] = useState<boolean>(false);
    const downloadAnchorRef = useRef<HTMLAnchorElement>(null);
    const downloadInputNamerRef = useRef<HTMLInputElement>(null);

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
        <div className="fullscreen-without-header pt-10 pb-20 flex">
            <main
                className={`divider-section flex-1 p-8 md:py-14 md:px-20 flex flex-col md:flex-row gap-16 md:gap-20 rounded-2xl 
                            backdrop-filter backdrop-blur-sm bg-slate-100 bg-opacity-70 
                            ${
                                modalIsShown
                                    ? "drop-shadow-[0px_0px_150px_rgba(255,255,255,1)]"
                                    : "drop-shadow-[0px_0px_30px_rgba(0,0,0,0.1)]"
                            } `}
            >
                <ImageConvertInputSection
                    setConvertedImageUrl={setConvertedImageUrl}
                    setErrorMessage={setErrorMessage}
                />
                <ImageConvertGrayscaleOutputSection
                    convertedImageUrl={convertedImageUrl}
                    errorMessage={errorMessage}
                    setModalIsShown={setModalIsShown}
                    downloadAnchorRef={downloadAnchorRef}
                />

                <>
                    {modalIsShown && (
                        <Modal
                            setIsShown={setModalIsShown}
                            inputNameRef={downloadInputNamerRef}
                            handleMainButtonClick={handleFileDownload}
                        />
                    )}
                </>
            </main>
        </div>
    );
}

export default ImageConverter;
