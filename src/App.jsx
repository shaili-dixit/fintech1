import { useState } from "react";

import ProgressBar from "./components/ProgressBar";
import PersonalInfo from "./components/PersonalInfo";
import AccountDetails from "./components/AccountDetails";
import Review from "./components/Review";
import Success from "./components/Success";

import "./styles.css";

function App() {

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {

    let error = "";

    switch (name) {

      case "firstName":
        if (value.trim().length < 2)
          error = "First name must be at least 2 characters.";
        break;

      case "lastName":
        if (value.trim().length < 2)
          error = "Last name must be at least 2 characters.";
        break;

      case "age":
        if (!value || value < 18 || value > 100)
          error = "Age must be between 18 and 100.";
        break;

      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "Enter a valid email address.";
        break;

      case "password":
        if (value.length < 8)
          error = "Password must contain at least 8 characters.";
        break;

      case "confirmPassword":
        if (value !== formData.password)
          error = "Passwords do not match.";
        break;

      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    return error === "";

  };

  const handleChange = (field, value) => {

    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    validateField(field, value);

  };

  const nextStep = () => {

    if (step < 3) {
      setStep(step + 1);
    }

  };

  const prevStep = () => {

    if (step > 1) {
      setStep(step - 1);
    }

  };

  const handleSubmit = () => {

    console.log("Final Submitted Data");

    console.log(formData);

    console.log(
      "[Analytics] User interacted with Multi Step Onboarding Wizard"
    );

    setStep(4);

  };

  return (

    <div className="app">

      <div className="container">

        {step <= 3 && <ProgressBar step={step} />}

        {step === 1 && (

          <PersonalInfo
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            nextStep={nextStep}
          />

        )}

        {step === 2 && (

          <AccountDetails
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />

        )}

        {step === 3 && (

          <Review
            formData={formData}
            prevStep={prevStep}
            handleSubmit={handleSubmit}
          />

        )}

        {step === 4 && <Success />}

      </div>

    </div>

  );

}

export default App;