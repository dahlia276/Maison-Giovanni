const mongoose = require('mongoose');
const Attire = require('../models/Attire');
const DB_NAME = 'maison-giovanni';
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const attires=[
  {
  name: 'Spring jacket',
  description: 'lovely spring jacket',
  fabric: 'satin',
  
    size: 'medium',
    color: 'red',
    amount: 6,
 
  price: 200,
  pictureUrl: '',
  type: 'jacket'
  }
]

Attire.create(attires)
  .then(attiresFromDB => {
    console.log(`Created ${attiresFromDB.length} attires`);
    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating books from the DB: ${err}`));