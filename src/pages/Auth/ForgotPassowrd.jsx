import React from "react";
import pana from "../../assets/illustrations/pana.png"
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    return (
        <div className="flex md:justify-center items-center min-h-screen md:px-0 px-4 md:py-0 py-10">
            <div className="flex md:flex-row flex-col justify-around items-center w-screen">
                <div className="md:w-[40%]">
                    <div className="flex items-center justify-center mb-6">
                        <img src={logo} alt="" className="max-w-[130px] h-auto" />
                    </div>
                    <h2 className="title-header">Forgot Password?</h2>
                    <p className='title-text text-xl'>Don’t worry, we’ll send you reset instructions</p>
                    <form onSubmit="" className="mt-5 mb-5">
                        <Input label="Email" type="Email" value="" placeholder="Enter email address" className="w-full"/>
                        <Button buttonText="Reset Password" className="w-full mt-5"/>
                    </form>
                    <Link to="/" className="block border-2 border-secondary-100 text-primary-300 rounded-md mb-10 p-2 text-center">Back to Login</Link>

                </div>
                <div>
                    <img src={pana} alt="forgot password" srcset="" />
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;