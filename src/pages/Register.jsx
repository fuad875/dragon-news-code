import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
         <div className='flex justify-center min-h-screen items-center'>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h2 className='font-semibold text-2xl text-center py-5'>Register your Accout</h2>
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="name" className="input" placeholder="name" />

                                <label className="label">PhotoUrl</label>
                                <input type="" className="input" placeholder="Photourl" />

                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" />

                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" />
                                
                                
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                            <p className='text-semibold text-center'>Don't have a accout? <Link className='text-secondary' to="/auth/login">Login</Link></p>
                        </div>
                    </div>
                </div>
    );
};

export default Register;