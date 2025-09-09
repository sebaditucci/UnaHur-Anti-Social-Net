const express = require('express');
const PORT = process.env.PORT ?? 3001;
const app = express();
const db = require('./db/models');
const {sequelize} = require('./db/models')
const {userRoute, postRoute, postImageRoute, commentRoute, tagRoute, postTagRoute, userFollowsRoute} = require('./routes');

app.use(express.json());

app.use('/users', userRoute);
app.use('/posts', postRoute);
app.use('/post_images', postImageRoute);
app.use('/comments', commentRoute);
app.use('/tags', tagRoute);
app.use('/post_tags', postTagRoute);
app.use('/userFollows', userFollowsRoute);

(async () => {
    try {
        await sequelize.query("PRAGMA foreign_keys = OFF");
        //await db.sequelize.sync({ force: true });
        await sequelize.query("PRAGMA foreign_keys = ON");
        
        console.log('Base de datos sincronizada correctamente');

        app.listen(PORT, () => {
        console.log(`La app inicio en el puerto ${PORT}`);
    });
    } catch (error) {
        console.error('Error al sincronizar la base de datos:', error);
    }
})();