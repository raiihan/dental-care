import React from 'react';
import bgImg from '../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <section
            style={{
                backgroundImage: `url(${bgImg})`
            }}
            className="flex justify-center items-center my-24 p-4">
            <div>
                <h4 className='text-secondary text-center font-semibold text-base'>Contact Us</h4>
                <h2 className='text-3xl mb-6'>Stay Connect with Us</h2>
                <form >
                    <div class="form-control w-full max-w-xs mb-6">
                        <input type="text" placeholder="Email Address" class="input input-bordered input-sm w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs mb-6">
                        <input type="text" placeholder="Subject" class="input input-bordered input-sm w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs mb-6">
                        <textarea class="textarea input-bordered input-sm w-full max-w-xs" placeholder="Your Message"></textarea>
                    </div>
                    <div class="mb-6 text-center">
                        <button class="btn btn-primary btn-sm ">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;