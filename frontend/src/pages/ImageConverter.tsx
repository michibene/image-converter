import ImageConvertInputSection from "sections/ImageConvertInputSection";
import ImageConvertGrayscaleOutputSection from "./sections/ImageConvertGrayscaleOutputSection";

function ImageConverter() {
    return (
        <div className="fullscreen-without-header py-12 flex">
            <main className="divider-section flex-1 p-8 md:py-14 md:px-20 flex flex-col md:flex-row gap-16 md:gap-20 rounded-3xl bg-white drop-shadow-[0px_0px_30px_rgba(0,0,0,0.15)] ">
                <ImageConvertInputSection />
                <ImageConvertGrayscaleOutputSection />
            </main>
        </div>
    );
}

export default ImageConverter;
