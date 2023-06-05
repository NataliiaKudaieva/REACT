const validationScheme = (data) => {
  let checkedValues = [];

  ///check inputs and create pair of key(name of input) and value(true/false)
  for (let [key, value] of data) {
    if (value.length < 2) break;
    if (key === "name") {
      value = value
        .toLowerCase()
        .split("")
        .every((el) => isNaN(+el));
    } else if (key === "lastname") {
      value = value
        .toLowerCase()
        .split("")
        .every((el) => isNaN(+el));
    } else if (key === "email") {
      const standartCharacters = ["@", "."];
      let checked = value.split("");
      value = standartCharacters.every((el) => checked.includes(el));
    } else if (key === "password") {
      let rule = /(?=.*[A-Z])(?=.*[0-9]).{6,10}$/;
      value = rule.test(value);
    }

    checkedValues.push([key, value]);
  }

  return checkedValues;
};

export default validationScheme;
