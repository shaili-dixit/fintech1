function PersonalInfo({
  formData,
  handleChange,
  nextStep,
}) {

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
          placeholder="Enter first name"
          value={formData.firstName}
          onChange={(e)=>
            handleChange("firstName",e.target.value)
          }
        />

      </div>

      <div className="input-group">

        <label>Last Name</label>

        <input
          type="text"
          placeholder="Enter last name"
          value={formData.lastName}
          onChange={(e)=>
            handleChange("lastName",e.target.value)
          }
        />

      </div>

      <div className="input-group">

        <label>Age</label>

        <input
          type="number"
          placeholder="Enter age"
          value={formData.age}
          onChange={(e)=>
            handleChange("age",e.target.value)
          }
        />

      </div>

      <div className="button-group">

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

export default PersonalInfo;