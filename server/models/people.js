import mongoose from 'mongoose'

const Schema = mongoose.Schema

const peopleSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  birthday : Date,
  updated: { type: Date, default: Date.now },
})

export const People = mongoose.model('People', peopleSchema)
