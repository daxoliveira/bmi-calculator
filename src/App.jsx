import { useState } from 'react';
import MeasurementSystemSwitch from './components/MeasuringSystemSwitch';
import MetricForm from './components/MetricForm';
import ImperialForm from './components/ImperialForm';
import WeightResult from './components/WeightResult';

import { 
  bmiMetric,
  bmiImperial,
  classifyBMI,
  calculateWeightRange,
  convertPoundsToStonesAndPounds,
  displayResult
} from './utils/bmiCalculations';

export default function App() {
  const [measuringSystem, setMeasuringSystem] = useState('metric');
  const [heightMetric, setHeightMetric] = useState(185);
  const [weightMetric, setWeightMetric] = useState(80);
  const [heightImperial, setHeightImperial] = useState({ feet: 5, inches: 11 });
  const [weightImperial, setWeightImperial] = useState({ stones: 11, pounds: 4 });
  const [bmi, setBmi] = useState(0);
  const [bmiClassification, setBmiClassification] = useState('');
  const [weightRange, setWeightRange] = useState([0, 0]);

  const handleBMICalculation = () => {
    const calculatedBMI = measuringSystem === 'metric'
      ? bmiMetric(weightMetric, heightMetric)
      : bmiImperial(weightImperial.stones, weightImperial.pounds, heightImperial.feet, heightImperial.inches);
    setBmi(calculatedBMI)
    alert(`BMI: ${calculatedBMI}`);
  }

  const handleBMIClassification = () => {
    const calculatedClassification = classifyBMI(bmi);
    setBmiClassification(calculatedClassification);
    alert(`BMI Classification: ${calculatedClassification}`);
  }

  const handleConvertPoundsToStonesAndPounds = () => {
    const convertedWeight = convertPoundsToStonesAndPounds(weightImperial);
    setWeightImperial(convertedWeight);
    alert(`Weight Imperial: ${JSON.stringify(convertedWeight)}`);
  }

  const handleWeightRange = () => {
    const calculatedWeightRange = calculateWeightRange(heightMetric, measuringSystem);
    setWeightRange(calculatedWeightRange);
    alert(`Weight Range: ${JSON.stringify(calculatedWeightRange)}`);
  }


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
        handleDisplayBMI={bmi}
        handleDisplayClassification={bmiClassification}
        handleDisplayWeightRange={weightRange}
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