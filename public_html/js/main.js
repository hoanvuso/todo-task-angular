var app = angular.module('myApp', []);
app.controller('todoCtrl', function ($scope) {
  $scope.todoList = [{text: 'Task one', IsCompleted: false}];
  $scope.isSelectAll = false;
  $scope.addList = function () {
    $scope.todoList.push({text: $scope.todoItem, IsCompleted: false});
    $scope.todoItem = "";
  };
  $scope.selectAll = function () {
    var status = $scope.isSelectAll;
    console.log('status',status); 
    angular.forEach($scope.todoList, function (item) {
      item.IsCompleted = status;
    });

  };
  
  $scope.removeSelected = function () {
    var oldList = $scope.todoList;
    $scope.todoList = [];
    angular.forEach(oldList, function (x) {
      if (!x.IsCompleted)
        $scope.todoList.push(x);
    });
  }
  
  $scope.onSelected = function () {
    $scope.isSelectAll = $scope.todoList.every(function (item) {
      return item.IsCompleted;
    });
    console.log(' $scope.isSelectAll', $scope.isSelectAll);
  }
  
  $scope.optionToggled = function () {
    $scope.isAllSelected = $scope.options.every(function (itm) {
      return itm.selected;
    })
  }
  $scope.remove = function () {
    var oldList = $scope.todoList;
    $scope.todoList = [];
    angular.forEach(oldList, function (item) {
      if (!item.IsCompleted)
        $scope.todoList.push(item);
    });
  };
});