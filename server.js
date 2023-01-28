require('./conn/mongo')
const express = require('express')
const app = express()
const port = 3000
const Vehicle=require('./model/vehicle');
const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));


app.get('/vehicles', async(req, res) => {
    try {
        const vehicleList=await Vehicle.find();
        res.send(vehicleList);
    } catch (error) {
        console.log(error);
    }
});

app.post('/vehicles/add', async(req, res) => {
    try {
        const newVehicle=await new Vehicle(req.body);
        newVehicle.save();
        if (newVehicle) {
            res.send("New Vehicle id Added");
        }else{
            res.send("No Vehicle Added");
        }
    } catch (error) {
        console.log(error);
    }
});


// app.get('/vehicles/:id', async(req, res) => {
//     try {
//         const vehicleID=req.params.id;
//         const foundVehicle=await Vehicle.findById(vehicleID);
//         res.send(foundVehicle);
//     } catch (error) {
//         console.log(error);
//     }
// });



app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});