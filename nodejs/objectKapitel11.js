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

let myConstCreditCard = new ConstCreditCard("215330021", "MM");
console.log(myConstCreditCard);
console.log(myConstCreditCard.info());

