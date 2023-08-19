export const findPrimeNums = function (amount) {
    let array =[];
    // Создаем перебор всех номеров, проверяя сколько в array элементов
    for (let number = 2; array.length < amount; number++) {
        if (isPrime(number)) {
            array.push(number);
        }
    }


    // Функция определения числа
    function isPrime(number) {
        // Если маленькое число, тогда берется из массива
        if (number < 10) {
            if ([2, 3, 5, 7].includes(number)) {
                return true;
            // если заканчивается не на цифру тогда значит, либо четное, либо кратное 5
            } else if (![1, 3, 7, 9].includes(number % 10)) {
                return false;
            // проверка деления на 3
            } else if ((number % 3) === 0) {
                return false;
            }
        }
        // Оставшаяся проверка простым делением на уже имеющиеся простые числа
        // Проверка только до половины числа идет
        for (const divider of array) {
            if (divider < (number / 2)) {
                if (number % divider === 0) {
                    return false;
                }
            //Если все делители сдали больше чем половина числа , считаем что все проверки пройдены
            return true;
            }
        // Здесь если совсем проверки все прошли
        return true;
        }
    }
    return array;
}