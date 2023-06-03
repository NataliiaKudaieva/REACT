import { useState } from "react";
import validationScheme from "./Validate";
import "./Form.scss";

const Form = (props) => {
  const [values, setEnteredValues] = useState([]);
  const [warning, setWarning] = useState("");
  let [disabled, setDisabled] = useState(true);

  const inputs = ["name", "lastname", "email", "password"];

  const inputsList = inputs.map((name) => (
    <label className="form__label" htmlFor={name}>
      {name}
      <input
        type="text"
        key={name}
        id={name}
        onChange={(e) =>
          setEnteredValues((datas) => ({
            ...datas,
            [name]: e.target.value,
          }))
        }
      />
      <span className="form__message">{warning}</span>
    </label>
  ));

  const checkFields = (values) => {
    validationScheme(Object.entries(values));

    let enteredData = validationScheme(Object.entries(values));

    if (Object.keys(enteredData).length === 0) return;
    let validated = enteredData.every((value) => value[1] === true);
    setDisabled(validated);
  };

  checkFields(values);

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmit(Object.entries(values));
  };

  return (
    <form className="form" autoComplete="off" onSubmit={submitHandler}>
      <div className="form__container">{inputsList}</div>
      <button disabled={disabled} type="submit" className="form__btn">
        Submit
      </button>
    </form>
  );
};

export default Form;
