(function () {
'use strict';

angular.module('MathOperationsApp', [])
.controller('OperationsController', OperationsController)
.service('OperationsService', OperationsService);

OperationsController.$inject = ['OperationsService'];
function OperationsController(OperationsService) {
  var ops = this;

  ops.input = "";
  ops.op1 = 0;
  ops.op2 = 0;
  
  ops.performOperations = function(){
    
    ops.op1 = parseFloat(ops.input.split(',')[0]);
    ops.op2 = parseFloat(ops.input.split(',')[1]);

    OperationsService.clearOutput();
    OperationsService.calculate("add", ops.op1, ops.op2);
    OperationsService.calculate("subtract", ops.op1, ops.op2);
    OperationsService.calculate("multiply", ops.op1, ops.op2);
    OperationsService.calculate("divide", ops.op1, ops.op2);

    ops.output = OperationsService.getResults();
  }

  
};

function OperationsService() {
  var service = this;

  // List of result of each operation
  var results = [];

  service.clearOutput = function(){
    results = [];
  }

  service.calculate = function (operation, op1, op2) {
    var res = 0;
    switch(operation){
      case "add":
        res = op1+op2;
        break;
      case "subtract":
        res = op1-op2;
        break;
      case "multiply":
        res = op1*op2;
        break;
      case "divide":
        res = op1/op2;
        break;
    }
    var op = {
      operation: operation,
      op1 : op1,
      op2 : op2,
      result: res
    };
    results.push(op);
  };

  service.getResults = function () {
    return results;
  };
}

})();
