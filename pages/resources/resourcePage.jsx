/** @format */

import React, { useState, useEffect } from "react";
import TreatmentCard from "@/components/resources/treatmentCard/treatmentCard";
import styles from "./resourcePage.module.css";
import PopupAllSurgeries from "@/pages/resources/popUp/popupResources";
import Image from 'next/image';

export default function ResourcePage() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedProcedure, setSelectedProcedure] = useState(null);

  const handleClick = (procedureType) => {
    console.log("Clicked on:", procedureType);
    setSelectedProcedure(procedureType);
    setIsPopupVisible(true);
};

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className={styles.mainContainer}>
       <div className={styles.resourceContainer}>
        <div className={styles.bannerContainer}>
          <Image
            src="/images/faq/faqBanner.jpg"
            alt="Banner"
            width={1920} 
            height={1080}
            className={styles.resourceBanner}
          />
          <h1 className={styles.resourceTitle}>SURGERY RESOURCES</h1>
        </div>
      </div>
    <div className={styles.procedureContainer}>
      <div className={styles.bothGroups}>
        <div className={styles.tCardGroup1}>
          <TreatmentCard
            onClick={() => handleClick("breastImplant")}
            imageUrl="/images/resources/breastImplant.jpg"
            description="BREAST IMPLANT"
   
          />
          <TreatmentCard
             onClick={() => handleClick("breastLift")}
            imageUrl="/images/resources/breastLift.jpg"
            description="BREAST LIFT"
        
          />
          <TreatmentCard
             onClick={() => handleClick("breastReduction")}
            imageUrl="/images/resources/breastReduction.jpg"
            description="BREAST REDUCTION"
            
          />
          <TreatmentCard
             onClick={() => handleClick("faceLift")}
            imageUrl="/images/resources/faceLift.jpg"
            description="FACE LIFT"
           
          />
        </div>
        <div className={styles.tCardGroup2}>
          <TreatmentCard
             onClick={() => handleClick("liposuction")}
            imageUrl="/images/resources/liposuction.jpg"
            description="LIPOSUCTION"
          
          />
          <TreatmentCard
             onClick={() => handleClick("trans")}
            imageUrl="/images/resources/trans.jpg"
            description="GENDER TRANSITION"
    
          />
          <TreatmentCard
             onClick={() => handleClick("rhinoplasty")}
            imageUrl="/images/resources/rhinoplasty.jpg"
            description="RHINOPLASTY"
        
          />
          <TreatmentCard
             onClick={() => handleClick("tummyTuck")}
            imageUrl="/images/resources/tummyTuck.jpg"
            description="TUMMY TUCK"
     
          />
        </div>
      </div>


      <PopupAllSurgeries
    className={isPopupVisible ? "popup visible" : "popup"}
    isPopupVisible={isPopupVisible}
    onClose={() => setIsPopupVisible(false)}
    selectedProcedure={selectedProcedure}
/>
    </div>
    </div>
  );
}
