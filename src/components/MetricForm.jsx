
export default function MetricForm({ height, weight, onHeightChangeMetric, onWeightChangeMetric, onBMICalculation }) {
  return (
    <form
    
    >
      <label>
        Height
        <br />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid #ccc",
            width: "9rem",
            padding: "5px"
          }}
          >
        <input 
          type='number' 
          name='height' 
          placeholder='185cm' 
          id='height' 
          value={height}
          onChange={(e) => onHeightChangeMetric(e.target.value)}
          style={{
            border: "none",
            width: "6.25rem",
            
          }}
          />
          <strong>cm</strong>
        </div>

      </label>
      <br />
      <label>
        Weight
        <br />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid #ccc",
            width: "9rem",
            padding: "5px"
          }}
          >
        <input 
          type='number' 
          name='weight' 
          placeholder='80kg' 
          id='weight'
          value={weight}
          onChange={(e) => onWeightChangeMetric(e.target.value)}
          style={{
            border: "none",
            width: "6.25rem",
            
          }}
          onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                onBMICalculation(e.target.value);
              }
            }
          }
          />
          <strong>kg</strong>
        </div>

      </label>
    </form>
  );
}

// add this to future css
// input[type="number"] {
//  -webkit-appearance: none;
// -moz-appearance: textfield;
// }