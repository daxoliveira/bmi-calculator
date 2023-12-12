import { useState } from 'react';

export default function App() {
  const [measuringSystem, setMeasuringSystem] = useState('metric');
  function onSystemChange(e) {
    console.log(e);
    if (e.target.value === 'metric') {
      setMeasuringSystem('metric');
    }
    if (e.target.value === 'imperial') {
      setMeasuringSystem('imperial');
    }
  }

  return (
    <>
      <h3>
        Enter your details below
      </h3>
      <label>
      <input type='radio' name='measuringSystem' value='metric' onChange={onSystemChange} defaultChecked={true} />
        Metric
      </label>
      <label>
        <input type='radio' name='measuringSystem' value='imperial' onChange={onSystemChange} />
        con
        Imperial
      </label>
      {measuringSystem === 'metric' && <Metric/>}
      {measuringSystem === 'imperial' && <Imperial/>}
      <div>
        <h4>Your BMI is...</h4>
        <h3>23.4</h3>
        <p>Your BMI suggests you&apos;re a healthy weight. Your ideal weight is between <strong>63.3kgs - 85.2kgs</strong>.</p>
      </div>
    </>
  )
}

export function Metric() {
  return (
    <form>
      <label>
        Height
        <br />
        <input type='text' name='height' placeholder='185cm'/>
      </label>
      <br />
      <label>
        Weight
        <br />
        <input type='text' name='weight' placeholder='80kg'/>
      </label>
    </form>
  )
}

export function Imperial() {
  return (
    <form>
      <label>
        Height
        <br />
        <input type='text' name='feet' placeholder='5 ft' defaultValue='11'/>
        <input type='text' name='inches' placeholder='11 in' defaultValue='11'/>
      </label>
      <br />
      <label>
        Weight
        <br />
        <input type='text' name='stones' placeholder='11 st'/>
        <input type='text' name='pounds' placeholder='4 lbs'/>
      </label>
    </form>
  )
}