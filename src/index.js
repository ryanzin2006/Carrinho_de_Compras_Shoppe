import createItem from "./services/item.js"
import * as cartServices from "./services/cart.js"

const mycart = []

console.log("Bem vinso ao seu carrinho da shopee !")

const item1 =  await createItem("Hotwheels-ferrari", 20.99, 1)
const item2 =  await createItem("hotwheels-lamborguini", 39.99, 3) 

await cartServices.addItem(mycart, item1)
await cartServices.addItem(mycart, item2)

await cartServices.deleteItem(mycart, item2)

await cartServices.displayCart(mycart)

// await cartServices.deleteItem(mycart, item2.name)


await cartServices.calculeteTotal(mycart)

