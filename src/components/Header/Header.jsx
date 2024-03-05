import reactImg from '../../assets/react-core-concepts.png'
import './Header.css'

const reactDescriptions = ["Core", "Fundamental", "Crucial"];

function genRandomIndex(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
    let description = reactDescriptions[genRandomIndex(2)];
  
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
}

export default Header;