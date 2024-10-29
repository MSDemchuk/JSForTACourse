const { filterFoodPrice, food } = require('./food');

describe('filterFoodPrice function', () => {
    const min = 12;
    const max = 40;
    const filteredFood = filterFoodPrice(food, min, max);

    // 1) Test the length of the sorted array
    test('filtered array length should be 3', () => {
        expect(filteredFood.length).toBe(3);
    });

    // 2) Test if the filtered array contains { kind: 'pepper', price: 27 }
    test('filtered array contains { kind: "pepper", price: 27 }', () => {
        expect(filteredFood).toContainEqual({ kind: 'pepper', price: 27 });
    });

    // 3) Test if the filtered array contains elements at indices 2, 3, and 4 of the original food array
    test('filtered array contains 2nd, 3rd, and 4th elements of the original array', () => {
        const elements = [food[1], food[2], food[3]]; // Only items in range
        elements.forEach(element => expect(filteredFood).toContainEqual(element));
    });
    
    // 4) Test if the price of the 1st element is greater than min
    test('price of 1st element is greater than min', () => {
        expect(filteredFood[0].price).toBeGreaterThan(min);
    });

    // 5) Test if the price of the 3rd element is less than max
    test('price of 3rd element is less than max', () => {
        expect(filteredFood[2].price).toBeLessThan(max);
    });

    // 6) Test that the array does not contain { kind: 'lemon', price: 50 }
    test('filtered array does not contain { kind: "lemon", price: 50 }', () => {
        expect(filteredFood).not.toContainEqual({ kind: 'lemon', price: 50 });
    });

    // 7) Additional Tests
    // Test if the first element in the filtered array is 'bread' with price 16
    test('first element in filtered array is { kind: "bread", price: 16 }', () => {
        expect(filteredFood[0]).toEqual({ kind: 'bread', price: 16 });
    });

    // Test that all items in the filtered array have price within range
    test('all items in filtered array have price within range', () => {
        filteredFood.forEach(item => {
            expect(item.price).toBeGreaterThanOrEqual(min);
            expect(item.price).toBeLessThanOrEqual(max);
        });
    });

    // Test if the filtered array does not contain any items with price outside the specified range
    test('filtered array does not contain items with price outside range', () => {
        expect(filteredFood.every(item => item.price >= min && item.price <= max)).toBe(true);
    });
});