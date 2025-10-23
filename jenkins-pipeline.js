//Jenkins Pipeline Introduction
//Merupakan plugin yang mendukung implementasi pembuatan continuous delivery pipeline di Jenkins
//Continuous delivery pipeline adalah perintah-perintah yang dibuat agar software yang dibuat bisa di deliver ke pengguna, dari mulai version control sampai deployment
//Pipeline menyediakan peralatan untuk mempermudah prose tersebut, dari yang paling sederhana sampai yang kompleks, menggunakan sintaks DSL (Domain Specific Language)
//Jenkins Pipeline menggunakan bahasa pemrograman Groovy sebagai DSL nya dan penggunaannya sangat mudah
//Karena pipeline dibuat menggunakan kode, maka bisa dengan mudah mengubah atau me-review tahapan pipeline
//Karena pipeline biasanya dibuat dalam file dan disimpan di projectnya, maka tidak perlu takut hilang ketika terjadi restart atau kerusakan di Jenkins nya
//Juga bisa memasukkan logic yang sederhana sampai kompleks di Pipeline, seperti pengecekan kondisi, perulangan, dan lain-lain

//Jenkins Pipeline Instalation
//Saat pertama install jenkins, secara default jenkins pipeline tidak terdapat di jenkins
plugins.jenkins.io/workflow-aggregator/ //perlu install plugin pipeline terlebih dahulu atau lewat Plugin Manager

//Pipeline Concept
//Jenkins pipeline memiliki beberapa konsep dalam penggunaannya, yaitu:
//1. Pipeline : definisi kode continous delivery, berisi seluruh instriksi untuk proses CD seperti compile, testing, deploy, dll
//Kode pipeline menggunakan kata kunci pipeline
//2. Agent : machine/server bagian dari jenkins yang digunakan untuk mengeksekusi pipeline
//Kode penentuan Agent adalah kata kunci agent, Agent disebutkan di dalam kode pipeline yang dibuat
//3. Stage : blok definisi tugas/tahapan dalam pipeline spt: 'Build', 'Test', 'Deploy' dll. Biasanya ditampilkan di jenkins seperti tahapan progress dari pipeline
//Biasanya dalam pipeline akan terdapat banyak stage, Stage menggunakan kata kunci stage
//4. Step adalah sebuah instruksi/perintah yg harus dilakukan oleh jenkins
//Step dilakukan di dalam Stage, Step menggunakan kata kunci steps

//Pipeline Job
//Untuk membuat job pipeline sama seperti membuat job biasa tapi bisa memilih opsi Pipeline dibawah nama item
//Opsi Pipeline ini baru muncul setelah menginstall plugin Pipeline pada jenkins
//Tampilannya juga sama seperti job biasa, namun dibagian bawah ada tambahan section Pipeline berisi Definition dan Script
//Bisa set Definition dan Script, dan coba build setelah terbuat job pipeline nya

//Jenkins File
//Walaupun bisa membuat kode Pipeline di jenkins job, tapi biasanya banyak yang membuat kode pipeline di file Jenkinsfile
//File Jenkinsfile ini biasanya disimpan di repository project terkait agar ketika terjadi error tidak hilang
//File Jenkinsfile bisa diisi dengan scrip pipeline yang sebelumnya ditaruh di configure jenkins job
//Lalu set pada pipeline job bagian Pipeline Definition menjadi Pipeline script from SCM dan isi SCM:Git, Repository, Credential, & Branch
//Kemduian bisa save dan jalankan job jenkins pipeline yang sudah dibuat
//Hasil running akan sama dengan memasukan script pipeline manuaal di configure, selanjutnya untuk konfigurasi bisa diupdate langsung di Jenkinsfile