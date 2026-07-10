import { useFormContext } from "react-hook-form";

function PersonalInfo({ nextStep, isValid }) {

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="card">

      <h1>Personal Information</h1>

      <p className="subtitle">
        Tell us a little about yourself.
      </p>

      <div className="input-group">

        <label htmlFor="firstName">First Name</label>

        <input
          id="firstName"
          type="text"
          placeholder="Enter first name"
          aria-label="First Name"
          className={errors.firstName ? "error-input" : ""}
          {...register("firstName")}
        />

        {errors.firstName && (
          <small className="error-text">
            {errors.firstName.message}
          </small>
        )}

      </div>

      <div className="input-group">

        <label htmlFor="lastName">Last Name</label>

        <input
          id="lastName"
          type="text"
          placeholder="Enter last name"
          aria-label="Last Name"
          className={errors.lastName ? "error-input" : ""}
          {...register("lastName")}
        />

        {errors.lastName && (
          <small className="error-text">
            {errors.lastName.message}
          </small>
        )}

      </div>

      <div className="input-group">

        <label htmlFor="age">Age</label>

        <input
          id="age"
          type="number"
          placeholder="Enter age"
          aria-label="Age"
          className={errors.age ? "error-input" : ""}
          {...register("age")}
        />

        {errors.age && (
          <small className="error-text">
            {errors.age.message}
          </small>
        )}

      </div>

      <div className="button-group">

        <button
          type="button"
          className="next-btn"
          disabled={!isValid}
          onClick={nextStep}
        >
          Next →
        </button>

      </div>

    </div>
  );
}

export default PersonalInfo;