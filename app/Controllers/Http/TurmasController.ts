/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Turma from 'App/Models/Turma'
import TurmaValidator from 'App/Validators/TurmaValidator'

export default class TurmasController {
  async index() {
    return await Turma.query()
      .preload('professores')
      .preload('semestre')
      .preload('disciplina')
      .preload('sala')
      .preload('alunos')
  }
  async store({ request }) {
    const dados = await request.validate(TurmaValidator)
    return await Turma.create(dados)
  }
  async show({ request }) {
    const id = request.param('id')
    return await Turma.findOrFail(id)
  }
  async destroy({ request }) {
    const id = request.param('id')
    const turma = await Turma.findOrFail(id)

    return turma.delete()
  }
  async update({ request }) {
    const id = request.param('id')
    const turma = await Turma.findOrFail(id)
    const dados = await request.validate(TurmaValidator)

    turma.merge(dados)

    return await turma.save()
  }
}
