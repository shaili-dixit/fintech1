import { useState } from "react";

import ProgressBar from "./components/ProgressBar";
import PersonalInfo from "./components/PersonalInfo";
//import AccountDetails from "./components/AccountDetails";
//import Review from "./components/Review";
//import Success from "./components/Success";

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

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
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
            handleChange={handleChange}
            nextStep={nextStep}
          />
        )}

        {step === 2 && (
          <AccountDetails
            formData={formData}
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