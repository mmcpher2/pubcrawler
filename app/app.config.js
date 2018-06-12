

angular.module("RyanSays").config(function ($routeProvider) {
    /**
     * Configure all Angular application routes here
     */
    $routeProvider.
        when ('/', {
            templateUrl: "app/auth/partials/auth.html",
            controller: "AuthCtrl"
        })
        .when('/game', {
            templateUrl: "app/game/partials/game.html",
            controller: "GameCtrl",
            resolve: { isAuth }
        })
        .otherwise('/')
})