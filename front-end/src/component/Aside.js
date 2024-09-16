import "./Aside.css";
import yoga from '../assets/yoga.png';
import natation from '../assets/natation.png';
import cyclisme from '../assets/cyclisme.png';
import musculation from '../assets/musculation.png';

export default function Aside() {
    return <>
        <div className="Aside">
            <div className="Aside_button">
                <a href="*">
                    <img src={yoga} alt="yoga" />
                </a>
                <a href="*">
                    <img src={natation} alt="natation" />
                </a>
                <a href="*">
                    <img src={cyclisme} alt="cyclisme" />
                </a>
                <a href="*">
                    <img src={musculation} alt="musculation" />
                </a>
            </div>
            <p>Copyright, SportSee 2020</p>
        </div>
    </>
}