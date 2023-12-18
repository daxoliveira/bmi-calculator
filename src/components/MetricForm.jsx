import { useState } from 'react';
import './MetricForm.css';

export default function MetricForm({
  height,
  weight,
  onHeightChangeMetric,
  onWeightChangeMetric,
  onBMICalculation,
}) {
  const [submitted, setSubmitted] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onBMICalculation(e.target.value);
      setSubmitted(true);
    }
  };

  return (
    <form>
      <label>
        Height
        <div className={`input-container ${submitted ? 'submitted' : ''}`}>
          <input
            type="number"
            name="height"
            placeholder="185"
            id="height"
            value={height}
            onChange={(e) => onHeightChangeMetric(e.target.value)}
          />
          <span>cm</span>
        </div>
      </label>

      <label>
        Weight
        <div className={`input-container ${submitted ? 'submitted' : ''}`}>
          <input
            type="number"
            name="weight"
            placeholder="80"
            id="weight"
            value={weight}
            onChange={(e) => onWeightChangeMetric(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <span>kg</span>
        </div>
      </label>
    </form>
  );
}
