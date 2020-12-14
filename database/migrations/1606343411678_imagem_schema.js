'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImagemSchema extends Schema {
  up () {
    this.create('imagems', (table) => {
      table.increments()
      table
        .integer('post_id')
        .unsigned()
        .references('id')
        .inTable('posts')
        .onUpdate('cascade')
        .onDelete('cascade')
        .notNullable()
      table.string('caminhoIMG', 255).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('imagems')
  }
}

module.exports = ImagemSchema
