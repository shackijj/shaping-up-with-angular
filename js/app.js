(function(){
    var app = angular.module('store', []);

    app.controller('StoreController', function() {
        this.products = gems;
    });

    app.controller('PanelController', function() {
        this.tab = 1;
        this.selectTab = function(setTab) {
            this.tab = setTab;
        };

        this.isSelected = function(tab) {
            return this.tab === tab;
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
            }]
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