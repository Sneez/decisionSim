angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

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


  $scope.historyBool = false;

  $scope.toggleHistory = function(){
    $scope.historyBool = !$scope.historyBool;
    console.log($scope.historyBool);
  };


  $scope.historyArray = [
    "KOL Perspectives",
    "Patient Resource Discussion",
    "Patient Resource Selection",
    "Patient Information",
    "Meet Your Patient",
    "Select Your Training",
    "Lorem Ipsum",
    "Dolor Amet",
    "Consecteteur",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20"
  ];


})

.controller('PlaylistsCtrl', function($scope) {

  $scope.data = {
    email: '',
    password: ''
  };


  $scope.resume = function(){
    console.log("Resume:");
    console.log($scope.data);
  };


  $scope.begin = function(){
    console.log("Begin:");
    console.log($scope.data);
  };









})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
