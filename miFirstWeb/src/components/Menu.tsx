import React from "react";
import Logo from "../assets/appetite.png";
const menuStyles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 50px",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  logo: {
    width: "70px",
    height: "70px",
  },
  nav: {
    ul: {
      display: "flex",
      gap: "50px",
      listStyle: "none",
      margin: 0,
      padding: 0,
      cursor: "pointer",
      color: "#3D3D2F",
      fontWeight: "bold",
    },
  },
};
function Menu() {
  return (
    <header style={menuStyles.header}>
      <div style={menuStyles.logoContainer}>
        <img src={Logo} alt="Logo" style={menuStyles.logo} />
        <h2>Bon appétit</h2>
      </div>
      <nav>
        <ul style={menuStyles.nav.ul}>
          <li>Inicio</li>
          <li>Contactos</li>
          <li>Cursos</li>
          <li>Comunidad</li>
          <li>Acerca de</li>
        </ul>
      </nav>
    </header>
  );
}
export default Menu;
