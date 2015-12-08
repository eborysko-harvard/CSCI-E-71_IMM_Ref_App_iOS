angular.module('slacker.controllers', [])

  .controller('SlackerCtrl', function($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function() {
        $scope.closeLogin();
      }, 1000);
    };
  })

  .controller('ChannelsCtrl', function($scope) {
    var successCallback = function(channels) {
      console.log("Success");
      if (channels.length) {
        console.log("in if");
        console.log(channels[0].id);
        for (var key in channels[0])
          console.log(key);
      }
    };

    var failureCallback = function(message) {
      console.log("Failure: " + message);
    };

    $scope.getChannelList = function() {
      if (typeof Slacker === 'undefined') {
        console.log('Slacker plugin not available, in browser likely.');
      }
      else {
        Slacker.getChannelList(successCallback, failureCallback, true);
      }
    }
    /*
    $scope.channels = [
      { title: 'General', id: 1 },
      { title: 'Private', id: 2 },
      { title: 'Custom', id: 3 }
    ];
    */
  })

  .controller('ChannelCtrl', function($scope, $stateParams) {

  })

  //.controller('PostsCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
  .controller('PostsCtrl', function($scope) {
    $scope.data = {};
    $scope.data.message = "";
    $scope.data.response = "";

    var successCallback = function(message) {
      console.log("Success: " + message);
      $scope.data.response = message;
    };

    var failureCallback = function(message) {
      console.log("Failure: " + message);
    };

    $scope.postMessage = function(data){

      if (typeof Slacker === 'undefined') {
        console.log("Var Slacker not define, maybe running in web browser");
        data.response += 1;
      } else {
        // Found it we are good to go
        console.log("Var Slacker found, running in mobile app");
        Slacker.postMessage(successCallback, failureCallback, data.message);
      }

      return ;
    };

    $scope.resetMessage = function(data){
      console.log("Called Reset");
      data.message = "";
      data.response = "";
    }
    // Set Header
    //$scope.$parent.showHeader();
    //$scope.$parent.clearFabs();
    //$scope.isExpanded = false;
    //$scope.$parent.setExpanded(false);
    //$scope.$parent.setHeaderFab(false);

    // Set Motion
    /* $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
<<<<<<< HEAD
<<<<<<< HEAD
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('ChannelsCtrl', function($scope) {
  $scope.channels = [
    { title: 'General', id: 1 },
    { title: 'Private', id: 2 },
    { title: 'Custom', id: 3 }
  ];
})



//.controller('PostsCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
.controller('PostsCtrl', function($scope) {
    $scope.data = {};
    $scope.data.message = "";
    $scope.data.response = "";

    $scope.postMessage = function(data){
        console.log("Message: " + data.message);
        data.response += 1;
        return ;
    };

    $scope.resetMessage = function(data){
        console.log("Called Reset");
        data.message = "";
        data.response = "";
    }
    // Set Header
    //$scope.$parent.showHeader();
    //$scope.$parent.clearFabs();
    //$scope.isExpanded = false;
    //$scope.$parent.setExpanded(false);
    //$scope.$parent.setHeaderFab(false);

    // Set Motion
    /* $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
=======
>>>>>>> master
=======
>>>>>>> master
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();
    */

  });
