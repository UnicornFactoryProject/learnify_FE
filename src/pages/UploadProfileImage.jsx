import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import genericAvatar from "../assets/illustrations/Generic avatar.png";
import cameraIcon from "../assets/illustrations/camera.png";

const UploadProfileImage = () => {
    const [image, setImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const fileInputRef = useRef(null);

    // Function to trigger the file input
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file)
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
        console.log(image);
        
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen font-montserrat w-full gap-4">
            <div className="md:w-1/2 flex justify-center items-center relative">
                {!previewUrl ?
                     <img src={genericAvatar} alt="default avavtar" className="w-[200px] md:w-[300px]"/> 
                     :
                     (
                        <img
                            src={previewUrl}
                            alt="Preview"
                            className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full object-cover opacity-80 border border-gray-300"
                        />
                    )
                }
                <img src={cameraIcon} alt="camera" className="absolute bottom-0 ml-32 md:ml-52 md:w-[80px] w-[50px] cursor-pointer" onClick={handleButtonClick}/>
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleChange}
                />
            </div>
            <div className="text-primary-300 font-extralight text-center mb-6 px-4">
                <p>
                    Upload a profile picture to help connect with other students and tutors
                </p>
                <p>
                    No worries, you can always add it later.
                </p>
            </div>
            <div className="w-full px-4 flex flex-col justify-center items-center">
                <Button buttonText="Next" className="w-full md:w-1/3" />
                <Link to="/dashboard" className="border-2 border-secondary-100 text-primary-300 rounded-md mt-4 md:w-1/3 w-full block text-center py-2">Skip</Link>
            </div>
        </div>
    );
}


export default UploadProfileImage;