import React from "react";
import Footer from "../Components/Footer";
import NavbarNR from "../Components/NavbarNR";
import GigDetails from "../Components/GigDetails";
const GigsInfoPage = () => {
  return (
    <>
    <div  style={{ backgroundColor: "#F9FAFB" }}>
      <NavbarNR />
      <GigDetails/>
      <Footer />
    </div>
      
    </>
  );
};

export default GigsInfoPage;
