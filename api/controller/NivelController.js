const database = require('../models')

class NivelController {

    static async pegaTodosOsNiveis(req, res) {
      try {
        const todosOsNiveis = await database.Niveis.findAll()
        return res.status(200).json(todosOsNiveis)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

    static async pegarUmNivel(req, res) {
        const { id } = req.params
        try {
        const umNivel = await database.Niveis.findOne({where: {id : Number(id)}})
        res.status(200).json(umNivel) 
        } catch (error) {
        return res.status(500).json(error.message);
        }
    }

    static async criarNivel(req, res) {
        const novoNivel = req.body
        try {
        const nivelCriado = await database.Niveis.create(novoNivel)
        res.status(200).json(nivelCriado) 
        } catch (error) {
        return res.status(500).json(error.message);
        }
    }

    static async editarNivel(req, res) {
        const { id } = req.params
        const nivelEditado = req.body
        try {
            await database.Niveis.update(nivelEditado, {where: {id: Number(id)}})
            res.status(204) 
        } catch (error) {
            return res.status(500).json(error.message);   
        }
    }

    static async excluirNivel(req, res) {
        const { id } = req.params
        try {
        await database.Niveis.destroy({where: {id : Number(id)}})
        res.status(204)
        } catch (error) {
        return res.status(500).json(error.message);
        }
    }
}

module.exports = NivelController