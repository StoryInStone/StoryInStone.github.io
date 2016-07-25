var app = angular.module('WeixinMenuApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'md.data.table'])

.config(['$mdThemingProvider', function($mdThemingProvider) {
  'use strict';

  $mdThemingProvider.theme('default')
    .primaryPalette('blue');
}]);

app.controller('MenuController', ['$mdEditDialog', '$q', '$scope', '$timeout', '$http', function($mdEditDialog, $q, $scope, $timeout, $http) {
  'use strict';

  $scope.selected = [];
  $scope.limitOptions = [5, 10, 15];

  $scope.options = {
    rowSelection: true,
    multiSelect: false,
    autoSelect: true,
    decapitate: false,
    largeEditDialog: false,
    boundaryLinks: false,
    limitSelect: true,
    pageSelect: true
  };

  $scope.query = {
    order: 'level',
    limit: 50,
    page: 1
  };

  $scope.desserts = {
    "data": []
  };

  $scope.editUrl = function(event, dessert) {
    var editDialog = {
      modelValue: dessert.url,
      placeholder: 'http://',
      save: function(input) {
        if (input.$modelValue == null) {
          input.$invalid = true;
          return $q.reject();
        }
        dessert.url = input.$modelValue;
      },
      targetEvent: event,
      title: '填写菜单跳转Url',
      validators: {
        'md-maxlength': 30
      }
    };
    var promise;
    promise = $mdEditDialog.large(editDialog);
    promise.then(function(ctrl) {
      var input = ctrl.getInput();
      input.$viewChangeListeners.push(function() {
        input.$setValidity('test', input.$modelValue !== 'test');
      });
    });
  };

  $scope.editKey = function(event, dessert) {
    var editDialog = {
      modelValue: dessert.key,
      placeholder: 'key',
      save: function(input) {
        if (input.$modelValue == null) {
          input.$invalid = true;
          return $q.reject();
        }
        dessert.key = input.$modelValue;
      },
      targetEvent: event,
      title: '填写菜单Key值',
      validators: {
        'md-maxlength': 30
      }
    };
    var promise;
    promise = $mdEditDialog.large(editDialog);
    promise.then(function(ctrl) {
      var input = ctrl.getInput();
      input.$viewChangeListeners.push(function() {
        input.$setValidity('test', input.$modelValue !== 'test');
      });
    });
  };

  $scope.editName = function(event, dessert) {
    var editDialog = {
      modelValue: dessert.name,
      placeholder: '请填写菜单名称',
      save: function(input) {
        if (input.$modelValue == null) {
          input.$invalid = true;
          return $q.reject();
        }
        dessert.name = input.$modelValue;
      },
      targetEvent: event,
      title: '菜单名称',
      validators: {
        'md-maxlength': 30
      }
    };
    var promise;
    promise = $mdEditDialog.large(editDialog);
    promise.then(function(ctrl) {
      var input = ctrl.getInput();
      input.$viewChangeListeners.push(function() {
        input.$setValidity('test', input.$modelValue !== 'test');
      });
    });
  };

  $scope.editMediaId = function(event, dessert) {
    var editDialog = {
      modelValue: dessert.mediaId,
      placeholder: 'mediaId',
      save: function(input) {
        if (input.$modelValue == null) {
          input.$invalid = true;
          return $q.reject();
        }
        dessert.mediaId = input.$modelValue;
      },
      targetEvent: event,
      title: '填写多媒体Id',
      validators: {
        'md-maxlength': 30
      }
    };
    var promise;
    promise = $mdEditDialog.large(editDialog);
    promise.then(function(ctrl) {
      var input = ctrl.getInput();
      input.$viewChangeListeners.push(function() {
        input.$setValidity('test', input.$modelValue !== 'test');
      });
    });
  };

  $scope.toggleLimitOptions = function() {
    $scope.limitOptions = $scope.limitOptions ? undefined : [5, 10, 15];
  };

  $scope.getTypes = function() {
    return ['Candy', 'Ice cream', 'Other', 'Pastry'];
  };

  $scope.fathers = [];

  $scope.loadStuff = function() {
    $scope.promise = $timeout(function() {
      var res = $http.get("http://139.129.22.161/get_menu.php");
      res.success(function(data) {
        console.log(JSON.stringify(data));
        $scope.desserts = {
          "data": []
        };
        var buttons = data.menu["button"];
        for (var i = 0; i < buttons.length; i++) {
          var button = {
            "level": "一级菜单",
            "father": "",
            "name": buttons[i].name,
            "type": "",
            "url": "",
            "key": "",
            "mediaId": ""
          };
          $scope.desserts.data.push(button);
          $scope.fathers.push(buttons[i].name);
          for (var j = 0; j < buttons[i]["sub_button"].length; j++) {
            var sub_button = {};
            if (buttons[i]["sub_button"][j].type === "click") {
              sub_button = {
                "level": "二级菜单",
                "father": buttons[i].name,
                "name": buttons[i]["sub_button"][j].name,
                "type": "点击推事件",
                "key": buttons[i]["sub_button"][j].key
              }
            } else if (buttons[i]["sub_button"][j].type === "view") {
              sub_button = {
                "level": "二级菜单",
                "father": buttons[i].name,
                "name": buttons[i]["sub_button"][j].name,
                "type": "跳转URL",
                "url": buttons[i]["sub_button"][j].url,
                "key": buttons[i]["sub_button"][j].key
              }
            }
            $scope.desserts.data.push(sub_button);
          }
        }
        console.log(JSON.stringify($scope.desserts));
      });
    }, 2000);
  }

  $scope.logItem = function(item) {
    console.log(item.name, 'was selected');
  };

  $scope.logOrder = function(order) {
    console.log('order: ', order);
  };

  $scope.logPagination = function(page, limit) {
    console.log('page: ', page);
    console.log('limit: ', limit);
  };

  $scope.remove = function() {
    if ($scope.selected.length > 0) {
      var index = $scope.desserts.data.indexOf($scope.selected[0]);
      $scope.desserts.data.splice(index, 1);
    }
  };

  $scope.add = function() {
    var data = $scope.desserts.data;
    var button = $scope.button;
    if (button.name.length > 0) {
      if (button.level === "一级菜单") {
        $scope.fathers.push(button.name);
      }
      data.push(button);
      $scope.button = {};
    } else {
      alert("新增的菜单按钮有误");
    }

  };

  $scope.confirm = function() {
    var data = {
      "button": []
    };
    var buttons = $scope.desserts.data;
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i].level === "一级菜单") {
        var button = {
          "name": buttons[i].name,
          "type": "click",
          "key": buttons[i].key,
          "url": buttons[i].url,
          "media_id": buttons[i].mediaId,
          "sub_button": []
        };
        data["button"].push(button);
      }
    }
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i].level === "二级菜单") {
        for (var j = 0; j < data["button"].length; j++) {
          if (data["button"][j].name === buttons[i].father) {
            var sub_button = {};
            if (buttons[i].type === "点击推事件") {
              sub_button = {
                "type": "click",
                "name": buttons[i].name,
                "key": buttons[i].key
              }
            } else if (buttons[i].type === "跳转URL") {
              sub_button = {
                "type": "view",
                "name": buttons[i].name,
                "url": buttons[i].url
              }
            } else if (buttons[i].type === "扫码推事件") {
              sub_button = {
                "type": "scancode_waitmsg",
                "name": buttons[i].name,
                "url": buttons[i].url
              }
            }
            data["button"][j]["sub_button"].push(sub_button);
          }
        }
      }
    }
    console.log(JSON.stringify(data));
    var res = $http.get("http://139.129.22.161/create_menu.php?menu=" + JSON.stringify(data));
    res.success(function(data) {
      var errmsg = data;
      if (errmsg === "ok") {
        alert("微信菜单更新成功");
      } else {
        alert("微信菜单更新失败")
      }
      console.log(errmsg);
    });

  };


  $scope.button = {
    "level": "",
    "father": "",
    "name": "",
    "type": "",
    "url": "",
    "key": "",
    "mediaId": ""
  };



}]);