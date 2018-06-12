

angular.module("PubCrawler").config(function ($routeProvider) {
    /**
     * Configure all Angular application routes here
     */
    $routeProvider.
        when ('/', {
            templateUrl: "app/main/partials/main.html",
            controller: "MainCtrl"
        })
        // .when('/game', {
        //     templateUrl: "app/game/partials/game.html",
        //     controller: "GameCtrl",
        //     resolve: { isAuth }
        // })
        .otherwise('/')
})