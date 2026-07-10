import { useState } from "react";

function AccountDetails({
  formData,
  handleChange,
  nextStep,
  prevStep,
}) {

  const [showPassword, setShowPassword] = useState(false);

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
          placeholder="Enter email address"
          value={formData.email}
          onChange={(e) =>
            handleChange("email", e.target.value)
          }
        />

      </div>

      <div className="input-group">

        <label>Password</label>

        <div className="password-field">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={formData.password}
            onChange={(e) =>
              handleChange("password", e.target.value)
            }
          />

          <button
            type="button"
            className="toggle-password"
            onClick={() =>
              setShowPassword(!showPassword)
            }
          >
            {showPassword ? "Hide" : "Show"}
          </button>

        </div>

      </div>

      <div className="input-group">

        <label>Confirm Password</label>

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={(e) =>
            handleChange("confirmPassword", e.target.value)
          }
        />

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
          onClick={nextStep}
        >
          Next →
        </button>

      </div>

    </div>

  );

}

export default AccountDetails;