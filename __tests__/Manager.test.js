const Manager = require('../lib/Manager');

test('An empty object gets returned', () => {
    // creates a new employee as an object
    const e = new Manager();
    // test to see if new Employee is actually an object
    expect(typeof(e)).toBe("object");
  });

  test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager();
    expect(e.getRole()).toBe(testValue);
  });