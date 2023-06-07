import { useState } from "react";
import { useEffect } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

const Tab = (props) => {
  const [disabled, setDisabled] = useState(false);
  const [selectedLanguage, setselectedLanguage] = useState("All");

  const navigate = useNavigate();

  const searchQueries = (lang) => {
    navigate({
      pathname: `/popular`,
      search: `?${createSearchParams(lang)}`,
    });
  };

  const handleClick = (language, bool) => {
    setselectedLanguage(language);

    ///set timer to prevent multiple clicks
    setDisabled(bool);
    setTimeout(() => {
      setDisabled(!bool);
    }, 2800);
    props.handleLang(language);

    //set queries
    searchQueries(language);
  };

  return (
    <ul className="languages">
      {props.languages.map((language, index) => (
        <li
          className={disabled === true ? "disabled" : null}
          key={index}
          style={{
            color: language === selectedLanguage ? "#d0021b" : "#00000000000",
          }}
          onClick={() => {
            handleClick(language, true);
          }}
        >
          {language}
        </li>
      ))}
    </ul>
  );
};
export default Tab;
