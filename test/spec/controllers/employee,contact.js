'use strict';

describe('Controller: EmployeeContactCtrl', function () {

  // load the controller's module
  beforeEach(module('employeelistApp'));

  var EmployeeContactCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EmployeeContactCtrl = $controller('EmployeeContactCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EmployeeContactCtrl.awesomeThings.length).toBe(3);
  });
});
