const { resolve } = require("path/posix");

let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}
let is_store_open = true;
let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_store_open) {
            setTimeout(() => { resolve(work()) }, time)

        } else {
            reject(console.log("Our Shop is Closed!"))
        }
    })
}