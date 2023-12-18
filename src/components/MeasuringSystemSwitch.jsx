export default function MeasuringSystemSwitch({ measuringSystem, onMeasuringSystemChange }) {
  return (
    <div>
      <label>
        <input
          type="radio"
          name="measuringSystem"
          value={measuringSystem}
          id="metric"
          checked={measuringSystem === 'metric'}
          onChange={() => onMeasuringSystemChange('metric')}
        />
        Metric
      </label>
      <label>
        <input
          type="radio"
          name="measuringSystem"
          value={measuringSystem}
          id="imperial"
          checked={measuringSystem === 'imperial'}
          onChange={() => onMeasuringSystemChange('imperial')}
        />
        Imperial
      </label>
    </div>
  );
}