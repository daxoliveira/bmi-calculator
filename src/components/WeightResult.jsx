import './WeightResult.css';

export default function WeightResult({ displayBMI, displayBMIClassification, displayIdealWeightRange }) {
  return (
    <div className="weight-result">
      <h4>Your BMI is...</h4>
      <h3>{displayBMI}</h3>
      <p>
        Your BMI suggests you&apos;re {displayBMIClassification}.
        {displayIdealWeightRange.message}
      </p>
    </div>
  );
}
