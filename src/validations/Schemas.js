import * as Yup from 'yup';

// Yup schema for signup
export const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Full name must be at least 2 characters long')
    .max(100, 'Full name must be at most 100 characters long')
    .matches(/^[a-zA-Z\s'-]*$/, "Full name can only contain letters, spaces, hyphens, and apostrophes.")
    .required('Full name is required'),

  email: Yup.string()
    .email('Enter a valid email address')
    .required('Email is required'),

  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number'),
});

// Yup schema for login
export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email or Username is required'),
  password: Yup.string().required('Password is required'),
});

// Yup schema for Two factor authentication
export const TwoFactorAuthenticationSchema = Yup.object().shape({
  code: Yup.string()
    .length(6, 'Must be 6 characters long')
    .required('Code is required'),
});

// Yup schema for Email Code verification
export const CodeVerificationSchema = Yup.object().shape({
  code: Yup.string()
    .length(6, 'Must be 6 characters long')
    .required('Code is required'),
});

// Yup schema for Forgot Password
export const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email address')
    .required('Email is required'),
});

// Yup schema for Reset Password with Code
export const ResetPasswordWithCodeSchema = Yup.object().shape({
  code: Yup.string()
    .required('Reset code required')
    .length(6, 'Reset code must be 6 characters long'),
  newPassword: Yup.string()
    .required('New password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number'),
  confirmPassword: Yup.string()
    .required('Please confirm your password')
    .oneOf([Yup.ref('newPassword')], 'Confirm password and new password must match')
});

// Yup schema for Reset Password without Code
export const ResetPasswordWithoutCodeSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required('New password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number'),
  confirmPassword: Yup.string()
    .required('Please confirm your password')
    .oneOf([Yup.ref('newPassword')], 'Confirm password and new password must match')
});

// Yup schema for editing personal information
export const EditPersonalInfoSchema = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .min(2, "First name must be at least 2 characters long.")
    .max(50, "First name must be at most 50 characters long.")
    .matches(/^[a-zA-Z\s'-]*$/, "First name can only contain letters, spaces, hyphens, and apostrophes.")
    .nullable(),
  
  middleName: Yup.string()
    .trim()
    .max(50, "Middle name must be at most 50 characters long.")
    .matches(/^[a-zA-Z\s'-]*$/, "Middle name can only contain letters, spaces, hyphens, and apostrophes.")
    .nullable(),
  
  lastName: Yup.string()
    .trim()
    .min(2, "Last name must be at least 2 characters long.")
    .max(50, "Last name must be at most 50 characters long.")
    .matches(/^[a-zA-Z\s'-]*$/, "Last name can only contain letters, spaces, hyphens, and apostrophes.")
    .nullable(),
  
  dateOfBirth: Yup.date()
    .max(new Date(), "Date of birth cannot be in the future.")
    .nullable(),
  
  age: Yup.number()
    .min(1, "Age must be at least 1 year.")
    .max(150, "Age must be at most 150 years.")
    .nullable(),
  
  address: Yup.string()
    .trim()
    .min(5, "Address must be at least 5 characters long.")
    .max(100, "Address must be at most 100 characters long.")
    .nullable(),
  
  phoneNumber: Yup.string()
    .trim()
    .matches(/^\+?[0-9\s-]{10,20}$/, "Phone number can contain digits, spaces, hyphens, and an optional leading +, and must be between 10 and 20 characters long.")
    .nullable(),
  
  profileImage: Yup.mixed()
    .test(
      "is-valid-image",
      "Profile image must be a valid file or a URL.",
      function (value) {
        if (!value) return true; // It's nullable, so allow empty values
        if (typeof value === "string") {
          return Yup.string()
            .url("Profile image must be a valid URL.")
            .isValidSync(value);
        }
        return value instanceof File; // Ensure the value is a File object if it's not a string
      }
    )
    .nullable(),
});

// Yup schema for Reset Password
export const ResetPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  code: Yup.string()
    .required('Reset code required')
    .length(6, 'Reset code must be 6 characters long'),
  newPassword: Yup.string()
    .required('New password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number'),
  confirmPassword: Yup.string()
    .required('Please confirm your password')
    .oneOf([Yup.ref('newPassword')], 'Confirm password and new password must match')
});

// Yup schema for Change Password
export const ChangePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .required('Old password is required.'),
  
  newPassword: Yup.string()
    .required('New password is required.')
    .min(8, 'Password must be at least 8 characters long.')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter.')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter.')
    .matches(/[0-9]/, 'Password must contain at least one number.')
    .matches(/[\W_]/, 'Password must contain at least one special character.'),
  
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword')], 'Passwords must match.')
    .required('Please confirm your new password.'),
});

// Yup schema for Change Email
export const ChangeEmailSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email address.')
    .required('Email is required.'),
});

// Yup schema for Change Username
export const ChangeUsernameSchema = Yup.object().shape({
  username: Yup.string()
    .matches(/^[a-zA-Z0-9._-]*$/, 'Username can only contain letters, numbers, underscores, periods, and hyphens.')
    .matches(/^(?!.*[._-]{2})[a-zA-Z0-9._-]+$/, 'Username cannot contain consecutive underscores, periods, or hyphens.')
    .matches(/^(?![._-])[a-zA-Z0-9._-]+(?<![._-])$/, 'Username cannot start or end with an underscore, period, or hyphen.')
    .min(3, 'Username must be at least 3 characters long.')
    .max(20, 'Username must be at most 20 characters long.')
    .required('Username is required.'),
});
