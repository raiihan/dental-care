import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const [user] = useAuthState(auth);
    const { _id, name, slots } = treatment;
    const formatDate = format(date, 'PP');

    const handleForm = event => {
        event.preventDefault();

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formatDate,
            slot: event.target.slot.value,
            patientName: user?.displayName,
            patientEmail: user?.email,
            phone: event.target.phone.value
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    toast(`Appointment is set, ${formatDate} at ${booking.slot}`)
                }
                else {
                    toast.error(`Already have an appointment on, ${data?.booking?.date} at ${data?.booking?.slot}`)
                }
                // for closing Modal
                setTreatment(null)
            })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking For: {name}</h3>
                    <form
                        onSubmit={handleForm}
                        className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" disabled value={format(date, "PP")} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='yourName' disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='email' disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;