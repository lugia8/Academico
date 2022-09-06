import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Chamada extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public aula_id: number

  @column()
  public aluno_id: number

  @column()
  public presenca: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
