import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import beforeAndAfterImage from "assets/before-after-comparision.png";
import PrimaryButton from "buttons/PrimaryButton";

function LandingPage() {
    function handleClick() {
        console.log("clicking");
    }

    return (
        <main className="fullscreen-without-header flex flex-col md:flex-row items-stretch gap-4 md:gap-8">
            <section className="w-full md:w-[50%] md:py-12 flex flex-col justify-evenly md:pr-12">
                <h1 className="text-[3.75rem] xl:text-[4.5rem] font-extrabold leading-[1.2]">
                    Convert a <span className="text-primaryColor">color</span> image to
                    <span className="text-fontLightColor"> grayscale</span> online
                </h1>

                <p className="text-lg leading-[1.8] pt-12 md:pt-4 pb-16 md:pb-8">
                    Make grayscale (desaturated) images using this free grayscale converter. Upload your image and after
                    successful conversion you can download it to your computer for free.
                </p>

                <div className="self-center md:self-start mb-12 md:mb-4">
                    <PrimaryButton
                        onClick={handleClick}
                        icon={<FontAwesomeIcon icon={faFileArrowUp} />}
                        buttonText="Upload Image"
                    />
                </div>
            </section>

            <section className="w-full md:w-[50%] py-8 flex items-center order-first md:order-last">
                <img src={beforeAndAfterImage} alt="Before and after comparison" />
            </section>
        </main>
    );
}

export default LandingPage;
