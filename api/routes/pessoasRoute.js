const {Router} = require('express')
const PessoaController = require('../controller/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.pegartodasPessoas)
router.get('/pessoas/:id', PessoaController.pegarUmaPessoa)
router.post('/pessoas', PessoaController.criarPessoa)
router.patch('/pessoas/:id', PessoaController.atualizarPessoa)
router.delete('/pessoas/:id', PessoaController.excluirPessoa)

router
.get('/pessoas/:id/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
.post('/pessoas/:id/matricula', PessoaController.criarMatricula)
.patch('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizarMatricula)
.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.excluirMatricula)

module.exports = router