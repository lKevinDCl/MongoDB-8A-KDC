use("sample_training")

//set
// db.zips.updateMany(
//     //query
//         { city: "CLEVELAND"},
//         // update - operador
//         {
//             $set:{
//                 myAttr: "Hola"
//             }
//         }
// )


//rename
// db.zips.updateMany(
//     //query
//         { city: "CLEVELAND"},
//         // update - operador
//         {
//             $rename:{
//                 myAttr: "my_data"
//             }
//         }
// )

//unset
db.zips.updateMany(
    //query
        { city: "CLEVELAND"},
        // update - operador
        {
            $unset:{
                my_data: ""
            }
        }
)