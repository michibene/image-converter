import beforeAndAfterImage from "assets/before-after-comparision.png";
import MainLink from "ui/buttons/MainLink";

function LandingPage() {
    return (
        <main className="fullscreen-without-header flex flex-col md:flex-row items-stretch gap-4 md:gap-8">
            <section className="w-full md:w-[50%] md:pt-6 md:pb-12 flex flex-col justify-evenly md:pr-12">
                <h1 className="text-[3.75rem] xl:text-[4.5rem] font-bold leading-[1.2]">
                    Convert a <span className="text-primaryColor">color</span> image to
                    <span className="text-fontLightColor"> grayscale</span> online
                </h1>

                <p className="text-lg leading-[1.8] pt-12 md:pt-4 pb-16 md:pb-4">
                    Make grayscale (desaturated) images using this free grayscale converter. Upload your image and after
                    successful conversion you can download it to your computer for free.
                </p>

                <div className="self-center md:self-start mb-12 md:mb-4">
                    <MainLink
                        linkToPath="/converter"
                        buttonText={
                            <>
                                Upload image
                                <span className="pl-5 fill-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16">
                                        <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg>
                                </span>
                            </>
                        }
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
