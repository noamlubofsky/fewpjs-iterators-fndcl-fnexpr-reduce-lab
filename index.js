const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => {
    return accumulator + currentValue}, 0)



//const reducer = (accumulator, currentValue) => accumulator + currentValue;

//const totalBatteries = batteryBatches.reduce(reducer)


