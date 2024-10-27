// quais ações meu carrinho pode faser:

//. adicionar item 
    async function addItem(userCart, item) {
        userCart.push(item)
    }
//. deletar item do carrinho
    async function deleteItem(userCart, name) {
        const index = userCart.findIndex((item) => item.name === name)

        if(index === 1){
           console.log("Item não encontrado !")
        }
        
        if(userCart[index].quantity > 1){
            userCart[index].quantity -=1
        }

        if(userCart[index].quantity === 1){
            userCart.splice(index, 1)
        }

        
    }
//. remover um item (diminui um item)
    async function removeItem(userCart, index) {

        const deleteItem  = index -1 
        
        if(index >= 0 && index < userCart.length){
            userCart.splice(deleteItem, 1)
        }        
    }
//. calcular o total 
    async function calculeteTotal(userCart) {
        console.log("\nshopee cart total é : ")
        const result = userCart.reduce((total, item)=> total + item.subtotal(), 0)   
        console.log(`\nTotal: ${result}`)
    }

    async function displayCart(userCart){
        console.log("Shopee cart list: ")
        userCart.forEach((item, index) => {
            console.log(`\n🎁 ${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal =  ${item.subtotal()}`)
        })
    }

    export {
        addItem,
        calculeteTotal,
        deleteItem,
        removeItem,
        displayCart
    }