const chai = window.chai;
const expect = chai.expect;

describe('getCelcius', () => {
    it('Should convert an array of farenheit temperature values to celcius temperatures', () => {
        expect(getCelcius([500, 222, 320])).to.deep.equal(['260 °C', '105.55555555555556 °C', '160 °C'])
    });
});