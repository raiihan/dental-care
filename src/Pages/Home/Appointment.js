import React from 'react';
import img from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor.png';

const Appointment = () => {
    return (
        <div
            style={{ backgroundImage: `url(${img})` }}
            className='flex justify-center items-center mt-36'>
            <div className='flex-1 mt-[-100px] hidden md:block'>
                <img src={doctor} alt="" />
            </div>
            <div className='flex-1 p-5'>
                <h4 className='text-xl font-semibold text-primary'>Appointment</h4>
                <h2 className='text-2xl text-white'>Make an appointment Today</h2>
                <p class="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>

                <button class="btn border-0 bg-gradient-to-r from-primary to-secondary">Get Started</button>
            </div>
        </div>
    );
};

export default Appointment;