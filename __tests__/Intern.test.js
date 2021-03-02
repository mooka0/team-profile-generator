const Intern = require("../lib/Intern");

test('An empty object gets returned', () => {
    // creates a new employee as an object
    const e = new Intern();
    // test to see if new Employee is actually an object
    expect(typeof(e)).toBe("object");
  });

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern();
  expect(e.getRole()).toBe(testValue);
});
