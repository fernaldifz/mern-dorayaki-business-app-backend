const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tokoDorayakiSchema = new Schema({
    nama: { type: String, required: true },
    jalan: { type: String, required: true },
    kecamatan: { type: String, required: true },
    provinsi: { type: String, required: true },
    tanggal: { type: Date },
    menu: { type: Array },
  }, {
    timestamps: true,
  });

const TokoDorayaki = mongoose.model('Toko Dorayaki', tokoDorayakiSchema);

module.exports = TokoDorayaki;