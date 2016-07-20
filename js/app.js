(function(){
    var app = angular.module('store', []);

    app.controller('StoreController', function() {
        this.products = gems;
    });

    app.controller('PanelController', function() {

    });

    app.controller('ReviewController', function() {
        this.review = {};

        this.addReview = function(product) {
            product.reviews.push(this.review);
            this.review = {};
        }
    });

    app.directive('productTitle', function() {
        return {
            restrict: 'E',
            templateUrl: 'product-title.html'
        };
    });


    app.directive('productPanels', function() {
        return {
            restrict: 'E',
            templateUrl: 'product-panels.html',
            controller: function(){
                this.tab = 1;
                this.selectTab = function(setTab) {
                    this.tab = setTab;
                };

                this.isSelected = function(tab) {
                    return this.tab === tab;
                }
            },
            controllerAs: 'panel'
        };
    });

    var gems = [
        {
            name: 'Ruby',
            price: 2,
            description: 'Magic ruby',
            canPurchase: true,
            soldOut: false,
            images : [{
                full: 'img/ruby.png',
                thumb: 'dodecahedron-thumb.jpeg',
            }],
            reviews: [
                {
                    stars: 5,
                    body: "I love that product",
                    author: "joe@thomas.com"
                },
                {
                    stars: 2,
                    body: "I hate that product",
                    author: "tim@haiter.com"
                }
            ]
        },
        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description: '. . . ',
            canPurchase: true,
            soldOut: false
        },
    ];
}());