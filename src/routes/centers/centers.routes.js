const express = require('express');

const centersController = require('../../controller/centers.controller');

const router = express();

router.get('/', centersController.getMany); // obter lista de todos os projetos
router.get('/:id', centersController.getOne); // obter detalhe de um projeto a partir do seu ID
router.post('/', centersController.createOne); // criar um novo projeto
router.put('/:id', centersController.updateOne); // atualizar um projeto a partir do seu ID
router.delete('/:id', centersController.deleteOne); // deletar um projeto específico

module.exports = router;
