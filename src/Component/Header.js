import "./Stylesheet/Header.css";
import ProfilePciture from "../Ressources/images/profile.png";
import Constellation from "./Constellation";
function Header(props) {
  function particles(category, shape, n) {
    return [...Array(n)].map((e, i) => {
      return <img src={shape} className={`particle p${category}`} />;
    });
  }
  return (
    <header>
      <Constellation Current={props.CurrentPage} Pages={['Accueil','Education','Experience','Projets','Competences','Interets','La-suite','Contactez-moi']}/>
      <img src={ProfilePciture} alt="Wassila Maria Slimani" id="profilePic" />
      <h1>Wassila Maria Slimani</h1>
    </header>
  );
}

export default Header;
