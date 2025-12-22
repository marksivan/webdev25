// Candy
//  promises

let candy = new Promise((resolve, reject) =>{
    let candyInstore = true;

    if (candyInStore){
        resolve("Here's your candy")
    }else{
        reject("Sorry, no candy")
    }
});

candy.then(result =>{
    console.log(result);  // "Here’s your candy
}).catch(error => {
    console.log(error)  // "Sorry, no candy
})

// async/await

async function getCandy(){
    try{
        let result = await candy;
        console.log(result)
    } catch (error){
        console.log(error)

    }
}

getCandy();

// Pizza

function orderPizza(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("Your pizza is here")
        }, 2000) // takes 2 seconds
    })
}

async function eatPizza(){
    console.log("I ordered pizza")
    let pizza = await orderPizza();
    console.log(pizza);
    console.log("Yum yum")

}

eatPizza();


