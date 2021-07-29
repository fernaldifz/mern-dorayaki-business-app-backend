const router = require('express').Router();
let TokoDorayaki = require('../models/toko.dorayaki.model');

router.route('/').get((req, res) => {
  TokoDorayaki.find()
    .then(tokoDorayaki => res.json(tokoDorayaki))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const nama = req.body.nama;
  const jalan = req.body.jalan;
  const kecamatan = req.body.kecamatan;
  const provinsi = req.body.provinsi;
  const tanggal = Date.parse(req.body.tanggal);
  const menu = req.body.menu;

  const newTokoDorayaki = new TokoDorayaki({
    nama,
    jalan,
    kecamatan,
    provinsi,
    tanggal,
    menu
  });

  newTokoDorayaki.save()
  .then(() => res.json('Toko Dorayaki ditambahkan!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  TokoDorayaki.findById(req.params.id)
    .then(tokoDorayaki => res.json(tokoDorayaki))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  TokoDorayaki.findByIdAndDelete(req.params.id)
    .then(() => res.json('Toko Dorayaki dihapus.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  TokoDorayaki.findById(req.params.id)
    .then(tokoDorayaki => {
      tokoDorayaki.nama = req.body.nama;
      tokoDorayaki.jalan = req.body.jalan;
      tokoDorayaki.kecamatan = req.body.kecamatan;
      tokoDorayaki.provinsi = req.body.provinsi;
      tokoDorayaki.tanggal = Date.parse(req.body.tanggal);
      tokoDorayaki.menu = req.body.menu;

      tokoDorayaki.save()
        .then(() => res.json('Toko Dorayaki diperbaharui!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;