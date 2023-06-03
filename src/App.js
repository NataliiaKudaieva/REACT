import Form from "./Form";
import "./App.css";
import validationScheme from "./Validate";
import Button from "./Button";

function App() {
  const getData = (data) => {
    console.log(data);
  };

  const checked = (c) => {
    console.log("df");
  };

  return (
    <div className="wrapper">
      <Form onSubmit={getData} onCheckHandler={checked} />
      <Button />
    </div>
  );
}

export default App;
