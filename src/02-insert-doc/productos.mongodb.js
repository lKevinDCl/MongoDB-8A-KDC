use("utt_kdc_store")

db.products.drop()

db.products.insertMany(
    [
        {
            _id: 1,
            name: "Producto 1",
            price: 100
        },
        {
            _id: 2,
            name: "Producto 2",
            price: 150
        },
        {
            _id: 3,
            name: "Producto 3",
            price: 200
        },
        {
            _id: 4,
            name: "Producto 5",
            price: 250
        },
        {
            _id: 5,
            name: "Producto 5",
            price: 300
        },
        {
            _id: 6,
            name: "Producto 6",
            price: 350
        },
        {
            _id: 7,
            name: "Producto 7",
            price: 400
        },
        {
            _id: 8,
            name: "Producto 8",
            price: 450
        },
        {
            _id: 9,
            name: "Producto 9",
            price: 500
        },
        {
            _id: 10,
            name: "Producto 10",
            price: 550
        },
        {
            _id: 11,
            name: "Producto 11",
            price: 600
        },
        {
            _id: 12,
            name: "Producto 12",
            price: 650
        },
    ], {
        ordered: false
    }
)

db.products.find()