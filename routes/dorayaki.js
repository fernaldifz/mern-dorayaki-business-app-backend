const router = require('express').Router();
let Dorayaki = require('../models/dorayaki.model');

router.route('/').get((req, res) => {
  Dorayaki.find()
    .then(dorayaki => res.json(dorayaki))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const rasa = req.body.rasa;
  const deskripsi = req.body.deskripsi;
  const gambar = req.body.gambar;
  const harga = Number(req.body.harga);

  const newDorayaki = new Dorayaki({
    rasa,
    deskripsi,
    gambar,
    harga
  });

  newDorayaki.save()
  .then(() => res.json('Dorayaki ditambahkan!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Dorayaki.findById(req.params.id)
    .then(dorayaki => res.json(dorayaki))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Dorayaki.findByIdAndDelete(req.params.id)
    .then(() => res.json('Dorayaki dihapus.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Dorayaki.findById(req.params.id)
    .then(dorayaki => {
      dorayaki.rasa = req.body.rasa;
      dorayaki.deskripsi = req.body.deskripsi;
      dorayaki.gambar = req.body.gambar;
      dorayaki.harga = Number(req.body.harga);

      dorayaki.save()
        .then(() => res.json('Dorayaki diperbaharui!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;