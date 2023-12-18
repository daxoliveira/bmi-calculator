import { classifyWeight, calculateIdealWeightRange, displayResult } from '../utils/bmiCalculations';

export default function WeightCalculatorService(height, bmi, measurementSystem) {
  const weightClassification = classifyWeight(bmi);
  const { lowerWeight, upperWeight } = calculateIdealWeightRange(height, bmi, measurementSystem);

  displayResult(weightClassification, lowerWeight, upperWeight, measurementSystem);
}
