import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppoinmentBannen from './AppoinmentBannen';
import AvailableAppointment from './AvailableAppointment';


const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <>
            <AppoinmentBannen date={date} setDate={setDate} />
            <AvailableAppointment date={date} />
            <Footer />
        </>
    );
};

export default Appointment;