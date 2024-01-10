function Validation(values) {
    const errors = {};
    const email_pattern = /^[^\s@]+[^\s@]+\.[^\s@]{2,6}$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  
    if (values.email === "") {
      errors.email = "field is required";
    } else if (!email_pattern.test(values.email)) {
      errors.email = "Invalid Credentials";
    }
  
    if (values.password === "") {
      errors.password = "field is required";
    } else if (!password_pattern.test(values.password)) {
      errors.password = "Invalid Credentials";
    }
  
    return errors;
  }
  
  export default Validation;
  