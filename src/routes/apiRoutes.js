const express = require('express');

const centersRoutes = require('./centers/centers.routes');
const tasksRoutes = require('./tasks/tasks.routes');
const authRoutes = require('./auth/auth.routes');

const protectedRoutesMiddleware = require('../middlewares/protectedRoutes/protectedRoutes.middleware');

const router = express();

router.use('/auth', authRoutes); // precisa ser publico (não pode receber token para ser acessado)

router.use(protectedRoutesMiddleware.protect); // middleware de rota protegida!!! Tudo que estiver abaixo dela está protegido

router.use('/centers', centersRoutes); // precisa ser privado
router.use('/tasks', tasksRoutes); // precisa ser privado

module.exports = router;
