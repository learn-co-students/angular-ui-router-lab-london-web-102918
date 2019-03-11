angular
    .module('app', ['ui.router'])
    .config($stateProvider => {
      $stateProvider
        .state('user', {
          url: '/user/:id',
          templateUrl: 'views/user.html',
          controller: 'UserController as user',
          resolve: {
            user: ($http, $stateParams) => {
              return $http.get('http://0.0.0.0:8882/rest/user/' + $stateParams.id)
            }
          }
        })
    })
