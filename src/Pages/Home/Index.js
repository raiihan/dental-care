import React from "react";
import Footer from "../Shared/Footer";
import Appointment from "./Appointment";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Info from "./Info";
import Reviews from "./Reviews";
import Services from "./Services";
const Index = () => {
    return (
        <div className="px-12 mx-auto">
            <Banner />
            <Info />
            <Services />
            <Appointment />
            <Reviews />
            <ContactUs />
            <Footer />
        </div>
    );
}
export default Index;