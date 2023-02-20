// function printPerson(name: string, age: number){
//     console.log(`Name: ${name} age: ${age}`)
// }

// printPerson("Bbilly", 8)

// function isMinimumAge(age: number) : boolean {
//     return age >= 21
// }

// console.log("is min age: ", isMinimumAge(22))

// class Product {
//     id: number
//     published = true
//     title!: string
//     price?: number

//     constructor(id: number){
//         this.id=id
//     }

//     printDetails(){
//         console.log("ID:", this.id)
//         console.log("Title:", this.title)
//         console.log("Price:", this.price)
//         console.log("Published:", this.published)
//     }
// }

class Product {

    constructor(
        public id:number,
        public title:string,
        public price:number,
        public published = true){

        }

    printDetails(){
        console.log("ID:", this.id)
        console.log("Title:", this.title)
        console.log("Price:", this.price)
        console.log("Published:", this.published)
    }
}

// let p = new Product(100, "bball gloves", 39.95)
// p.printDetails()

let database = new Map<number, Product>()

let p1 = new Product(100, "BBall Gloves", 39.95)
let p2 = new Product(122, "BaskBall Gloves", 139.95)

database.set(p1.id, p1)
database.set(p2.id, p2)

database.forEach((p, key) => {
    console.log("Key is:", key)
    p.printDetails()
})

function getOrDefault<K, V>(
    key: K,
    map: Map<K,V>,
    defaultValue: V
    ) : V {
        let data: V = map.get(key) ?? defaultValue
        return data
    }

let p3 = getOrDefault(11, database, new Product(0, "unknoiwn", 0.0))
let p4 = getOrDefault(100, database, new Product(0, "unknoiwn", 0.0))

p3.printDetails()