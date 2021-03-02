const Employee = require('../lib/Employee');

test('An empty object gets returned', () => {
    // creates a new employee as an object
    const e = new Employee();
    // test to see if new Employee is actually an object
    expect(typeof(e)).toBe("object");
  });

  test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee();
    expect(e.getRole()).toBe(testValue);
  });