import { useState, useEffect } from 'react';
import MeasurementSystemSwitch from './components/MeasuringSystemSwitch';
import MetricForm from './components/MetricForm';
import ImperialForm from './components/ImperialForm';
import WeightResult from './components/WeightResult';

import { 
  bmiMetric,
  bmiImperial,
  classifyBMI,
  calculateIdealWeightRange
} from './utils/bmiCalculations';

export default function App() {
  const [measuringSystem, setMeasuringSystem] = useState('metric');
  const [heightMetric, setHeightMetric] = useState(185);
  const [weightMetric, setWeightMetric] = useState(80);
  const [heightImperial, setHeightImperial] = useState({ feet: 5, inches: 11 });
  const [weightImperial, setWeightImperial] = useState({ stones: 11, pounds: 4 });
  const [bmi, setBmi] = useState(0);
  const [bmiClassification, setBmiClassification] = useState('');
  const [idealWeightRange, setIdealWeightRange] = useState({ });

  useEffect(() => {
    console.log('idealWeightRange', idealWeightRange);
  }, [idealWeightRange]); // useEffect will run whenever idealWeightRange changes

  const handleBMICalculation = () => {
    let calculatedBMI, calculatedIdealWeightRange;
  
    if (measuringSystem === 'metric') {
      calculatedBMI = bmiMetric(weightMetric, heightMetric);
      calculatedIdealWeightRange = calculateIdealWeightRange(heightMetric, measuringSystem);
    } else if (measuringSystem === 'imperial') {
      calculatedBMI = bmiImperial(weightImperial.stones, weightImperial.pounds, heightImperial.feet, heightImperial.inches);
      calculatedIdealWeightRange = calculateIdealWeightRange(heightImperial, measuringSystem);
    } else {
      throw new Error('Invalid measuring system. Use "metric" or "imperial".');
    }
  
    setBmi(calculatedBMI);
    setBmiClassification(classifyBMI(calculatedBMI));
    setIdealWeightRange(calculatedIdealWeightRange);
  };



  return (
    <>
      <h3>Enter your details below</h3>
      <MeasurementSystemSwitch 
        measuringSystem={measuringSystem} 
        onMeasuringSystemChange={setMeasuringSystem} 
      />
      {measuringSystem === 'metric' 
        && 
        <MetricForm 
          height={heightMetric} 
          weight={weightMetric} 
          onHeightChangeMetric={setHeightMetric}
          onWeightChangeMetric={setWeightMetric}
          onBMICalculation={handleBMICalculation}
        />}
      {measuringSystem === 'imperial' 
        && 
        <ImperialForm
          height={heightImperial}
          weight={weightImperial}
          onHeightChangeImperial={setHeightImperial}
          onWeightChangeImperial={setWeightImperial}
          onBMICalculation={handleBMICalculation}
        />}
      <WeightResult
        displayBMI={bmi}
        displayBMIClassification={bmiClassification}
        displayIdealWeightRange={idealWeightRange}
      />
    </>
  );
}

// *** Functionality of my Application in Metric
// Input
// Height = 185 cm
// Weight = 80 kg

// Press Enter

// Output
// Your BMI is ...
// BMI = 23.4
// Your BMI suggests you're
// BMIClassification = "a healthy weight".
// Your ideal weight is between
// idealWeight = "63.3kgs - 85.2kgs".

// *** Functionality of my Application in Imperial
// Input
// Height = 5 ft, 11 in
// Weight = 11 st, 4 lbs

// Press Enter

// Output
// Your BMI is ...
// BMI = 22.0
// Your BMI suggests you're
// BMIClassification = "a healthy weight".
// Your ideal weight is between
// idealWeight = "9st 6lbs - 12st 10lbs".