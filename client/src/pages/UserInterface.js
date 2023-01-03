import React,{useEffect} from 'react'
import NavbarNR from '../Components/NavbarNR';
import Footer from '../Components/Footer';
import MakeOffer from '../Components/MakeOffer';
import GigsTemplate from '../Components/GigsTemplate';
import "../App.css"

const UserInterface = () => {
   
    useEffect(() => {
        window.scrollTo(0, 0);
        }, []);
    
    return (
        <div
        style={{ backgroundColor: "#F9FAFB" }}
        >
            <NavbarNR />
            <MakeOffer />
            <GigsTemplate />
            <Footer />
        </div>
    )
}

export default UserInterface