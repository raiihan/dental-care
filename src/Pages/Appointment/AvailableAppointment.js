import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentService from './AppointmentService';
import BookingModal from './BookingModal';
const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formatDate = format(date, 'PP');
    useEffect(() => {
        fetch(`http://localhost:5000/available?data=${formatDate}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section>
            <h5 className='text-xl text-secondary font-fold text-center my-16'> Available Appointment on : {format(date, 'PP')}</h5>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <AppointmentService
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    />)
                }
            </div>
            <div>
                {treatment && <BookingModal
                    date={date}
                    treatment={treatment}
                    setTreatment={setTreatment}
                />}
            </div>
        </section>
    );
};

export default AvailableAppointment;