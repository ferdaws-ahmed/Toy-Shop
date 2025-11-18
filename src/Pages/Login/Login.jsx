import { useState, useContext } from 'react'; 
import { FaEye } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { IoEyeOff } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { AuthContext } from '../../providers/AuthProvider'; 
import { Link, useLocation, useNavigate } from 'react-router';

const Login = () => {
    
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
            const Error = error.message;
            toast.error(Error);
            e.target.reset();
        });
    }
    
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='text-center text-xl font-bold mt-3'>Login Your Account</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        
                        {/* Email */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />

                        {/* Password */}
                        <div className='relative'>
                            <label className="label">Password</label>
                            <input 
                                name='password' 
                                type={show ? "text" : "password"} 
                                className="input" 
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

                        <button className="btn btn-neutral mt-4">Login</button>

                        <div className='flex justify-center items-center gap-3'>
                            <div className='h-px w-16 bg-black'></div>
                            <span>or</span>
                            <div className='h-px w-16 bg-black'></div>
                        </div>

                        <button 
                            type="button" 
                            onClick={handleGoogleLogin}
                            className="btn btn-outline border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white mb-4"
                        >
                            <FcGoogle className="text-xl" />
                            Continue with Google
                        </button>

                        <p>
                            Don't Have an account?{' '}
                            <Link 
                                to='/register' 
                                className='text-md font-bold text-blue-600'
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
