const TurmaController = require('../controller/TurmaController')
const {Router} = require('express')
const router = Router()

router
.get('/turmas', TurmaController.pegaTodasAsTurmas)
.get('/turmas/:id', TurmaController.pegaUmaTurma)
.post('/turmas', TurmaController.criarTurma)
.patch('/turmas/:id', TurmaController.atualizarTurma)
.delete('/turmas/:id', TurmaController.excluirTurma)
module.exports = router