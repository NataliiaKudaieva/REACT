import Form from "./Form";
import "./App.css";

function App() {
  const isValid = (values) => {
    alert("Form is valid!");
    // Object.values(values).forEach((value, index) => {
    //   if (value.length === 0) return;
    //   delete value[index];
    // });
  };

  return (
    <div className="wrapper">
      <Form onSubmit={isValid} />
    </div>
  );
}

export default App;
