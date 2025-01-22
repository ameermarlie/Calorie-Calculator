function calculateCalories() {
  // Get input values
  const age = parseInt(document.getElementById('age').value);
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const activity = parseFloat(document.getElementById('activity').value);

  // Validate inputs
  if (!age || !weight || !height) {
    alert('Please fill in all fields');
    return;
  }

  // Calculate BMR using Mifflin-St Jeor Equation
  let bmr;
  if (gender === 'male') {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  // Calculate maintenance calories
  const maintenanceCalories = Math.round(bmr * activity);
  
  // Calculate weight loss calories (20% deficit)
  const weightLossCalories = Math.round(maintenanceCalories * 0.8);
  
  // Calculate weight gain calories (15% surplus)
  const weightGainCalories = Math.round(maintenanceCalories * 1.15);

  // Update results
  document.getElementById('maintenance-calories').textContent = maintenanceCalories;
  document.getElementById('weight-loss-calories').textContent = weightLossCalories;
  document.getElementById('weight-gain-calories').textContent = weightGainCalories;

  // Show results
  document.getElementById('result').classList.remove('hidden');

  // Add animation
  const resultDiv = document.getElementById('result');
  resultDiv.style.animation = 'none';
  resultDiv.offsetHeight; // Trigger reflow
  resultDiv.style.animation = 'fadeIn 0.5s ease-in';
}

