var app = angular.module('WeixinMenuApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'md.data.table'])

.config(['$mdThemingProvider', function($mdThemingProvider) {
  'use strict';

  $mdThemingProvider.theme('default')
    .primaryPalette('blue');
}]);

app.controller('MenuController', ['$mdEditDialog', '$q', '$scope', '$timeout', function($mdEditDialog, $q, $scope, $timeout) {
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
    "data": [{
      "level": "一级菜单",
      "father": "",
      "name": "菜单1",
      "type": "点击推事件",
      "url": "http://",
      "key": "menu_key",
      "mediaId": "mediaId"
    }, {
      "level": "二级菜单",
      "father": "菜单1",
      "name": "菜单2",
      "type": "点击推事件",
      "url": "http://",
      "key": "menu_key",
      "mediaId": "mediaId"
    }, {
      "level": "一级菜单",
      "father": "菜单",
      "name": "菜单3",
      "type": "点击推事件",
      "url": "http://",
      "key": "menu_key",
      "mediaId": "mediaId"
    }, {
      "level": "一级菜单",
      "father": "菜",
      "name": "菜单4",
      "type": "点击推事件",
      "url": "http://",
      "key": "menu_key",
      "mediaId": "mediaId"
    }]
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

  $scope.loadStuff = function() {
    $scope.promise = $timeout(function() {
      // loading
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
    var index = $scope.desserts.data.indexOf($scope.selected[0]);
    $scope.desserts.data.splice(index, 1);
  };

  $scope.add = function() {
    var data = $scope.desserts.data;
    data.push({
      "level": "一级菜单",
      "father": "菜",
      "name": "菜单",
      "type": "点击推事件",
      "url": "http://",
      "key": "menu_key",
      "mediaId": "mediaId"
    });
  };

  $scope.confirm = function() {
    var data = {"buttons": []};
    var buttons = $scope.desserts.data;
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i].level === "一级菜单") {
        var button = {"name": "debug", "sub_button": []};
        button.name = 
          data["buttons"].push(buttons[i]);
        }
      }
    }
    alert(data.buttons.length);
  };


  $scope.user = {
    title: 'Developer',
    email: 'ipsum@lorem.com',
    firstName: '',
    lastName: '',
    company: 'Google',
    address: '1600 Amphitheatre Pkwy',
    city: 'Mountain View',
    state: 'CA',
    biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
    postalCode: '94043'
  };
  $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function(state) {
    return {
      abbrev: state
    };
  });

}]);