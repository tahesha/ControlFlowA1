// Function to calculate additional space required if starting with a different number of plants
function calculateAdditionalSpace(startingPlants, weeks) {
    // Predict the number of plants after the given number of weeks
    const predictedPlants = startingPlants * Math.pow(2, weeks);
    
    // Calculate the additional space required
    const additionalSpace = Math.max(0, (predictedPlants * minSpacePerPlant) - (PI * radius * radius));
    
    return additionalSpace;
}

// Function to calculate the radius of the expanded garden if space remained circular
function calculateExpandedRadius(additionalSpace) {
    // Calculate the area of the expanded garden
    const expandedArea = PI * (radius * radius + additionalSpace);
    
    // Calculate the radius of the expanded garden
    const expandedRadius = Math.sqrt(expandedArea / PI);
    
    return expandedRadius;
}

// Wrap the code in a try-catch block for error handling
try {
    // Calculate additional space required if starting with 100 plants and not pruning for 10 weeks
    const additionalSpaceRequired = calculateAdditionalSpace(100, 10);

    // Check if the additional space required exceeds the available space
    if (additionalSpaceRequired > (PI * radius * radius)) {
        throw new Error("Not enough space available to accommodate the plants.");
    }

    // Calculate the radius of the expanded garden if space remained circular
    const expandedRadius = calculateExpandedRadius(additionalSpaceRequired);

    // Log the results
    console.log(`Additional space required after 10 weeks with 100 plants: ${additionalSpaceRequired} square meters`);
    console.log(`Radius of the expanded garden: ${expandedRadius.toFixed(2)} meters`);
} catch (error) {
    // Handle the error
    console.error("Error:", error.message);
}
