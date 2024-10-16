import * as yup from 'yup';


  

const EmployeeSchema = yup.object({
  name: yup.string().required('Name is required'),
  username: yup.string().required('Username is required'),
  address: yup.string().required('Address is required'),
  email: yup
    .string()
    .email('Email must be valid')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  birth: yup
    .date()
    .nullable() // allows null values
    .required('Date of birth is required'), // still enforces required
  startDate: yup
    .date()
    .nullable() // allows null values
    .required('Start date is required'), // still enforces required
  active: yup.boolean().default(false), // Boolean field with default value
});

export default EmployeeSchema;
