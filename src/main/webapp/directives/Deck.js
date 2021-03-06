define([],function() {//<opphand></opphand>
    return function(){
        return {
            restrict: 'E',
            replace: true,
            templateUrl: "views/deck.html",
            scope: {
              "getDeckSize":"&deckSize"
            },
            controller: function($scope) {

                console.log("New Deck.");
                $scope.data = {
                    cardsRange : new Array($scope.getDeckSize() || 0),
                    unregisterArr:[]
                };

                $scope.data.unregisterArr.push($scope.$on('reloadDeck', function() {
                    console.log("reload deck.");
                    $scope.data.cardsRange = new Array($scope.getDeckSize() || 0);
                }));
            }
        }
    }
});