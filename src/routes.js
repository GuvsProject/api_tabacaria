const express = require('express');
const UserController = require('./controllers/UserController');
const ProductController = require('./controllers/ProductController');
const ComplainController = require('./controllers/ComplainController');

const routes = express.Router();

routes.post('/users', UserController.store); //cadastra usuário
routes.get('/users', UserController.index); //lista usuários cadastrados
routes.patch('/users', UserController.update); //atualiza dados do usuário, busca usuário por nome
routes.post('/singleUser', UserController.singleIndex); //retorna um usuário buscado pelo email cadastrado
routes.post('/products', ProductController.store); //cadastra um produto
routes.get('/products', ProductController.index); //lista os produtos cadastrados
routes.patch('/products', ProductController.update); //atualiza o produto, busca o produto por nome
routes.post('/singleProduct', ProductController.singleIndex); //retorna um produto, buscado pelo nome
routes.post('/complains', ComplainController.store); //registra uma reclamação

module.exports = routes;