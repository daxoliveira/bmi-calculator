
// Step 1: Create a function that calculates BMI based on metric units
export function bmiMetric(weight, height) {
  let bmi = (weight / height / height) * 10000;
  bmi = bmi.toFixed(1);
  return bmi;
}

// Step 2: Create a function that calculates BMI based on imperial units
export function bmiImperial(stones, pounds, feet, inches) {
let weight = (stones * 14) + pounds;
let height = (feet * 12) + inches;
let bmi = (weight / (height * height)) * 703;
bmi = bmi.toFixed(1);
return bmi;
}

// Step 3: Create a function that classifies BMI
export function classifyBMI(bmi) {
  if (bmi < 18.5) {
    return 'underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return 'a healthy weight';
  } else if (bmi >= 25 && bmi <= 29.9) {
    return 'overweight';
  } else {
    return 'obese';
  }
}

// Step 4: Create a function that calculates ideal weight range
export function calculateWeightRange(height, measurementSystem) {
  let lowerWeight, upperWeight;

  if (measurementSystem === 'imperial') {
    const heightInInches = height.feet * 12 + height.inches;
    lowerWeight = (18.5 * (heightInInches * heightInInches) / 703).toFixed(1);
    upperWeight = (24.9 * (heightInInches * heightInInches) / 703).toFixed(1);
  } else if (measurementSystem === 'metric') {
    const heightInMeters = height / 100;
    lowerWeight = (18.5 * (heightInMeters * heightInMeters)).toFixed(1);
    upperWeight = (24.9 * (heightInMeters * heightInMeters)).toFixed(1);
  } else {
    throw new Error('Invalid unit. Use "imperial" or "metric".');
  }

  return { lowerWeight, upperWeight };
}

// Step 5: Create a function that converts pounds to stones and pounds
export function convertPoundsToStonesAndPounds(weightInPounds) {
  const stones = Math.floor(weightInPounds / 14);
  const remainingPounds = Math.round(weightInPounds % 14);
  return { stones, remainingPounds };
}

// Step 6: Create a function that displays the result
export function displayResult(weightClassification, lowerWeight, upperWeight, measurementSystem) {
  if (measurementSystem === 'imperial') {
    const lowerStonesAndPounds = convertPoundsToStonesAndPounds(lowerWeight);
    const upperStonesAndPounds = convertPoundsToStonesAndPounds(upperWeight);
    console.log(`Your BMI suggests you’re ${weightClassification}. Your ideal weight range is between ${lowerStonesAndPounds.stones}st ${lowerStonesAndPounds.remainingPounds}lbs - ${upperStonesAndPounds.stones}st ${upperStonesAndPounds.remainingPounds}lbs.`);
  } else if (measurementSystem === 'metric') {
    console.log(`Your BMI suggests you’re ${weightClassification}. Your ideal weight range is between ${lowerWeight}kgs - ${upperWeight}kgs.`);
  }
}


