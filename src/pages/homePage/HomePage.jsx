import React, { useState } from "react";
import styles from "./homePage.module.css";

import { useNavigate } from "react-router-dom";
import { cardsArr } from "../../utils/cardsArr";
import UserDetailsForm from "../../components/userDetailsForm/UserDetailsForm";

import logo from "./../../assets/logo.png";
import selectTemplateText from "./../../assets/avatarPage/selectTemplateText.svg";
import start from "./../../assets/homePage/start.svg";
import groupPhotoboothText from "./../../assets/homePage/groupPhotoboothText.svg";

export default function HomePage({}) {
  const navigate = useNavigate();
  const [showUserDetailsForm, setShowUserDetailsForm] = useState(false);

  const handleSubmit = () => {
    navigate("/camera");
  };

  return (
    <div className={`flex-col-center ${styles.HomePage}`}>
      {showUserDetailsForm && (
        <UserDetailsForm setShowUserDetailsForm={setShowUserDetailsForm} />
      )}

      <header className={`flex-row-center ${styles.header}`}>
        <div className={`imgContainer ${styles.logoContainer}`}>
          <img src={logo} alt="logo" style={{ opacity: "0" }} />
        </div>
        <div className={`imgContainer ${styles.textContainer}`}>
          <img src={groupPhotoboothText} alt="selectTemplateText" />
        </div>
      </header>

      <main className={`flex-row-center ${styles.main}`}>
        {cardsArr.map((item, index) => (
          <div key={index} className={`${styles.singleContainer} `}>
            <div className={`imgContainer ${styles.imgContainer}`}>
              <img src={item} alt="template" />
            </div>
          </div>
        ))}
      </main>

      <footer className={styles.footer}>
        <div
          onClick={handleSubmit}
          className={`imgContainer ${styles.imgContainer}`}
        >
          <img src={start} alt="start" />
        </div>
      </footer>
    </div>
  );
}
