test('add 0.1 + 0.2 to equal 0.3', () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3, 5);
});

const userList = ['Nick', 'Kate', 'quest123', 'admin', 'new_user_2'];

describe('userList array tests', () => {
    // 1) Test whether the array contains the element "admin"
    test('contains the element "admin"', () => {
        expect(userList).toContain("admin");
    });

    // 2) Test whether the first element in the array is "Nick"
    test('first element is "Nick"', () => {
        expect(userList[0]).toBe("Nick");
    });

    // 3) Test whether the last element in the array is "new_user_2"
    test('last element is "new_user_2"', () => {
        expect(userList[userList.length - 1]).toBe("new_user_2");
    });

    // 4) Test the statement that the length of the array is 5
    test('array length is 5', () => {
        expect(userList.length).toBe(5);
    });

    // 5) Test the statement that the 3rd element of the array has type string
    test('3rd element is of type string', () => {
        expect(typeof userList[2]).toBe("string");
    });

    // 6) Prove the statement that the array does not have an 8th element
    test('array does not have an 8th element', () => {
        expect(userList[7]).toBeUndefined();
    });
});
