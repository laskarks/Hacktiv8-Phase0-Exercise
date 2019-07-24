function cardGame(players) {
    if (players.length < 4) {
        return 'Jumlah pemain kurang dari 4 orang, permainan tidak bisa dilakukan!!'
    } else if (players.length > 4) {
        return 'Jumlah pemain lebihdari 4 orang, permaina berjalan jika pemain berjumlah 4 orang'
    } else {
        let card = {
            no: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'As'],
            type: ['Diamonds', 'Clubs', 'Hearts', 'Spades']
        }

        //MENYUSUN DECK KARTU
        let deckCard = [];
        const deckPoin = [];
        for (let i = 0; i < card.no.length; i++) {
            for (let j = 0; j < card.type.length; j++) {
                let temp = [];
                temp.push(card.no[i]);
                temp.push(card.type[j]);
                deckCard.push(temp)
                deckPoin.push(temp)
            }
        } //end loop i

        //MEMBAGI KARTU --------------------------------------->
        let playerCards = [];
        let playerCardPoin = [];
        let sumCards = deckPoin.length / players.length

        while (deckCard.length > 0) {
            let temp = [];
            let temp2 = [];
            for (let i = 0; i < sumCards; i++) {
                let num = Math.floor(Math.random() * deckCard.length);
                temp.push(deckCard[num]);
                let count = 0;
                let tes = 0;
                for (let x = 0; x < deckPoin.length; x++) {
                    tes++
                    if (deckCard[num] === deckPoin[x]) {
                        count += tes;
                    }
                }
                temp2.push(count)
                deckCard.splice(num, 1)
            } //end loop i
            //MENYUSUN KARTU ASCENDING;
            for (let j = 0; j < temp2.length; j++) {
                for (let k = 0; k < temp2.length; k++) {
                    if (temp2[k] > temp2[k + 1]) {
                        let rek = temp2[k];
                        temp2[k] = temp2[k + 1];
                        temp2[k + 1] = rek;
                        let rek2 = temp[k];
                        temp[k] = temp[k + 1];
                        temp[k + 1] = rek2
                    }
                }
            }
            playerCards.push(temp)
            playerCardPoin.push(temp2)
        } //end of while 
        return playerCards;
    } //end else
} //end of function

console.log(cardGame(['himmel', 'heinrich', 'hansel', 'gretel']));
console.log(cardGame(['andi', 'budi']));
console.log(cardGame(['andi', 'budi', 'rudi', 'anna', 'anton']))


// let arr = ['spiderman','venom','Dr.Octopus','superman','batman','wonderwoman'];

// let arr1 = [];

// let s = arr.length

// while (arr.length > 0) {

//     let num = Math.floor(Math.random()*arr.length);
//     arr1.push(arr[num]);
//     arr.splice(num,1)

// }


// console.log(arr1)