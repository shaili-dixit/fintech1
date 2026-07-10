function Review({
  data,
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

          <strong>{data.firstName}</strong>

        </div>

        <div className="review-item">

          <span>Last Name</span>

          <strong>{data.lastName}</strong>

        </div>

        <div className="review-item">

          <span>Age</span>

          <strong>{data.age}</strong>

        </div>

        <div className="review-item">

          <span>Email</span>

          <strong>{data.email}</strong>

        </div>

        <div className="review-item">

          <span>Password</span>

          <strong>{"•".repeat(data.password?.length || 0)}</strong>

        </div>

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