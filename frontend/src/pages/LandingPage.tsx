import beforeAndAfterImage from "assets/before-after-comparision.png";
import PrimaryButton from "buttons/PrimaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";

function LandingPage() {
    function handleClick() {
        console.log("clicking");
    }

    return (
        <main className="fullscreen-without-header flex items-stretch gap-8">
            <section className="w-[50%] flex flex-col justify-evenly pr-12">
                <h1 className="text-7xl font-extrabold leading-tight">
                    Convert a <span className="text-primaryColor">color</span> image to
                    <span className="text-fontLightColor"> grayscale</span> online
                </h1>

                <p className="leading-[1.8]">
                    Make grayscale (desaturated) images using this free grayscale converter. Upload your image and after
                    successful conversion you can download it to your computer for free.
                </p>

                <div>
                    <PrimaryButton
                        onClick={handleClick}
                        icon={<FontAwesomeIcon icon={faFileArrowUp} />}
                        buttonText="Upload Image"
                    />
                </div>
            </section>

            <section className="w-[50%] flex items-center">
                <img src={beforeAndAfterImage} alt="Before and after comparison" />
            </section>
        </main>
    );
}

export default LandingPage;
