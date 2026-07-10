import { useState } from "react";
import { useFormContext } from "react-hook-form";

function AccountDetails({
  nextStep,
  prevStep,
  isValid,
}) {

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (

    <div className="card">

      <h1>Account Details</h1>

      <p className="subtitle">
        Set up your account credentials.
      </p>

      <div className="input-group">

        <label htmlFor="email">
          Email Address
        </label>

        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          aria-label="Email Address"
          className={errors.email ? "error-input" : ""}
          {...register("email")}
        />

        {errors.email && (

          <small className="error-text">

            {errors.email.message}

          </small>

        )}

      </div>

      <div className="input-group">

        <label htmlFor="password">

          Password

        </label>

        <div className="password-field">

          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Minimum 8 characters"
            aria-label="Password"
            className={errors.password ? "error-input" : ""}
            {...register("password")}
          />

          <button
            type="button"
            className="toggle-password"
            aria-label="Toggle Password Visibility"
            onClick={() =>
              setShowPassword(!showPassword)
            }
          >

            {showPassword ? "🙈 Hide" : "👁 Show"}

          </button>

        </div>

        {errors.password && (

          <small className="error-text">

            {errors.password.message}

          </small>

        )}

      </div>

      <div className="input-group">

        <label htmlFor="confirmPassword">

          Confirm Password

        </label>

        <input
          id="confirmPassword"
          type={showPassword ? "text" : "password"}
          placeholder="Re-enter Password"
          aria-label="Confirm Password"
          className={
            errors.confirmPassword ? "error-input" : ""
          }
          {...register("confirmPassword")}
        />

        {errors.confirmPassword && (

          <small className="error-text">

            {errors.confirmPassword.message}

          </small>

        )}

      </div>

      <div className="button-group between">

        <button
          type="button"
          className="back-btn"
          onClick={prevStep}
        >

          ← Back

        </button>

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

export default AccountDetails;