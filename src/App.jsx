import { useState } from 'react'

function App() {

  return (
    <>
      <form>

      <h3>
        Enter your details below
      </h3>
        <label>
          <input 
            type='radio' 
            name='metric' 
            value='metric'
            defaultChecked={true}
            />
          Metric
        </label>
        <label>
          <input 
            type='radio' 
            name='imperial' 
            value='imperial'
            />
          Imperial
        </label>

        <label>
          Height
          <input 
            type='text' 
            name='height' 
            placeholder='180'
            />
        </label>

        <label>
          Weight
          <input 
            type='text' 
            name='weight' 
            placeholder='80'
            />
        </label>

        <div>
          <h4>Your BMI is...</h4>
          <h3>23.4</h3>
          <p>Your BMI suggests you're a healthy weight. Your ideal weight is between <strong>63.3kgs - 85.2kgs</strong>.</p>
        </div>

      </form>
    </>
  )
}

export default App
