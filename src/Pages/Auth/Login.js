import React, {useEffect} from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithGoogle , useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import Loading from '../Shared/Loading'
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';

    useEffect(()=>{
        if (user || googleUser) {
            navigate(from, {replace: true})
        }
    },[user, googleUser])
    if(loading || googleLoading){
        return <Loading/>
    }
    let singInError;
    if(error || googleError){
        singInError = <p className='text-red-500 mb-3'>{error?.message || googleError?.message}</p>
    }
    

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-bold text-2xl">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                            type="email"
                                {...register("email", 
                                {
                                    required:{
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: 'Provide a valid Email' 
                                    }
                                })}
                                placeholder="Enter Email"
                                className="input input-bordered w-full max-w-xs" 
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}    
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input 
                            type="password"
                                {...register("password", 
                                {
                                    required:{
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                    value: 6,
                                    message: 'Must be 6 Character or longer' 
                                    }
                                })}
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs" 
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}    
                            </label>
                        </div>
                                {singInError}
                    <input className="btn w-full max-w-xs" type="submit" value="Login"/>
             </form>
             <p className='text-center'><small>New to Dental Care? <Link to='/signup' className='text-primary'>Create New Account</Link></small></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;