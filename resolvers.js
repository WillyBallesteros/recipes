const mongoose = require('mongoose');

exports.resolvers = {
    Query: {
        getAllRecipes: async (root, args,  { Recipe } ) => {
            const allRecipes = await Recipe.find();
            return allRecipes;
        }
    },

    Mutation: {
        addRecipe: async (
            root, 
            { 
                name, 
                description, 
                category, 
                instructions, 
                username
            }, { Recipe }) => 
            {
                const newRecipe = await new Recipe(
                    {
                        _id : new mongoose.Types.ObjectId(),
                        name,
                        description,
                        category,
                        instructions,
                        username
                    }
                ).save();
            return newRecipe;
        }
    }
};