







import { updateProfile } from 'firebase/auth'; 
import { FcGoogle } from 'react-icons/fc';


import { useState, useContext } from 'react'; 





import { toast } from 'react-toastify';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import { Link } from 'react-router';
import { AuthContext } from '../../providers/AuthProvider';




const Register = () => {
   
    const { createUser, googleSignIn } = useContext(AuthContext); 

    const [show, setShow] = useState(false);
    
    const [password, setPassword] = useState('');
    
    const [validationErrors, setValidationErrors] = useState([]);


    const handleGoogleLogin = () => {
        
        googleSignIn()
        .then((res)=> {
            console.log(res.user);
            toast.success('Registration successful!');
        })
        .catch((error)=> {
            console.log(error.message)
            toast.error(error.message)
        })
    }
    
 
    const validatePassword = (pass) => {
        const errors = [];
        
       
        if (pass.length < 6) {
            errors.push("Password must be at least 6 characters long.");
        } 
        
      
        if (!/[A-Z]/.test(pass)) {
            errors.push("Password must contain at least one uppercase letter.");
        }
        
        
        if (!/[a-z]/.test(pass)) {
            errors.push("Password must contain at least one lowercase letter.");
        }
        
        setValidationErrors(errors);
        return errors.length === 0;
    };


    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword); 
        
        
        if (newPassword.length > 0) {
            validatePassword(newPassword);
        } else {
            setValidationErrors([]); 
        }
    }


    const handleRegister = (e) =>{
        e.preventDefault();

        const email = e.target.email?.value;
        const displayName = e.target.name?.value;
        const photoURL = e.target.photo?.value;
        
        
        
        
        if (!validatePassword(password)) {
            toast.error("Please fix the password errors before proceeding.");
            return;
        }

       
        createUser(email, password)
        .then((res)=> {
            updateProfile(res.user, {displayName, photoURL})
            .then(()=> { 
                
                toast.success('Registration successful!');
                e.target.reset();

                setPassword('')
                setValidationErrors([])
            })
            .catch(Error => toast.error(Error.message))

            
        })
        .catch((error)=> {
            console.log(error.message)
            toast.error(error.message)
            e.target.reset();
            setPassword('')
            setValidationErrors([])
        })
        
    }
    
    
    const isRegisterDisabled = validationErrors.length > 0 || password.length === 0;

    
    return (
        
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='text-center text-xl font-bold mt-3'>Create a New Account</h1>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className="label font-bold text-lg">Name</label>
                        <input type="text" name='name' className="input input-bordered" placeholder="Name" required/>
                        
                        {/* Photo */}
                        <label className="label font-bold text-lg">Photo URL</label>
                        <input type="text" name='photo' className="input input-bordered" placeholder="Photo url" required />
                        
                        {/* Email */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input input-bordered" placeholder="Email" required />
                        
                        {/* Password Input Field */}
                        <div className='relative '>
                            <label className="label">Password</label>
                            <input 
                                name='password' 
                                type={show ? "text" : "password"} 
                                className="input input-bordered w-full pr-10 mt-2" 
                                placeholder="Password" 
                                value={password} 
                                onChange={handlePasswordChange} 
                                required 
                            />
                            <span 
                                onClick={()=> setShow(!show)} 
                                className='absolute top-[32px] right-3 sm:right-4 z-50 cursor-pointer p-1'
                            > 
                                {show ? <IoEyeOff size={18}/>  : <FaEye size={18} />  } 
                            </span>
                        </div>
                        
                        
                        {validationErrors.length > 0 && (
                            <div className="mt-2 space-y-1">
                                {validationErrors.map((error, index) => (
                                    <p key={index} className="text-sm text-red-500 font-medium">
                                         {error}
                                    </p>
                                ))}
                            </div>
                        )}
                        
                        
                        <button 
                            
                            disabled={isRegisterDisabled}
                            className="btn btn-neutral mt-4"
                        >
                            Create Account
                        </button>
                        
                        <div className='flex justify-center items-center gap-3 mt-4'>
                            <div className='h-px w-16 bg-gray-300'></div>
                            <span className='text-gray-500'>or</span>
                            <div className='h-px w-16 bg-gray-300'></div>
                        </div>
                        
                        <button 
                            onClick={handleGoogleLogin}
                            type="button" 
                            className="btn btn-outline border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white mt-4" 
                        >
                            <FcGoogle className="text-xl" />
                            Continue with Google
                        </button>
                        
                        <p className='mt-4 text-center'>
                            Already Have an account? 
                            <Link to='/login' className='text-md font-bold text-blue-600 hover:underline ml-1'>
                                Login
                            </Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;
