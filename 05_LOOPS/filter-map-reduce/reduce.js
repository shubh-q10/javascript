const myNumbers = [1, 2, 3]

const myTotal = myNumbers.reduce((acc, currentvalue) => {
    console.log(`acc: ${acc} and currentvalue: ${currentvalue}`);
    
    return acc + currentvalue
}, acc = 0 )

console.log(myTotal);



// adding the price of shopping cart

const shoppingCart = [
  {
    itemName: "Laptop",
    price: 65000
  },
  {
    itemName: "Wireless Mouse",
    price: 1200
  },
  {
    itemName: "Keyboard",
    price: 2500
  },
  {
    itemName: "Monitor",
    price: 15000
  },
  {
    itemName: "Headphones",
    price: 3000
  },
  {
    itemName: "Smartphone",
    price: 28000
  },
  {
    itemName: "USB Drive",
    price: 800
  },
  {
    itemName: "Webcam",
    price: 2200
  },
  {
    itemName: "Desk Lamp",
    price: 1500
  },
  {
    itemName: "Power Bank",
    price: 1800
  }
];

const totalCartValue = shoppingCart.reduce((acc, currentcost) => acc + currentcost.price, acc = 0)

console.log(totalCartValue);
