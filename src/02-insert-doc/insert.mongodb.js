use("utt_kdc_store")

/**
 * 
1RO: ID AUTOMATICO
db.products.insertOne({
    name: "Product 1",
    price: 1000,
})

db.products.insertOne({
    name: "Product 2",
    price: 100,
})


2DO: ID AUTOMATICO
db.products.insertOne({
    name: "Product 1",
    price: 1000,
})

db.products.insertOne({
    name: "Product 2",
    price: 100,
})


3RO: ID CON NUMEROS ENTEROS
db.products.insertOne({
    _id: 1,
    name: "Product 1",
    price: 1000,
})

db.products.insertOne({
    _id: 2,
    name: "Product 2",
    price: 100,
})
 */

//ID CON ALFANUMERICOS

db.products.insertOne({
    _id: "20025-01",
    name: "Product 1",
    price: 1000,
})

db.products.insertOne({
    _id: "2025-mar-02",
    name: "Product 2",
    price: 100,
})
