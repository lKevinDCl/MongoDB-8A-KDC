use ("utt_kdc_store")

db.products.drop()

db.products.insertMany([
    {
        _id: 1,
        name: "Product 1",
        price: 100
    },
    {
        _id: 2,
        name: "Product 2",
        price: 120
    },
    {
        _id: 3,
        name: "Product 3",
        price: 240
    },
    {
        _id: 4,
        name: "Product 4",
        price: 360
    },
])

db.products.find()