const CarrerController = require('./carrer.controller'); 
const carrerModel = require('./carrer.model'); 


exports.carrerRoutes = function (app) {
    // app.post('/business', [ 
    //     BusinessModel.uploadBusinessImage,
    //     BusinessController.insert
    // ]);
    // app.get('/carrer/:businessId', [ 
    //     BusinessController.findBusinessById
    // ]);
    // app.put('/business/:businessId', [ 
    //     BusinessModel.uploadBusinessImage,
    //     BusinessController.updateBusinessById
    // ]);
    // app.delete('/business/:businessId', [ 
    //     BusinessController.deleteBusinessById
    // ]);
    app.get('/carrercoach', [ 
        CarrerController.findAllCoach
    ]);
};