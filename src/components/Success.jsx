function Success() {

  const restart = () => {
    window.location.reload();
  };

  return (

    <div className="success-card">

      <div className="success-icon">

        ✔

      </div>

      <h1>Registration Successful!</h1>

      <p>

        Your account has been created successfully.

        <br />

        Thank you for completing the onboarding process.

      </p>

      <button
        className="submit-btn"
        onClick={restart}
      >
        Create Another Account
      </button>

    </div>

  );

}

export default Success;