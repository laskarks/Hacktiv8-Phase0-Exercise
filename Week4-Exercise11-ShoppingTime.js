function shoppingTime(memberId, money) {

    if (memberId === undefined || memberId === '') {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    } else if (money <= 50000) {
        return 'Mohon maaf, uang tidak cukup'
    } else {
        let price = [1500000, 500000, 250000, 175000, 50000];
        let stuff = ['Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone'];

        let result = {};
        result.memberId = memberId;
        result.money = money;

        let stuffList = [];
        for (let i = 0; i < price.length; i++) {
            if (money >= price[i]) {
                stuffList.push(stuff[i])
                money -= price[i]
            }
        } //end loop i
        result.listPurchased = stuffList;
        result.changeMoney = money;
        return result;
    } //end else 
} //end of function

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja