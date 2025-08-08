const express = require('express');
const PORT = process.env.PORT ?? 3001;
const app = express();
const db = require('./db/models');
const {userRoute} = require('./routes');

app.use(express.json());
app.use('/users', userRoute);

app.listen(PORT, () => {
    console.log(`La app inicio en el puerto ${PORT}`);
    db.sequelize.sync({force: true});
});