# MERN-Dorayaki-Business-App (Backend)
Aplikasi MERN bisnis dorayaki terdiri dari [frontend](https://github.com/fernaldifz/mern-dorayaki-business-app-frontend) dan [backend](https://github.com/fernaldifz/mern-dorayaki-business-app-backend) yang dapat dijalankan dengan:
- Menjalankan npm run dev pada folder frontend aplikasi bisnis dorayaki
```
npm run dev
```
- Menjalankan docker-compose up pada folder backend aplikasi bisnis dorayaki
```
docker-compose up
```
Bila setelah menjalankan perintah "docker-compose up" pada folder backend, tetapi hanya keluar kalimat 
```Server is running on port: 5000```, 
sedangkan kalimat 
```MongoDB database connection established successfully```
tidak keluar di CLI Anda, dapat melakukan pengaturan DNS pada koneksi internet Anda. Gunakan Google DNS (8.8.8.8 atau 8.8.4.4) supaya dapat menggunakan layanan database MongoDB. Saya pernah mengalami masalah ini dan dapat memperbaikinya dengan solusi ini.

Kemudian, Anda dapat mengakses ```http://localhost:3000/``` untuk menjalankan aplikasi.

## Model Dorayaki
Item dorayaki terdiri dari:
- rasa (string)
- deskripsi (string)
- gambar (string, sebagai path ke image)
- harga (number)

## Model Toko Dorayaki
Item toko dorayaki terdiri dari:
- nama (string)
- jalan (string)
- kecamatan (string)
- provinsi (string)
- tanggal (date)
- menu (array, sebagai array of objects, object terdiri dari rasa, persediaan dan kapasitas dorayaki)

## Dorayaki Endpoint
Berikut merupakan endpoint dorayaki yang telah didefinisikan:
- ```/dorayaki``` GET: Mendapatkan daftar seluruh dorayaki dari database.
- ```/dorayaki/add``` POST: Setelah mendapatkan data rasa, deskripsi, gambar dan harga dorayaki, kita membuat instance dorayaki baru, kemudian menyimpannya di database.
- ```/dorayaki/:id``` GET: Melakukan return terhadap item dorayaki berdasarkan id.
- ```/dorayaki/:id``` DELETE: Menghapus item dorayaki berdasarkan id.
- ```/dorayaki/update/:id``` POST: Melakukan update terhadap suatu item dorayaki berdasarkan id

## Toko Dorayaki Endpoint
Berikut merupakan endpoint toko dorayaki yang telah didefinisikan:
- ```/tokodorayaki``` GET: Mendapatkan daftar seluruh toko dorayaki dari database.
- ```/tokodorayaki/add``` POST: Setelah mendapatkan data nama, jalan, kecamatan, provinsi, tanggal dan menu, kita membuat instance toko dorayaki baru, kemudian menyimpannya di database.
- ```/tokodorayaki/:id``` GET: Melakukan return terhadap item toko dorayaki berdasarkan id.
- ```/tokodorayaki/:id``` DELETE: Menghapus item toko dorayaki berdasarkan id.
- ```/tokodorayaki/update/:id``` POST: Melakukan update terhadap suatu item toko dorayaki berdasarkan id
