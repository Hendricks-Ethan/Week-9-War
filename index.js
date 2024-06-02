//   Making the card game War!

const suits = ['S-', 'C-', 'H-', 'D-'];
const cards = ['2', '3', '4', '5', '6', '7', '8', '9','10', 'Jack', 'Queen', 'King', 'Ace'];
const deck = [];
const shuffledDeck = makeDeck(suits, cards);
const player1Deck = [];
var player1Points = 0;
const player2Deck = [];
var player2Points = 0;

/*
    This is my function that has a for loop nested inside another for loop to
    iterate all cards through each suit to build the deck.

    Inside the nested for loop I used 2 initializing variables to decalre
    objects inside the array. One for the card itself and one for the value
    of the card so the game will know the face value of each card.
*/

function makeDeck (a, b) {
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0, v = 2; j < cards.length; j++, v++) {
            deck.push({card: suits[i] + cards[j], value: v});
        }
    }
    return deck;
}

//   These are 2 functions are used to shuffle the deck.

function shuffle(a) {
    return Math.floor(Math.random() * Math.floor(a));
}

deck.sort(function () {
    return shuffle(deck.length) - shuffle(deck.length);
});

//   This function is used to deal the cards to each player.


function dealCards () {
    for (let i = 0; i < deck.length; i++) {
        if (i % 2 == 0) {
            player1Deck.push(deck[i]);
        } else {
            player2Deck.push(deck[i]);
        }
    }
}

/*
    This fuction is used to go through each player's hand and essentially play one
    card at a time using a for loop. It then uses an if/else statement to know
    which player to award the point to bby reading the value of the card from
    the value property of the object/card.
*/

function playGame (a, b) {
    for (let i = 0; i < player1Deck.length; i++) {
        if (player1Deck[i].value > player2Deck[i].value) {
            player1Points += 1;
        } else if (player1Deck[i].value < player2Deck[i].value) {
            player2Points += 1;
        }
    }
    return console.log('Player 1 won ' + player1Points + ' rounds.' + '\n' +
        'Player 2 won ' + player2Points + ' rounds.');
}

//   This funciton just says who has the most points after the game is over.
//   Or if there is a tie.

function gameResult () {
    if (player1Points > player2Points) {
        return console.log('Player 1 Wins!');
    } else if (player1Points < player2Points) {
        return console.log('Player 2 Wins!');
    } else  if (player1Points == player2Points) {
        return console.log("It's a Tie!");
    }
}

//   Calling the functions.
//   These console.logs here commented out were used to test the functions as I wrote the code.

dealCards(shuffledDeck);
// console.log(shuffledDeck);
// console.log(player1Deck);
// console.log(player2Deck);
playGame(player1Deck, player2Deck);
gameResult();