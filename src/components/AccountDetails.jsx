import { useState } from "react";

function AccountDetails({
  formData,
  errors,
  handleChange,
  nextStep,
  prevStep,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isValid =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
    formData.password.length >= 8 &&
    formData.confirmPassword === formData.password &&
    formData.confirmPassword !== "";

  return (
    <div className="card">

      <h1>Account Details</h1>

      <p className="subtitle">
        Set up your account credentials.
      </p>

      <div className="input-group">

        <label>Email Address</label>

        <input
          type="email"
          aria-label="Email Address"
          placeholder="Enter your email"
          value={formData.email}
          className={errors.email ? "error-input" : ""}
          onChange={(e) =>
            handleChange("email", e.target.value)
          }
        />

        {errors.email && (
          <small className="error-text">
            {errors.email}
          </small>
        )}

      </div>

      <div className="input-group">

        <label>Password</label>

        <div className="password-field">

          <input
            type={showPassword ? "text" : "password"}
            aria-label="Password"
            placeholder="Minimum 8 characters"
            value={formData.password}
            className={errors.password ? "error-input" : ""}
            onChange={(e) =>
              handleChange("password", e.target.value)
            }
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
            {errors.password}
          </small>
        )}

      </div>

      <div className="input-group">

        <label>Confirm Password</label>

        <input
          type={showPassword ? "text" : "password"}
          aria-label="Confirm Password"
          placeholder="Re-enter password"
          value={formData.confirmPassword}
          className={errors.confirmPassword ? "error-input" : ""}
          onChange={(e) =>
            handleChange("confirmPassword", e.target.value)
          }
        />

        {errors.confirmPassword && (
          <small className="error-text">
            {errors.confirmPassword}
          </small>
        )}

      </div>

      <div className="button-group between">

        <button
          className="back-btn"
          onClick={prevStep}
        >
          ← Back
        </button>

        <button
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