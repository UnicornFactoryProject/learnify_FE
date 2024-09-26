import React, { useState } from "react";
import { Formik } from "formik";
import logo from '../../assets/logo.svg';
import signup from '../../assets/signup-image.svg';
import Input from "../../ui/Input"; 
import { SignupSchema } from '../../validations/Schemas'; 
import Button from "../../ui/Button";

const Register = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [passwordHidden, setPasswordHidden] = useState(true);

  const togglePasswordHidden = () => {
    setPasswordHidden(!passwordHidden);
  };

  const submit = async (values, { setSubmitting }) => {
    setIsPending(true);
    setErrorMessage(''); 
    setSuccessMessage(''); 
    try {
      await SignupSchema.validate(values, { abortEarly: false });

      // Simulate an API call
      console.log('Submission successful:', values);
      setSuccessMessage('Signup successful!');
    } catch (error) {
      if (error.name === 'ValidationError') {
        const errorMessages = error.errors.join("\n"); 
        setErrorMessage(errorMessages);
      } else {
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
    } finally {
      setSubmitting(false);
      setIsPending(false);
    }
  };

  return (
    <div className='flex flex-col lg:flex-row mt-10'>
      <div className='hidden lg:block w-[50%] pl-20 mt-20'>
        <img src={signup} alt="Signup Illustration" className='w-[808.37px] h-[482px]' />
      </div>
      
      <div className='lg:w-[50%] px-5 lg:px-20 flex flex-col gap-2'>
        <div className="flex justify-center">
          <img src={logo} alt="Logo" className="w-[78px] h-auto" />
        </div>
        
        <div className="mt-5 text-center lg:text-left">
          <h2 className='title-header !text-[28px] leading-tight'>
            Join our Large Community of <span className="text-secondary-100">Learners</span> and <span className="text-secondary-100">Tutors</span>
          </h2>
          <p className='title-text text-xl'>Enter your details here to create an account</p>
        </div>

        {successMessage && <div className="text-green-500 bg-green-100 p-2 rounded">{successMessage}</div>}
        {errorMessage && <div className="text-red-500 bg-red-100 p-2 rounded">{errorMessage}</div>}

        <Formik
          initialValues={{ email: '', fullName: '', password: '', role: '' }}
          validationSchema={SignupSchema}
          onSubmit={submit}
        >
          {({ values, handleChange, handleBlur, handleSubmit, touched, errors }) => (
            <form onSubmit={handleSubmit} className="grid gap-3">
              <label htmlFor="role" className="w-fit">Choose Role</label>
              <select 
                name="role"
                id="role" 
                value={values.role}
                className="px-3 py-[12px] h-[48px] rounded-[8px] shadow-sm border focus:outline-none focus:ring-[#181818] focus:border-[#181818] w-fit"
                onChange={handleChange}
              >
                <option value="">Select an option</option>
                <option value="fastTrack">Student</option>
                <option value="normal">Tutor</option>
              </select>

              <div>
                <Input
                  type="email"
                  name="email"
                  label="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className='w-full !py-1 !h-[34px]'
                  error={touched.email && errors.email}
                />
              </div>

              <div>
                <Input
                  type="text"
                  name="fullName"
                  label="Full Name"
                  value={values.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className='w-full !py-1 !h-[34px]'
                  error={touched.fullName && errors.fullName}
                />
              </div>

              <div className="relative">
                <Input
                  type={passwordHidden ? "password" : "text"}
                  name="password"
                  label="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className='w-full !py-1 !h-[34px]'
                  error={touched.password && errors.password}
                />
                {/* <button type="button" onClick={togglePasswordHidden} className="absolute right-2 top-2">
                  {passwordHidden ? 'Show' : 'Hide'}
                </button> */}
              </div>
              <p className="">Password contains an Uppercase and a digit</p>

              <p className="text-center mt-5">Already have an account? <span className="text-secondary-100">Sign in</span></p>

              <Button 
                type="submit" 
                disabled={isPending} 
                buttonText={'Sign Up'}
                className={'w-full mt-5'}
              />

              <Button 
                buttonText={'Continue with Google '}
                className='!bg-white mt-5 border border-secondary-100 !text-black w-full text-xl'
              />
            </form>
          )}
        </Formik>
      </div>
    </div>    
  );
};

export default Register;
