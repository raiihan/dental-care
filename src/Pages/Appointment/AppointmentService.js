import React from 'react';

const AppointmentService = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-xl font-bold text-secondary">{name}</h2>
                <p>
                    {
                        slots.length > 0
                            ?
                            <span>{slots[0]}</span>
                            :
                            <span className='text-red-500'>Try Another Day</span>

                    }
                </p>
                <p>{slots.length}  {slots.length > 1 ? "Spaces" : "Space"} Available</p>
                <div className="card-actions justify-center">

                    <label
                        htmlFor="booking-modal"
                        onClick={() => setTreatment(service)}
                        disable={slots.length === 0}
                        className="btn btn-sm btn-secondary uppercase text-white bg-gradient-to-r from-primary to-secondary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentService;