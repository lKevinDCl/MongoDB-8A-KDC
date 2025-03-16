//Actualizacion de multiples registros

use("sample_training")

//db.zips.find().count()

//db.zips.find({city:"CLEVELAND"})

db.zips.find({city:"CLEVELAND"})
//2369
//1244

db.zips.updateMany(
    //query
        { city: "CLEVELAND"},
        // update - operador
        {
            $inc:{
                pop: 100
            }
        }

    
)