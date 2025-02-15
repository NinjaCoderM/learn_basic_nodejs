"strict mode"

function CreditCard(number, besitzer) {
  return {
    cardNumber: number,
    name: besitzer,
    info: function (){
      return "Credit Card " + number + " from " + besitzer;
    }
  }
}
let myCard = CreditCard("215330021", "MM");
console.log(myCard);
console.log(myCard.info());

function ConstCreditCard(number, besitzer) {
  this.number = number;
  this.besitzer = besitzer;
  this.info = function(){return "Constructor Example Credit Card " + this.number + " from " + this.besitzer;};
}

let myConstCreditCard = new ConstCreditCard("215330021", "MM2");
console.log(myConstCreditCard);
console.log(myConstCreditCard.info());

class ClassCreditCard {
  constructor(number, besitzer) {
    this.number = number;
    this.besitzer = besitzer;
    this.info = function () {
      return "Constructor Example Credit Card " + this.number + " from " + this.besitzer;
    };
  }
}

let classCreditCard = new ClassCreditCard("215330021", "MM3");
console.log(classCreditCard);
console.log(classCreditCard.info());

class PremiumCreditCard extends ClassCreditCard {
  constructor(number, besitzer, bonus) {
    super(number, besitzer); // Aufruf des Konstruktors der Elternklasse
    this.bonus = bonus;
  }

  getBonus() {
    return "Bonus points available: " + this.bonus;
  }
}

const myPremiumCard = new PremiumCreditCard("215330021", "MM4", 5000);

console.log(myPremiumCard.info());      // Geerbte Methode
console.log(myPremiumCard.getBonus());
