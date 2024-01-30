import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { gsap } from "gsap";

const Contact = () => {

    const [isVisibleStay , setIsVisibleStay]=useState(false);
    const stay=useRef()


    useEffect(()=>{
        if (isVisibleStay) {
      gsap.to(stay.current, { duration: 1.5, visibility:"visible", height:"100%", marginTop: "10px" , padding:"8px"});
    } else {
      gsap.to(stay.current, { duration: 1.5, height: 0, visibility: "hidden", marginTop: "0px" , padding:"0" });
    }
  }, [isVisibleStay]);





  return (
    <div className="contact-container">
      <Header />
      <div className="contact">
        <div className="contact-form">
          <form className="form">
            <div className="input">
              <input type="text" placeholder="Prénom" />
            </div>
            <div className="input">
              <input type="text" placeholder="Nom" />
            </div>
            <div className="input">
              <input type="text" placeholder="E-mail" />
            </div>
            <div className="input">
              <input type="text" placeholder="Téléphone" />
            </div>

            <div className="stay-container">
              <p className={`text-visible ${isVisibleStay ? "croix" : ""}`} onClick={()=>setIsVisibleStay(!isVisibleStay)}>Informations sur votre séjour</p>
              <div className="stay" ref={stay}>
                <p>Départ / Arrivée : </p>
                <div className="date-content">
                  <span>15/01/24</span>
                  <span>28/01/24</span>
                </div>
                <div className="btn-date">
                    <button>Changer date</button>
                </div>
              </div>
            </div>
            <textarea placeholder="Entrez un message"></textarea>
            <div className="btn">
              <button type="submit">Envoyer</button>
            </div>
          </form>
        </div>
        <div className="contact-text">
          <div className="title">
            <h1>Contactez-nous !</h1>
            <h2>et passez vos <span>MEILLEURES</span> vacances !</h2>
          </div>
          <div className="text">
            <p>
              Toutes les informations nécessaires, regroupant les détails sur
              l'accès et la localisation précise, seront communiquées après la
              finalisation du paiement.
            </p>
            <p>
              Nous vous invitons à entrer en contact avec le propriétaire pour
              avancer dans le processus de paiement, qui sera effectué une fois
              que le propriétaire aura pris connaissance de votre message.
            </p>
          </div>
          <ul className="info-legal">
            <li>Règlement Intérieur</li>
            <li>Mentions légales</li>
            <li>© WebLuxury Design 2024</li>
          </ul>
        </div>
      </div>
      <span className="signature">designed by WebLuxury</span>
    </div>
  );
};

export default Contact;