import React, { useEffect, useState } from 'react';
import OTPInput from 'react-otp-input';
import logo from '../../assets/logo.svg';
import fgtpassword from '../../assets/fgt-password3.svg'
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../../ui/Button';

export const OtpPage = () => {
  const [otp, setOtp] = useState('');
  const [seconds, setSeconds] = useState(180);
  const [status, setStatus] = useState('idle');
  const [otpError, setOtpError] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  };

  const handleSubmit = async => {
    if (!otp) {
      setOtpError('Please Enter OTP')
    }
    console.log('OTP Submitted Successfuly')
    navigate('/change-password')
  }

  return (
    <div className='flex mt-20'>
      <div className='w-[50%] px-20 flex flex-col gap-5'>
        <div className="flex items-center justify-center">
          <img src={logo} alt="" className="w-[150px] h-auto" />
        </div>
        <div>
          <h2 className='title-header'> PASSWORD RESET</h2>
          <p className='title-text text-xl'> We sent a code to <span className='text-secondary-100'>udyfinbarr@gmail.com</span></p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={() => <span>&nbsp;</span>}
            renderInput={(props, index) => (
              <input
                {...props}
                key={`otp-${index}`}
                className={`bg-primary-100 text-white font-semibold !w-1/2 md:!w-[40px] !h-[40px] rounded-[16px] 
                  ${props.value ? 'bg-blue-700' : 'bg-primary-100'} 
                  focus:border-black focus:bg-blue-700`}
              />
            )}
          />
          <p className='text-xl'>Code Expires in: <span className='secondary-text'>{formatTime(seconds)}s</span></p>
          <p className='text-xl'>Haven’t received the Email yet? <span className='secondary-text'>
            <button>Resend</button></span></p>
        </div>
        <div className='flex flex-col gap-7 w-full'>
          <Button
            isLoading={status === 'loading'}
            disabled={!otp || seconds === 0}
            buttonText='Continue'
            onClick={handleSubmit}
            className='w-full text-xl'
          />
          <Button 
            buttonText={'Back to Login'}
            className='!bg-white border border-secondary-100 !text-black w-full text-xl'
          />
        </div>
        
      </div>
      <div className='w-[50%] pr-20 mt-20'>
        <img src={fgtpassword} alt="OTP Avi" className='w-[808.37px] h-[482px]'/>
      </div>
      
    </div>
  )
};