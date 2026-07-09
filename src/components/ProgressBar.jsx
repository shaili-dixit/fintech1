function ProgressBar({ step }) {

  const progress = (step / 3) * 100;

  return (

    <div className="progress-container">

      <div className="progress-header">

        <h2>Create Your Account</h2>

        <span>Step {step} of 3</span>

      </div>

      <div className="progress-track">

        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>

      </div>

      <div className="step-indicator">

        <div className={step >= 1 ? "step active" : "step"}>
          1
        </div>

        <div className="line"></div>

        <div className={step >= 2 ? "step active" : "step"}>
          2
        </div>

        <div className="line"></div>

        <div className={step >= 3 ? "step active" : "step"}>
          3
        </div>

      </div>

    </div>

  );

}

export default ProgressBar;