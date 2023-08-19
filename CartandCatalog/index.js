import { createCatalog, createCart } from "./CreatecartAndCatalog.js";

const goods = [
    [1, "Рубашка белая", "Очень стильная и удобная", ["XS", "S", "M", "L", "XL", "2XL"], 49, true],
    [2, "Брюки черные", "Стильные штаны для деловых переговоров", ["S", "M", "L", "XL", "2XL"], 99, false],
    [3, "Ботинки Саламандра", "Без них не обойтись в плохую погоду", [39, 41, 42, 43, 45, 46], 19, false],
    [4, "Кроссовки спортивные", "Лучшие для бега", [37, 38, 39, 41, 44, 45], 4.9, true],
];
const catalog = createCatalog();
const cart = createCart();

let good = goods[3];

catalog.addGood(...good); // Добавим один товар в каталог

let [goodId] = good;
let catalogGood = catalog.getGood(goodId); // возьмем товар из каталога

logCatalogGood(catalogGood); // Посмотрим на него

for (let i = 0; i < goods.length - 1; i++) {
    good = goods[i];
    catalog.addGood(...good); // Добавим остальные товары в каталог
}

for (let item of goods) {
    const [id] = item;

    catalogGood = catalog.getGood(id); // возьмем товары из каталога

    logCatalogGood(catalogGood); // Посмотрим на них
}

catalogGood = catalog.getGood(3);

cart.addGood({ good: catalogGood, amount: 1 }); // Добавим один товар в корзину

let totalCalcs = cart.getTotalAmountAndTotalSumm(); // Посчитаем общее количество и общую сумму

logCartCalculations(totalCalcs); // Посмотрим на них

// Добавим еще товары в корзину и посмотрим на общее количество и общую сумму
catalogGood = catalog.getGood(4);
cart.addGood({ good: catalogGood, amount: 1 });
totalCalcs = cart.getTotalAmountAndTotalSumm();
logCartCalculations(totalCalcs);

catalogGood = catalog.getGood(1);
cart.addGood({ good: catalogGood, amount: 1 });
totalCalcs = cart.getTotalAmountAndTotalSumm();
logCartCalculations(totalCalcs);

// Удалим один товар из корзины и посмотрим на общее количество и общую сумму
cart.removeGood(4);
totalCalcs = cart.getTotalAmountAndTotalSumm();
logCartCalculations(totalCalcs);

// Очистим корзину полностью и посмотрим на общее количество и общую сумму
cart.clearCart();
totalCalcs = cart.getTotalAmountAndTotalSumm();
logCartCalculations(totalCalcs);

function logCatalogGood(catalogGood) {
    console.log(`Товар ${catalogGood.name} по цене ${catalogGood.price}`);
}

function logCartCalculations(totalCalcs) {
    console.log(
        `В корзине товаров количеством ${totalCalcs.totalAmount} на общую сумму ${totalCalcs.totalSumm}`
    );
}
