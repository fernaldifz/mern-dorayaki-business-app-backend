const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dorayakiSchema = new Schema({
    rasa: { type: String, required: true },
    deskripsi: { type: String, required: true },
    gambar: { type: String, required: true },
    harga: { type: Number }
  }, {
    timestamps: true,
  });

const Dorayaki = mongoose.model('Dorayaki', dorayakiSchema);

module.exports = Dorayaki;