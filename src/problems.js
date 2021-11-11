// A function that converts farenheit to celcius
// Formula: (32 °F − 32) × 5/9 = 0 °C

const farenheit = [500, 222, 320];
const getCelcius = (arrayWithTemperatures) => {
    try {
        return arrayWithTemperatures.map(value => `${(value - 32) * 5/9} °C`);
    } catch (error) {
        throw error;
    };
};    


console.log(getCelcius(farenheit));