import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import fgtpassword from '../../assets/fgt-password3.svg';
import Button from '../../ui/Button';
import Input from '../../ui/Input';

export const ChangePassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle')

  const handleSubmit = async () => { 
    console.log(password);
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      // Handle password submission logic
      console.log('Password updated successfully');
    }
  };

  return (
    <div className='flex mt-10'>
      <div className='w-[50%] pl-20 mt-20'>
        <img src={fgtpassword} alt="OTP Avi" className='w-[808.37px] h-[482px]' />
      </div>
      <div className='w-[50%] px-20 flex flex-col gap-5'>
        <div className="flex items-center justify-center">
          <img src={logo} alt="" className="w-[150px] h-auto" />
        </div>
        <div>
          <h2 className='title-header'>Set new password</h2>
          <p className='title-text text-xl'>Must be 8 letters</p>
        </div>
        <div className='flex flex-col gap-3'>
            <Input
                type="password"
                label='Password'
                value={password}
                errorText={error}
                className='w-full'
                onChange={(e) => setPassword(e.target.value)}
            />
            <Input
                type="password"
                label='Confirm Password'
                value={confirmPassword}
                errorText={error}
                className='w-full'
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {error && <span className="text-red-500">{error}</span>}
        </div>
        <div className='flex flex-col mt-2 gap-5'>
            <Button 
                onClick={handleSubmit} 
                className=' w-full text-xl' 
                buttonText={'Reset Password'}
            />
            <Button 
                buttonText={'Back to Login'}
                className='!bg-white border border-secondary-100 !text-black w-full text-xl'
            />
        </div>
       
      </div>
    </div>
  );
};
