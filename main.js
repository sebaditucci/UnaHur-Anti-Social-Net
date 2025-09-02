const express = require('express');
const PORT = process.env.PORT ?? 3001;
const app = express();
const db = require('./db/models');
const {sequelize} = require('./db/models')
const {userRoute, postRoute, postImageRoute, commentRoute, tagRoute, postTagRoute} = require('./routes');

app.use(express.json());

app.use('/users', userRoute);
app.use('/posts', postRoute);
app.use('/post_images', postImageRoute);
app.use('/comments', commentRoute);
app.use('/tags', tagRoute);
app.use('/post_tags', postTagRoute);

(async () => {
    try {
        await sequelize.query("PRAGMA foreign_keys = OFF");
        await db.sequelize.sync({ force: true });
        await sequelize.query("PRAGMA foreign_keys = ON");
        console.log('Base de datos sincronizada correctamente');
    /*
        const user1 = await db.User.create({ 
            nickname: "Seba", 
            email: "seba@test.com", 
            fechaNacimiento: "1990-01-01", 
            password: "832004xD$"
        });

        const user2 = await db.User.create({ 
            nickname: "Delfi", 
            email: "delfi@test.com", 
            fechaNacimiento: "2011-12-15", 
            password: "151211xD$"
        });

        const post = await user1.createPost({
            descripcion: "mi primer post"
        });

        const post_image = await post.createPost_image({
            url : "https://imagen1"
        });

        const comment = await db.Comment.create({
            descripcion: "mi primer comentario",
            user_id: user1.id,
            post_id: post.id
        });

        const tag = await db.Tag.create({
            tagName: "viajes"
        });

        post.addTag(tag);
        user1.addFollower(user2);

        console.log("modelos creados:", user1.toJSON(), post.toJSON(), tag.toJSON(), post_image.toJSON(), comment.toJSON(), user2.toJSON());
    */
        app.listen(PORT, () => {
        console.log(`La app inicio en el puerto ${PORT}`);
    });
    } catch (error) {
        console.error('Error al sincronizar la base de datos:', error);
    }
})();