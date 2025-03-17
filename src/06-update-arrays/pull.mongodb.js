use("utt_store");

db.inventory.updateMany(
    {_id:4},
    {
        $pull:{
            tags:"book"
        }
    }
)


//para eliminar diferentes tags
db.inventory.updateMany(
    {_id:4},
    {
        $pull:{
            tags:{
                $in:["appliance", "school"]
            }
        }
    }
)

//para insertar varios
db.inventory.updateOne(
    {_id:4},
    {
        $push:{
            tags:{
                $each:["Headphone","Wireless"]
            }
        }
    }
)