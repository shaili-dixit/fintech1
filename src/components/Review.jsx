function Review({
  formData,
  prevStep,
  handleSubmit,
}) {

  return (

    <div className="card">

      <h1>Review & Submit</h1>

      <p className="subtitle">
        Please review your information before submitting.
      </p>

      <div className="review-container">

        <div className="review-item">
          <span>First Name</span>
          <strong>{formData.firstName}</strong>
        </div>

        <div className="review-item">
          <span>Last Name</span>
          <strong>{formData.lastName}</strong>
        </div>

        <div className="review-item">
          <span>Age</span>
          <strong>{formData.age}</strong>
        </div>

        <div className="review-item">
          <span>Email</span>
          <strong>{formData.email}</strong>
        </div>

        <div className="review-item">
          <span>Password</span>
          <strong>{"•".repeat(formData.password.length)}</strong>
        </div>

      </div>

      <div className="button-group between">

        <button
          className="back-btn"
          onClick={prevStep}
        >
          ← Back
        </button>

        <button
          className="submit-btn"
          onClick={handleSubmit}
        >
          ✔ Submit
        </button>

      </div>

    </div>

  );

}

export default Review;