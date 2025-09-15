import React from "react";
import Button from "./Buttons";
import Images from "../assets/pechugasRellenas.jpg";

const sectionStyles = {
  section: {
    display: "flex",
    alignItems: "center",
    padding: "50px",
    backgroundColor: "#FFF2E2",
  },
  textContainer: {
    flex: 1,
    paddingRight: "30px",
  },
  tittle: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "#AA2A31",
  },
  paragraph: {
    fontSize: "18px",
    lineHeight: "1.6",
    color: "#3D3D2F",
    marginBottom: "30px",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: "100%",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.8)",
  },
  buttonContainer: {
    marginTop: "20px",
  },
};

function MainSection() {
  return (
    <section style={sectionStyles.section}>
      <div style={sectionStyles.textContainer}>
        <h1 style={sectionStyles.tittle}>
          Preparar tu comida, más fácil que nunca.
        </h1>
        <p style={sectionStyles.paragraph}>
          Tu espacio para descubrir recetas fáciles, saludables y deliciosas
          para cada día. ¡Únete a nuestra comunidad, suscríbete y cuéntanos tus
          creaciones!
        </p>
        <div style={sectionStyles.buttonContainer}>
          <Button text="Suscribete" />
          <Button text="Leer más" />
        </div>
      </div>
      <div style={sectionStyles.imageContainer}>
        <img src={Images} alt="Pechugas Rellenas" style={sectionStyles.image} />
      </div>
    </section>
  );
}

export default MainSection;
