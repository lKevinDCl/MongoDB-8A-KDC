use("utt_store");

db.inventory.updateOne(
    {_id:4},
    {
        $push:{
            tags: "headphone"
        }
    }
)