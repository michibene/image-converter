import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fileUploadOutlineIcon from "assets/file-arrow-up-regular.svg";
import PrimaryButton from "buttons/PrimaryButton";

function ImageConverter() {
    return (
        <div className="fullscreen-without-header py-12 flex ">
            <main className="flex-1 p-8 md:p-14 flex rounded-3xl bg-white drop-shadow-[0px_0px_30px_rgba(0,0,0,0.15)] ">
                <section className="flex-1">
                    <h2 className="font-bold uppercase text-xl pb-6 md:pb-10">Input image</h2>

                    <div className="h-[70%] px-4 dashed-border flex flex-col justify-center gap-6">
                        <div className="text-fontLightColor flex flex-col items-center text-center">
                            <img src={fileUploadOutlineIcon} alt="File upload icon" className="pb-3" />
                            <p className="font-bold">Select an Image file to upload</p>
                            <p>in JPEG, PNG, BMP or TIFF format</p>
                        </div>

                        <button className="text-primaryColor font-bold md:text-lg">Browse files</button>
                    </div>

                    <div className="pt-6 md:pt-10">
                        <PrimaryButton icon={<FontAwesomeIcon icon={faFileArrowUp} />} buttonText="Upload Image" />
                    </div>
                </section>
            </main>
        </div>
    );
}

export default ImageConverter;
