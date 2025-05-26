import { useContext } from "react";
import { Link } from "react-router";
import { LanguageContext, translations } from "./contexts/language";

function MainPage () {
    const {value: language} = useContext(LanguageContext);

      
return (
    <div>
        <p className="pr">{translations[language].main}</p>
        <nav>
        <Link to="/lesson_react/contact">{translations[language].contacts}</Link> | <Link to="/lesson_react/add">{translations[language].add}</Link>
      </nav>
    </div>
)
}

export default MainPage;