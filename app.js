const express = require('express');
const bodyParser = require('body-parser');
const User = require('./models/User');
const Recipe = require('./models/Recipe');
const db = require('./db');

const app = express();
app.use(bodyParser.json());

// User routes
app.post('/register', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        const token = user.generateAuthToken();
        res.status(201).send({ user, token });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findByCredentials(username, password);
        const token = user.generateAuthToken();
        res.send({ user, token });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Recipe routes
app.get('/recipes', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.send(recipes);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.post('/recipes', async (req, res) => {
    try {
        const recipe = new Recipe(req.body);
        await recipe.save();
        res.status(201).send(recipe);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

app.put('/recipes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await Recipe.findByIdAndUpdate(id, req.body, { new: true });
        if (!recipe) {
            throw new Error('Recipe not found');
        }
        res.send(recipe);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

app.delete('/recipes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await Recipe.findByIdAndDelete(id);
        if (!recipe) {
            throw new Error('Recipe not found');
        }
        res.send(recipe);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
