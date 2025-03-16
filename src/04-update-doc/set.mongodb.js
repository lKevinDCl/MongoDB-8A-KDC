use ("utt_kdc_store")

db.products.updateOne(
    {_id:2},
    {
        $set: {
            name: 'Tshirt',
            price: '890',
            tags: ['S','M','L','XL'],
        }
    }
)