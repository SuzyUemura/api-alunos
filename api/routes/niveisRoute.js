const NivelController = require('../controller/NivelController')
const { Router } = require('express')
const router = Router()

router.get('/niveis', NivelController.pegaTodosOsNiveis)
router.get('/niveis/:id', NivelController.pegarUmNivel)
router.patch('/niveis/:id', NivelController.editarNivel)
router.post('/niveis', NivelController.criarNivel)
router.delete('/niveis/:id', NivelController.excluirNivel)

module.exports = router