import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h5 className='text-xl text-secondary font-fold text-center'> Available Appointment on : {format(date, 'PP')}</h5>

        </div>
    );
};

export default AvailableAppointment;