use ("utt_kdc_store")

// db.products.drop()

// db.products.InsertMany([
//     {
//         _id: 1,
//         name: "Product 1",
//         price: 1000,
//     },
//     {
//         _id: 2,
//         name: "Product 2",
//         price: 122,
//     },
//     {
//         _id: 3,
//         name: "Product 3",
//         price: 1030,
//     },
// ])

// db.products.find()


db.products.InsertMany([
    {
        _id: 4,
        name: "Product 1",
        price: 1005,
    },
    {
        _id: 5,
        name: "Product 2",
        price: 128,
    },
    {
        _id: 6,
        name: "Product 3",
        price: 1038,
    },
])

db.products.find()
