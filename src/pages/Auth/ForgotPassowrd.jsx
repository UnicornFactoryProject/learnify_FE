import React from "react";
import pana from "../../assets/illustrations/pana.png"
import Input from "../../ui/Input";
import Button from "../../ui/Button";

const ForgotPassword = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex md:flex-row justify-between items-center">
                <div className="">
                    <div>Logo</div>
                    <h2>Forgot Password</h2>
                    <p>Don’t worry, we’ll send you reset instructions</p>
                    <form onSubmit="">
                        <Input label="Email" type="Email" value=""/>
                        <Button buttonText="Submit" />
                    </form>
                </div>
                <div>
                    <img src={pana} alt="forgot password" srcset="" />
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;