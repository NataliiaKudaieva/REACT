import { useState, useEffect } from "react";
import RepoItem from "../components/RepoItem";
import Tab from "../components/Tab";
import { fetchPopularRepos } from "../api";
import Loader from "../components/Loader";

const Popular = () => {
  const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [repos, setRepos] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  let handleLang = (lang) => {
    setSelectedLanguage(lang);
  };

  useEffect(() => {
    setLoading(true);
    fetchPopularRepos(selectedLanguage)
      .then((data) => setRepos(data.items))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [selectedLanguage]);

  return (
    <div>
      <Tab languages={languages} handleLang={handleLang} />
      <RepoItem data={repos} />
      {loading === true ? <Loader /> : null}
    </div>
  );
};

export default Popular;
