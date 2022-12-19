import { Dispatch, LegacyRef } from "react";
import MainButton from "buttons/MainButton";
import SecondButton from "buttons/SecondButton";

interface ModalProps {
    setIsShown: Dispatch<React.SetStateAction<boolean>>;
    inputNameRef: LegacyRef<HTMLInputElement>;
    handleMainButtonClick: () => void;
}

function Modal({ setIsShown, inputNameRef, handleMainButtonClick }: ModalProps) {
    return (
        <>
            <div className="flex justify-center items-center overflow-hidden fixed inset-0 z-50">
                <span
                    className="fixed inset-0 w-full h-full bg-[#4e5862] bg-opacity-80 backdrop-filter backdrop-blur-md rounded-2xl"
                    onClick={() => setIsShown(false)}
                />

                <div className="flex items-center p-8">
                    <div className="relative w-full max-w-lg mx-auto bg-white rounded-xl shadow-lg">
                        <div className="py-6 px-8 text-center bg-[#EDE8EA] rounded-t-xl">
                            <h4 className="pt-2 text-2xl font-bold text-center">Save image</h4>
                            <p className="my-4 text-[0.9rem] leading-relaxed text-gray-500">
                                Before saving the converted image, enter a file name (without the file extension - it
                                will be the same as the original)
                            </p>
                        </div>

                        <div className="pt-8 pb-6 px-8 text-[0.9rem]">
                            <label htmlFor="fName" className="mb-2 block font-semibold">
                                File Name
                            </label>
                            <input
                                ref={inputNameRef}
                                type="text"
                                name="imageNameToSave"
                                placeholder="Enter file name"
                                className="w-full rounded-lg border border-fontLightestColor py-3 px-6 text-[#6B7280] focus:text-fontDarkestColor outline-none focus:border-primaryColor hover:shadow-[3px_3px_10px_rgba(107,114,128,0.15)]"
                            />
                        </div>

                        <div className="pb-6 px-8 mt-3 flex flex-col md:flex-row gap-4 md:gap-2 justify-around items-center ">
                            <MainButton type="success" buttonText="Download" onClick={handleMainButtonClick} />
                            <SecondButton buttonText="Cancel" onClick={() => setIsShown(false)} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;
