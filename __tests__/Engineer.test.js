const Engineer = require('../lib/Engineer');

test('An empty object gets returned', () => {
    // creates a new employee as an object
    const e = new Engineer();
    // test to see if new Employee is actually an object
    expect(typeof(e)).toBe("object");
  });

  test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer();
    expect(e.getRole()).toBe(testValue);
  });