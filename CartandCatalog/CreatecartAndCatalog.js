function createCatalog() {
    const catalog = {};

    catalog.goods = [];
    catalog.addGood = function (id, name, description, sizes, price, available) {
        const good = {
            id: id,
            name: name,
            description: description,
            sizes: sizes,
            price: price,
            available: available,
        };
        catalog.goods.push(good);
    };
    catalog.getGood = function (id) {
        for (let good of this.goods) {
            if (good.id === id){
                return good;
            }
            return null;
        }
    }
    return catalog;
}

function createCart() {
    const cart ={};

    cart.orders = [];
    cart.addOrder = function (good, amount) {
        const order = {
            good: good,
            amount: amount,
        };
        cart.orders.push(order);
    };

    cart.removeGood = function (goodId) {
        cart.orders = cart.orders.filter(order => order.good.id !== goodId);
    };

   cart.clearBasket = function () {
        cart.orders = [];
    };

    cart.getTotalAmountAndTotalSumm = function () {
        let totalAmount = 0;
        let totalSumm = 0;

        for (const order of cart.orders) {
            totalAmount += order.amount;
            totalSumm += order.good.price * order.amount;
        }

        return {
            totalAmount: totalAmount,
            totalSumm: totalSumm,
        };
    };
    return cart;
}

export {createCatalog, createCart };