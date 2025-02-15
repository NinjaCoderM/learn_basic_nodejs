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


