const { getCircleLength, getCircleArea } = require('./calcCircle');

describe('Circle Calculations', () => {
    // 1) Test getCircleLength with radius 22
    test('getCircleLength(22) returns circle length approximately 138.2', () => {
        const length = getCircleLength(22);
        expect(length).toBeCloseTo(138.2, 1); // Check to 1 decimal place
    });

    // 2) Test getCircleArea with radius 9
    test('getCircleArea(9) returns circle area approximately 254.47', () => {
        const area = getCircleArea(9);
        expect(area).toBeCloseTo(254.47, 2); // Check to 2 decimal places
    });

    // 3) Test getCircleLength with no argument
    test('getCircleLength() with no argument returns NaN', () => {
        const length = getCircleLength();
        expect(length).toBeNaN(); // Expect NaN when no radius is provided
    });

    // 4) Test getCircleArea with no argument
    test('getCircleArea() with no argument returns NaN', () => {
        const area = getCircleArea();
        expect(area).toBeNaN(); // Expect NaN when no radius is provided
    });
});