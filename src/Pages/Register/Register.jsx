import { updateProfile } from 'firebase/auth'; 
import { FcGoogle } from 'react-icons/fc';
import { useState, useContext } from 'react'; 
import { toast } from 'react-toastify';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import { Link } from 'react-router';
import { AuthContext } from '../../providers/AuthProvider';
import { ThemeContext } from '../../Components/ThemeContext/ThemeContext';

const Register = () => {
    const { createUser, googleSignIn } = useContext(AuthContext); 
    const { theme } = useContext(ThemeContext);

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
        if (pass.length < 6) errors.push("Password must be at least 6 characters long.");
        if (!/[A-Z]/.test(pass)) errors.push("Password must contain at least one uppercase letter.");
        if (!/[a-z]/.test(pass)) errors.push("Password must contain at least one lowercase letter.");
        setValidationErrors(errors);
        return errors.length === 0;
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword); 
        if (newPassword.length > 0) validatePassword(newPassword);
        else setValidationErrors([]);
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

  
    const cardBg = theme === 'dark' ? 'bg-gray-800 text-white shadow-gray-700' : 'bg-base-100 text-gray-700 shadow-2xl';
    const inputBg = theme === 'dark' ? 'bg-gray-700 text-white border-gray-600 focus:ring-yellow-400' : 'bg-white text-gray-700 border-gray-300 focus:ring-primary';
    const dividerColor = theme === 'dark' ? 'bg-gray-400' : 'bg-gray-300';
    const btnRegister = theme === 'dark' ? 'btn btn-neutral bg-yellow-400 text-black hover:bg-yellow-500' : 'btn btn-neutral';
    const btnGoogle = theme === 'dark' ? 'btn btn-outline border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black mt-4' : 'btn btn-outline border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white mt-4';
    const linkColor = theme === 'dark' ? 'text-yellow-300' : 'text-blue-600';
    const titleColor = theme === 'dark' ? 'text-yellow-400' : '';

    return (
        <div className={`flex justify-center items-center min-h-screen transition-colors duration-500 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className={`card w-full max-w-sm shrink-0 ${cardBg} transition-colors duration-500`}>
                <h1 className={`text-center text-xl font-bold mt-3 ${titleColor}`}>Create a New Account</h1>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className={`label font-bold text-lg ${theme === 'dark' ? 'text-yellow-300' : ''}`}>Name</label>
                        <input type="text" name='name' className={`input input-bordered ${inputBg}`} placeholder="Name" required/>

                        {/* Photo */}
                        <label className={`label font-bold text-lg ${theme === 'dark' ? 'text-yellow-300' : ''}`}>Photo URL</label>
                        <input type="text" name='photo' className={`input input-bordered ${inputBg}`} placeholder="Photo url" required />

                        {/* Email */}
                        <label className={`label ${theme === 'dark' ? 'text-yellow-300' : ''}`}>Email</label>
                        <input type="email" name='email' className={`input input-bordered ${inputBg}`} placeholder="Email" required />

                        {/* Password */}
                        <div className='relative '>
                            <label className={`label ${theme === 'dark' ? 'text-yellow-300' : ''}`}>Password</label>
                            <input 
                                name='password' 
                                type={show ? "text" : "password"} 
                                className={`input input-bordered w-full pr-10 mt-2 ${inputBg}`} 
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
                            className={`${btnRegister} mt-4`}
                        >
                            Create Account
                        </button>

                        <div className='flex justify-center items-center gap-3 mt-4'>
                            <div className={`h-px w-16 ${dividerColor}`}></div>
                            <span className={theme === 'dark' ? 'text-yellow-300' : 'text-gray-500'}>or</span>
                            <div className={`h-px w-16 ${dividerColor}`}></div>
                        </div>

                        <button 
                            onClick={handleGoogleLogin}
                            type="button" 
                            className={`${btnGoogle}`} 
                        >
                            <FcGoogle className="text-xl mr-2" />
                            Continue with Google
                        </button>

                        <p className={`mt-4 text-center ${theme === 'dark' ? 'text-yellow-300' : ''}`}>
                            Already Have an account? 
                            <Link to='/login' className={`text-md font-bold text-blue-600 hover:underline ml-1`}>
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
