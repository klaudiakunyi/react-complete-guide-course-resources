import reactImg from '../../assets/react-core-concepts.png'
import { reactDescriptions } from '../../assets/descriptions.js'
import './Header.css'

function getRandomInt (max){
    return Math.floor(Math.random() * (max+1))
}

function Header (){
    const description = reactDescriptions[getRandomInt(2)];
    return(
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React essentials</h1>
            <p>
                {description} Fundamental React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}

export default Header;