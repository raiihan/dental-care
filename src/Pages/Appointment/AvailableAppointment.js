import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentService from './AppointmentService';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AvailableAppointment = ({ date }) => {
    const [treatment, setTreatment] = useState(null);
    const formatDate = format(date, 'PP');

    const { data: services, isLoading, refetch } = useQuery(['available', formatDate], () => fetch(`http://localhost:5000/available?date=${formatDate}`)
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }
    return (
        <section>
            <h5 className='text-xl text-secondary font-fold text-center my-16'> Available Appointment on : {format(date, 'PP')}</h5>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <AppointmentService
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
                    refetch={refetch}
                />}
            </div>
        </section>
    );
};

export default AvailableAppointment;