'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Post extends Model {
    Imagem(){
        return this.hasMany("App/Models/Imagem")
    }
}

module.exports = Post
