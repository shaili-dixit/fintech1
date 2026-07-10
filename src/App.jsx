import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  personalInfoSchema,
  accountDetailsSchema,
} from "./validationSchema";

import ProgressBar from "./components/ProgressBar";
import PersonalInfo from "./components/PersonalInfo";
import AccountDetails from "./components/AccountDetails";
import Review from "./components/Review";
import Success from "./components/Success";

import "./styles.css";

function App() {

  const [step, setStep] = useState(1);

  const [submittedData, setSubmittedData] = useState(null);

  const schema =
    step === 1
      ? personalInfoSchema
      : accountDetailsSchema;

  const methods = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const {

    trigger,

    getValues,

    handleSubmit,

    formState: { isValid },

  } = methods;

  const nextStep = async () => {

    const valid = await trigger();

    if (valid) {

      setStep((prev) => prev + 1);

    }

  };

  const prevStep = () => {

    setStep((prev) => prev - 1);

  };

  const onSubmit = (data) => {

    console.log("Final Submitted Data");

    console.log(data);

    console.log(
      "[Analytics] User interacted with Multi Step Onboarding Wizard"
    );

    setSubmittedData(data);

    setStep(4);

  };

  return (

    <div className="app">

      <div className="container">

        {step <= 3 && <ProgressBar step={step} />}

        <FormProvider {...methods}>

          {step === 1 && (

            <PersonalInfo

              nextStep={nextStep}

              isValid={isValid}

            />

          )}

          {step === 2 && (

            <AccountDetails

              nextStep={nextStep}

              prevStep={prevStep}

              isValid={isValid}

            />

          )}

          {step === 3 && (

            <Review

              data={getValues()}

              prevStep={prevStep}

              handleSubmit={handleSubmit(onSubmit)}

            />

          )}

        </FormProvider>

        {step === 4 &&

          <Success data={submittedData} />

        }

      </div>

    </div>

  );

}

export default App;