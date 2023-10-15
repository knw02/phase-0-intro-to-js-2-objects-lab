let employee = {
    name: "Sam",
    age: 24,
    position: "manager"
  };
  
  let updatedEmployee = updateEmployeeWithKeyAndValue(employee, key, value)
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    let updatedEmployee = {};
  
    // Copy over the existing key-value pairs from the original employee
    for (let prop in employee) {
      updatedEmployee[prop] = employee[prop];
    }
  
    // Add or update the specified key-value pair
    updatedEmployee[key] = value;
  
    // Return the updated employee object
    return updatedEmployee;
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Update the specified key-value pair directly on the employee object
    employee[key] = value;
  
    // Return the updated employee object
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    let updatedEmployee = { ...employee };
    delete updatedEmployee[key];
    return updatedEmployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }