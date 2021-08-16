const database = require('../models')

class TurmaController {

    static async pegaTodasAsTurmas(req, res) {
      try {
        const todasAsTurmas = await database.Turmas.findAll()
        return res.status(200).json(todasAsTurmas)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

    static async pegaUmaTurma(req, res) {
        const { id } = req.params
        try {
          const turma = await database.Turmas.findOne({where: {id: Number(id)}})
          return res.status(200).json(turma)
        } catch (error) {
          return res.status(500).json(error.message);
        }
    }

    static async criarTurma(req, res){
      const novaTurma = req.body
      try {
        const turmaCriada = await database.Turmas.create(novaTurma)
        return res.status(201).json(turmaCriada)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

    static async atualizarTurma(req, res) {
        const { id } = req.params
        const turmaAtualizada = req.body
        try {
          await database.Turmas.update(turmaAtualizada, {where: {id: Number(id)}})
          return res.status(204)
        } catch (error) {
          return res.status(500).json(error.message);
        }
    }
    static async excluirTurma(req, res) {
        const { id } = req.params
        try {
         await database.Turmas.destroy({where: {id: Number(id)}})
          return res.status(204)
        } catch (error) {
          return res.status(500).json(error.message);
        }
      }
}

module.exports = TurmaController