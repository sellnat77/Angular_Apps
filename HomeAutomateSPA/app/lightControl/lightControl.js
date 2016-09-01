'use strict';

angular.module('myApp.lightControl', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/lightControl', {
    templateUrl: 'lightControl/lightControl.html',
    controller: 'LightControlCtrl'
  });
}])

.controller('LightControlCtrl', function( $scope, $http ) {
  $scope.message = 'Light CONTROLLAH';

  var config = {headers:  {
        'Authorization': 'Bearer c6f6683521a6d018065bf35105cada5b9af67b94878fd4c9b7bc0e47530f50c7'
    }
  };

  var postData = {
    color: 'green',
    period: '5.0',
    cycles: '20.0',
    power_on: 'true'
  };

  $scope.listLights = function(listConfig) {
    doVerb("get","https://api.lifx.com/v1/lights/all",'',listConfig)
  }

  $scope.resetLight = function(resetConfig) {
    postData = {
      color: 'white',
      brightness: '0.75',
      power_on: 'true'
    };
    doVerb("put","https://api.lifx.com/v1/lights/all/state",postData,resetConfig);
  }

  $scope.togglePower = function(toggleConfig) {
    doVerb("post","https://api.lifx.com/v1/lights/all/toggle",'',toggleConfig);
  }

  $scope.breathe = function(breathePost,breatheConfig) {
    doVerb("post","https://api.lifx.com/v1/lights/all/effects/breathe",breathePost,breatheConfig);
  }

  $scope.pulse = function(pulsePost,pulseConfig) {
    doVerb("post","https://api.lifx.com/v1/lights/all/effects/pulse",pulsePost,pulseConfig);
  }

  $scope.listScenes = function(listSceneConfig) {
    doVerb("get","https://api.lifx.com/v1/scenes",'',listSceneConfig);
  }

  $scope.startScene = function(scene,strtSceneConfig) {
    doVerb("put","https://api.lifx.com/v1/scenes/scene_id:"+scene+"/activate",'',strtSceneConfig);
  }

  $scope.update = function(light)
  {
    var postData = {
      color: light.color,
      from_color: light.fromcolor,
      period: light.period,
      cycles: light.cycles,
      peak: light.peak
      //power_on: light.powerOn
    };

    var config = {headers:  {
          'Authorization': 'Bearer '+ light.auth
      }
    };


    switch (light.func) {
        case "ListLights":
            $scope.listLights(config);
            break;
        case "Reset":
            $scope.resetLight(config);
            break;
        case "TogglePower":
            $scope.togglePower(config);
            break;
        case "Breathe":
            $scope.breathe(postData,config);
            break;
        case "Pulse":
            $scope.pulse(postData,config);
            break;
        case "ListScenes":
            $scope.listScenes(config);
            break;
        case "ActivateScene":
            $scope.startScene(postData,config);
            break;
        default:
            $scope.resetLight(config);
    }


    //doVerb("post","https://api.lifx.com/v1/lights/all/effects/breathe",postData,config);
  }

  function doVerb(verb, url, dataArr, configArr)
  {
    if(verb === "get")
    {
      $http.get(url,configArr)
      .then(function(response){ $scope.jsonResp = response.data; });
    }
    else if(verb === "post")
    {
      $http.post(url,dataArr,configArr);
    }
    else if(verb === "put")
    {
      $http.put(url,dataArr,configArr);
    }
  }

});
