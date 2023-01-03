import React,{useEffect} from "react";
import Footer from "../Components/Footer";
import NavbarNR from "../Components/NavbarNR";
import GigDetails from "../Components/GigDetails";
import Reviews from "../Components/Reviews";

const GigsInfoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    }, []);
  return (
    <>
    <div  style={{ backgroundColor: "#F9FAFB" }}>
      <NavbarNR />
      <GigDetails/>
      <Reviews/>
      <Footer />
    </div>
      
    </>
  );
};

export default GigsInfoPage;
