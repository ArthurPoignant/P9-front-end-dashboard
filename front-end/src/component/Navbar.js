import logo from "../logo.png";
import "./Navbar.css"

export default function Navbar() {
    return <>
        <div className="Navbar">
                <img src={logo} alt="logo" />
            <div className="Navbar_button">
                <a href="*">Accueil</a>
                <a href="*">Profil</a>
                <a href="*">Réglage</a>
                <a href="*">Communauté</a>
            </div>
        </div>
    </>
}