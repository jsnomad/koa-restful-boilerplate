import mongoose from 'mongoose'

const Schema = mongoose.Schema

// To fix https://github.com/Automattic/mongoose/issues/4291
mongoose.Promise = global.Promise;

const citySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  totalPopulation: {
    type: Number,
    required: true,
  },
  country: String,
  zipCode: Number,
  updated: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model('City', citySchema)
