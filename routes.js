const express = require('express')
const routes = express.Router()
const RecipesController = require('./controllers/RecipesController')
const AdminController = require('./controllers/AdminController')

// Rotas Recipes
routes.get("/", RecipesController.index ) //ROTA INDEX
routes.get("/about", RecipesController.about) // ROTA SOBRE
routes.get("/recipes", RecipesController.recipes ) // ROTA DE RECEITAS
routes.get("/recipe/:index", RecipesController.recipe) //  ROTA DE RECIPES

// Rotas Administração
routes.get("/admin/recipes", AdminController.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create", AdminController.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", AdminController.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", AdminController.edit); // Mostrar formulário de edição de receita
routes.post("/admin/recipes", AdminController.post); // Cadastrar nova receita
routes.put("/admin/recipes",  AdminController.put); // Editar uma receita
routes.delete("/admin/recipes", AdminController.delete); // Deletar uma receita

module.exports = routes