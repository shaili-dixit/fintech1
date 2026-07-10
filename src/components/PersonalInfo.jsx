function PersonalInfo({
  formData,
  errors,
  handleChange,
  nextStep,
}) {

  const isValid =
    formData.firstName.trim().length >= 2 &&
    formData.lastName.trim().length >= 2 &&
    Number(formData.age) >= 18 &&
    Number(formData.age) <= 100;

  return (

    <div className="card">

      <h1>Personal Information</h1>

      <p className="subtitle">
        Tell us a little about yourself.
      </p>

      <div className="input-group">

        <label>First Name</label>

        <input
          type="text"
          aria-label="First Name"
          placeholder="Enter first name"
          value={formData.firstName}
          className={errors.firstName ? "error-input" : ""}
          onChange={(e)=>
            handleChange("firstName",e.target.value)
          }
        />

        {errors.firstName &&

          <small className="error-text">

            {errors.firstName}

          </small>

        }

      </div>

      <div className="input-group">

        <label>Last Name</label>

        <input
          type="text"
          aria-label="Last Name"
          placeholder="Enter last name"
          value={formData.lastName}
          className={errors.lastName ? "error-input" : ""}
          onChange={(e)=>
            handleChange("lastName",e.target.value)
          }
        />

        {errors.lastName &&

          <small className="error-text">

            {errors.lastName}

          </small>

        }

      </div>

      <div className="input-group">

        <label>Age</label>

        <input
          type="number"
          aria-label="Age"
          placeholder="Enter age"
          value={formData.age}
          className={errors.age ? "error-input" : ""}
          onChange={(e)=>
            handleChange("age",e.target.value)
          }
        />

        {errors.age &&

          <small className="error-text">

            {errors.age}

          </small>

        }

      </div>

      <div className="button-group">

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

export default PersonalInfo;