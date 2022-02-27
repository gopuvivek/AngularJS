(function(){
    'use strict';
    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService)
    {
        var tbc = this;
        tbc.items = ShoppingListCheckOffService.getItemsToBuy();
        tbc.buyItem = function(itemIndex){
            ShoppingListCheckOffService.checkOff(itemIndex);
        }
    };

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService)
    {
        var abc = this;
        abc.items = ShoppingListCheckOffService.geItemsBought();
    };

    function ShoppingListCheckOffService()
    {
        var service = this;

        var itemsToBuy = [
                { name: "Cookies", quantity: 10 },
                { name: "Cakes", quantity: 7 },
                { name: "Chips", quantity: 5 },
                { name: "Soft Drinks", quantity: 3 },
                { name: "Water Bottles", quantity: 4 }
            ];
        
        var itemsBought = [];
        
        service.checkOff = function(itemIndex){
            itemsBought.push(itemsToBuy[itemIndex]);
            itemsToBuy.splice(itemIndex, 1);
        }

        service.getItemsToBuy = function(){
            return itemsToBuy;
        }

        service.geItemsBought = function(){
            return itemsBought;
        }
    }

})();