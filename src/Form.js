import { useState } from "react";
import validationScheme from "./Validate";
import "./Form.scss";

const Form = (props) => {
  const [values, setEnteredValues] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [validated, setValidated] = useState("");

  const inputs = ["name", "lastname", "email", "password"];

  const warnings = [
    "must contain at least 2 letters and no digits",
    "must contain at least 2 letters and no digits",
    "must contain @ and .",
    "must containr min 6 max 10, 1 upppercase letter and 1 digit",
  ];

  const inputsList = inputs.map((name, index) => (
    <label className="form__label" htmlFor={name}>
      {name}
      <input
        type="text"
        key={name}
        id={name}
        value={values[index]}
        onChange={(e) =>
          setEnteredValues(
            (datas) => ({
              ...datas,
              [name]: e.target.value,
            }),
            checkFields(values)
          )
        }
      />
      <span className="form__message" key={name}>
        {validated || warnings[index]}
      </span>
    </label>
  ));

  const checkFields = (values) => {
    let enteredData = validationScheme(Object.entries(values));

    if (
      enteredData.length === inputs.length &&
      enteredData.every((value) => value[1] === true)
    ) {
      setDisabled(false);
      setValidated("Approved!");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmit(values);
  };

  return (
    <div>
      <form className="form" autoComplete="off" onSubmit={submitHandler}>
        <div className="form__container">{inputsList}</div>
        <button disabled={disabled} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
