import { useState, useContext } from 'react'; 
import { FaEye } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { IoEyeOff } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { AuthContext } from '../../providers/AuthProvider'; 
import { Link, useLocation, useNavigate } from 'react-router';
import { ThemeContext } from '../../Components/ThemeContext/ThemeContext';

const Login = () => {
    const { theme } = useContext(ThemeContext);

    const { signIn, googleSignIn } = useContext(AuthContext); 
    const [show, setShow] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleSignIn()
        .then((res)=> {
            console.log(res.user);
            toast.success('Login successful with Google! ');
            const from = location.state?.from?.pathname || '/myprofile';
            navigate(from, { replace: true });
        })
        .catch((error)=> {
            console.log(error.message);
            toast.error(error.message);
        });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email?.value;
        const password = e.target.password?.value;
        
        signIn(email, password)
        .then((res)=> {
            console.log(res.user);
            toast.success('Login success');
            e.target.reset();
            const from = location.state?.from?.pathname || '/myprofile';
            navigate(from, { replace: true }); 
        })
        .catch((error)=> {
            toast.error(error.message);
            e.target.reset();
        });
    }

    const cardBg = theme === 'dark' ? 'bg-gray-800 text-white shadow-gray-700' : 'bg-base-100 text-gray-700 shadow-2xl';
    const inputBg = theme === 'dark' ? 'bg-gray-700 text-white border-gray-600 focus:ring-yellow-400' : 'bg-white text-gray-700 border-gray-300 focus:ring-primary';
    const dividerColor = theme === 'dark' ? 'bg-gray-400' : 'bg-black';
    const btnLogin = theme === 'dark' ? 'btn btn-neutral bg-yellow-400 text-black hover:bg-yellow-500' : 'btn btn-neutral';
    const btnGoogle = theme === 'dark' ? 'btn btn-outline border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black mb-4' : 'btn btn-outline border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white mb-4';
    const linkColor = theme === 'dark' ? 'text-yellow-300' : 'text-blue-600';

    return (
        <div className={`flex justify-center items-center min-h-screen transition-colors duration-500 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className={`card w-full max-w-sm shrink-0 ${cardBg} transition-colors duration-500`}>
                <h1 className={`text-center text-xl font-bold mt-3 ${theme === 'dark' ? 'text-yellow-400' : ''}`}>Login Your Account</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        {/* Email */}
                        <label className={`label ${theme === 'dark' ? 'text-yellow-300' : ''}`}>Email</label>
                        <input type="email" name='email' className={`input ${inputBg}`} placeholder="Email" />

                        {/* Password */}
                        <div className='relative'>
                            <label className={`label ${theme === 'dark' ? 'text-yellow-300' : ''}`}>Password</label>
                            <input 
                                name='password' 
                                type={show ? "text" : "password"} 
                                className={`input ${inputBg}`} 
                                placeholder="Password" 
                            />
                            <span 
                                onClick={()=> setShow(!show)} 
                                className='absolute top-[32px] right-[15px] sm:right-[30px] z-50 cursor-pointer'
                            >
                                {show ? <IoEyeOff size={15} /> : <FaEye size={15} />}
                            </span>
                        </div>

                        {/* Forget Password Link */}
                        <div>
                            <Link 
                                to="/forgetpassword" 
                                className="link link-hover text-red-400"
                            >
                                Forgot password?
                            </Link>
                        </div>

                        <button className={`${btnLogin} mt-4`}>Login</button>

                        <div className='flex justify-center items-center gap-3 my-2'>
                            <div className={`h-px w-16 ${dividerColor}`}></div>
                            <span className={theme === 'dark' ? 'text-yellow-300' : ''}>or</span>
                            <div className={`h-px w-16 ${dividerColor}`}></div>
                        </div>

                        <button 
                            type="button" 
                            onClick={handleGoogleLogin}
                            className={`${btnGoogle}`}
                        >
                            <FcGoogle className="text-xl mr-2" />
                            Continue with Google
                        </button>

                        <p className={theme === 'dark' ? 'text-yellow-300' : ''}>
                            Don't Have an account?{' '}
                            <Link 
                                to='/register' 
                                className={`text-md font-bold text-blue-600`}
                            >
                                Register
                            </Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;
