import { useState } from 'react';
import './ImperialForm.css';

export default function ImperialForm({
  height,
  weight,
  onHeightChangeImperial,
  onWeightChangeImperial,
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
        <div>
          <div className={`input-container ${submitted ? 'submitted' : ''}`}>
            <input
              type="text"
              name="feet"
              placeholder="5 ft"
              value={height.feet}
              onChange={(e) => onHeightChangeImperial({ ...height, feet: e.target.value })}
              />
              <span>ft</span>
          </div>
          <div className={`input-container ${submitted ? 'submitted' : ''}`}>
            <input
              type="text"
              name="inches"
              placeholder="11 in"
              value={height.inches}
              onChange={(e) => onHeightChangeImperial({ ...height, inches: e.target.value })}
              />
            <span>in</span>
          </div>
        </div>
      </label>

      <label>
        Weight
        <div className={`input-container ${submitted ? 'submitted' : ''}`}>
          <input
            type="text"
            name="stones"
            placeholder="11 st"
            value={weight.stones}
            onChange={(e) => onWeightChangeImperial({ ...weight, stones: e.target.value })}
          />
            <span>st</span>
        </div>
        <div className={`input-container ${submitted ? 'submitted' : ''}`}>
          <input
            type="text"
            name="pounds"
            placeholder="4 lbs"
            value={weight.pounds}
            onChange={(e) => onWeightChangeImperial({ ...weight, pounds: e.target.value })}
            onKeyDown={handleKeyDown}
          />
          <span>lbs</span>
        </div>
      </label>
    </form>
  );
}
