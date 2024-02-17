// Assignment of data for declared card class
const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const value = {
    "A": 1, 
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "J": 10,
    "Q": 11,
    "K": 12,
};
//Gameplay class
class gamePlay{
    constructor() {
    }

}
// Class for Players
class Players {
    constructor(deck) {
        this.deck = deck;
    }
}


//Made class for Cards
class Cards {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
        this.value = value[rank]
    }
}

// Creating the deck
let deck = [];
for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < ranks.length; x++) {
        let card = new Cards(suits[i], ranks[x]);
        deck.push(card);
    }
}

// Randomize cards fisher-yates shuffle
for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}
//divide cards in to two piles
function halfDeck(deck) {
 const divideDeck = Math.ceil(deck.length / 2); 
 const deckOne = deck.slice(0, divideDeck);
 const deckTwo = deck.slice(divideDeck);
 return [deckOne, deckTwo]
}

//assigning the two decks to the two players
let [playerOneDeck, playerTwoDeck] = halfDeck(deck);
let player1 = new Players(playerOneDeck);
let player2 = new Players(playerTwoDeck);

console.log(player1)

function dealCard(player1Hand) 
{ return player1Hand.pop();
} 


//Compare Cards to decide who gets the Point
function points (playerOneCard, playerTwoCard) {
  if (playerOneCard> playerTwoCard) {
    return 'player1';
  } else if (playerOneCard < playerTwoCard) {
    return 'player2';
  } else {
    return 'tie';
  }
} 

//players take cards from the top of their decks
let player1Hand = []; 
let player2Hand = []; 
for (let i = 0; i < 26; i++) {
     player1Hand.push(dealCard(player1.deck)); 
     player2Hand.push(dealCard(player2.deck));
    }

//tally player score to determine who won
let playerOneScore = 0;
let playerTwoScore = 0;    

//Play the Game and show the results
for (let i = 0; i < 26; i++) {
    const card1 = player1Hand[i];
    const card2 = player2Hand[i];
    console.log(`Player One has ${card1.value} of ${card1.suit} Player Two has ${card2.value} of ${card2.suit}`);
    const winner = points(card1.value, card2.value);
    if (winner === 'player1') {
      console.log('Result: Player One wins')
      playerOneScore++
    } else if (winner === 'player2')
    {
      console.log('Result: Player Two wins');
      playerTwoScore++
    } else {
      console.log('Result: It is a tie!');
    }
  }

  //Testing if there is a tie
//playerOneScore = 0;
//playerTwoScore = 0;

  //code for showing who is the winner and their score
  if (playerOneScore > playerTwoScore) {
    console.log(`The winner is Player One with a score of ${playerOneScore}`)
  }else if (playerOneScore < playerTwoScore) {
    console.log(`The winner is Player Two with a score of ${playerTwoScore}`)
  }
  else {
    console.log("It's a Tie")
  }