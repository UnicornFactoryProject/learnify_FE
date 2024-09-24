import React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";


const UploadProfileImage = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen font-montserrat">
            <div>Temp Image</div>
            <div className="text-primary-300 font-extralight text-center mb-6 px-2">
                <p>
                    Upload a profile picture to help connect with other students and tutors
                </p>
                <p>
                    No worries, you can always add it later.
                </p>
            </div>
            <Button buttonText="Next" className="px-32 md:px-60" />
            <Link to="/dashboard" className="border-2 border-secondary-100 py-2 px-32 md:px-60 text-primary-300 rounded-md mt-4">Skip</Link>
        </div>
    );
}


export default UploadProfileImage;