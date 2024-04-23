// Define constants for the initial state and parameters
const PI = 3.1415; // Approximation of PI
const radius = 5; // Radius of the circular area in meters
const minSpacePerPlant = 0.8; // Minimum space required per plant in square meters
let plantCount = 20; // Initial number of plants
const maxCapacity = PI * radius * radius / minSpacePerPlant; // Maximum capacity of the garden

// Function to predict plant growth after a specific number of weeks
function predictPlantGrowth(weeks) {
    // Calculate the predicted number of plants after the given number of weeks
    const predictedPlants = plantCount * Math.pow(2, weeks);
    return predictedPlants;
}

// Function to make decisions based on predicted plant growth
function makeDecision(predictedPlants) {
    // Calculate the percentage of the maximum capacity of the garden
    const percentageCapacity = (predictedPlants / maxCapacity) * 100;

    // Decision making based on the percentage of capacity
    if (percentageCapacity > 80) {
        return "Prune"; // Prune if plant count exceeds 80% of maximum capacity
    } else if (percentageCapacity >= 50 && percentageCapacity <= 80) {
        return "Monitor"; // Monitor if plant count is between 50% and 80% of maximum capacity
    } else {
        return "Plant"; // Plant if there is room for more plants
    }
}

// Calculate and log the results for 1, 2, and 3 weeks of growth
for (let i = 1; i <= 3; i++) {
    // Predict plant growth after the current number of weeks
    const predictedPlants = predictPlantGrowth(i);

    // Make a decision based on predicted plant growth
    const decision = makeDecision(predictedPlants);

    // Log the results
    console.log(`After ${i} week(s) of growth:`);
    console.log(`Predicted number of plants: ${predictedPlants}`);
    console.log(`Decision: ${decision}`);
    console.log("---------------------------------------------");
}
