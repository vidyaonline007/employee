'use strict';

/**
 * @ngdoc function
 * @name employeelistApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the employeelistApp
 */
angular.module('employeelistApp')
  .controller('MainCtrl', function ($scope,$http) {
  	var url="https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc"
  $http.get(url,{
  	params:{
  		q:'employee',
  		sort:updated,
  		order:desc
  	}
  }).success(function gitrepo(data,status,headers,config){
  	console.debug(data);
  	$scope.repo = data.items.[0].git_url;
  }).error(function failedgitrepo(data,status,headers,config){
  	console.error(data,status,headers,config);
  	if(status===404){
  		window.alert('Not Found');
  		}else{
  			window.alert('Unknown Error');
  		}
  });
    
   $scope.employee={
   	name:'',
   	email:''
   };
   $scope.validateName=function(){
   	if($scope.employee.name.length > 0){
   		console.debug($scope.employee.name);
   	}else{
   		window.alert('Name is Required');
   	}
   }
   $scope.validateEmail=function(){
   	if($scope.employee.email.length > 0){
   		console.debug($scope.employee.email);
   	}else{
   		window.alert("Email is Required");
   	}
   }
   $scope.closed=false;
   $scope.isValid=function(){
   	if($scope.employee.name=== ''){return false}
   	if($scope.employee.email=== ''){return false}
   		return true;
   }
   $scope.addEmployee=function(){
   	
   	$scope.employees.push(angular.copy($scope.employee));
   }
  })
 
  
