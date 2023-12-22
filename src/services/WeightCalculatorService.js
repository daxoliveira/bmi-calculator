import { classifyBMI, calculateIdealWeightRange, displayResult } from '../utils/bmiCalculations';

export default function WeightCalculatorService(height, bmi, measurementSystem) {
  const weightClassification = classifyBMI(bmi);
  const { lowerWeight, upperWeight } = calculateIdealWeightRange(height, measurementSystem);

  displayResult(weightClassification, lowerWeight, upperWeight, measurementSystem);
}
