/** @format */

import React, { useState, useEffect } from "react";
import TreatmentCard from "@/components/resources/treatmentCard/treatmentCard";
import styles from "./resourcePage.module.css";
import PopupAllSurgeries from "@/pages/resources/popUp/popupResources";

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
    <div className={styles.procedureContainer}>
      <h1 className={styles.title}>PROCEDURES & TREATMENTS</h1>
      <div className={styles.bothGroups}>
        <div className={styles.tCardGroup1}>
          <TreatmentCard
            onClick={() => handleClick("breastImplant")}
            imageUrl="/images/resources/breastImplant.jpg"
            description="BREAST IMPLANT"
            // className={styles.tCard}
          />
          <TreatmentCard
             onClick={() => handleClick("breastLift")}
            imageUrl="/images/resources/breastLift.jpg"
            description="BREAST LIFT"
            // className={styles.tCard}
          />
          <TreatmentCard
             onClick={() => handleClick("breastReduction")}
            imageUrl="/images/resources/breastReduction.jpg"
            description="BREAST REDUCTION"
            // className={styles.tCard}
          />
          <TreatmentCard
             onClick={() => handleClick("faceLift")}
            imageUrl="/images/resources/faceLift.jpg"
            description="FACE LIFT"
            // className={styles.tCard}
          />
        </div>
        <div className={styles.tCardGroup2}>
          <TreatmentCard
             onClick={() => handleClick("liposuction")}
            imageUrl="/images/resources/liposuction.jpg"
            description="LIPOSUCTION"
            // className={styles.tCard}
          />
          <TreatmentCard
             onClick={() => handleClick("trans")}
            imageUrl="/images/resources/trans.jpg"
            description="GENDER TRANSITION"
            // className={styles.tCard}
          />
          <TreatmentCard
             onClick={() => handleClick("rhinoplasty")}
            imageUrl="/images/resources/rhinoplasty.jpg"
            description="RHINOPLASTY"
            // className={styles.tCard}
          />
          <TreatmentCard
             onClick={() => handleClick("tummyTuck")}
            imageUrl="/images/resources/tummyTuck.jpg"
            description="TUMMY TUCK"
            // className={styles.tCard}
          />
        </div>
      </div>
      {console.log("isPopupVisible: " + isPopupVisible)}

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
