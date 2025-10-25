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

//Agent
//Merupakan bagian yang digunakan untuk menentukan dimana pipeline akan dijalankan
//Jika menggunakan nilai any, maka pipeline bisa dijalankan di agent manapun (Master / agent lain)
//Agent mendukung beberapa value berikut :
//any: pipeline akan dieksekusi di agent manapun termasuk master
//none: pipeline tidak akan dieksekusi di agent manapun, berarti dijalankan di master
//label: pipeline hanya akan dijalankan agent yang memiliki label yang sudah ditentukan
//note: sama dengan label, hanya bisa mengubah workspace lokasi folder secara custom
    //biasanya ketika ingin menjalankan pipeline hanya pada agent tertentu, seperti di agent khusus OS windows, linux, dll
    //maka bisa mengubah nilai dari agent menjadi label/node yang diinginkan
    //untuk menambahkan label bisa di dalam konfigurasi Agent dan tambahkan pada section Labels, jika lebih dari 1 label pisahkan dengan spasi
    //Jangan lupa tambahkan juga pada Jenkinsfile untuk labelnya, jika lupa salah satunya akan menunggu sampai menemukan labelnya ketika build
//docker: pipeline dijalankan di docker container
//dockerfile: sama seperti docker, namun image container dibuat dari dockerfile
//kubernetes: pipeline dijalankan di kubernetes cluster

//Post
//Bagian yang digunakan untuk menambah steps di akhir job ketika sebuah kondisi pipeline terpenuhi
//Misal setelah selesai pipeline dibuat, ingin mengirim pesan ke slack/email, bisa juga ketika ingin mengirim notifikasi ketika terjadi error
//Terdapat banyak kondisi post yang bisa digunakan yaitu :
//-Always: kondisi apapun, akan selelau dilakukan
//-Changed: jika status pipeline berubah dari sebelumnya. misal dari error ke sukses
//-Fixed: jika status berubah dari error menjadi sukses
//-Regression: jika status sdari sukses menjadi tidak sukses
//-Aborted: jika pipeline dibatalkan secara manual
//-Failure: jika status pipeline sukses
//-Success: jika status pipeline sukses
//-Cleanup: selalu dijalankan, namun setelah kondisi post lainnya

//Stages
//Bagian dimana terdapat satu atau lebih stage, biasanya berisikan detail dari tahapan dalam continuous delivery yang dibuat di pipeline
//Tidak ada aturan cara penamaan Stage, sehingga bisa bebas seperti apa. Contoh biasanya Build, Test, Deploy, dll
//Stage akan dijalankan secara sequential berurut, jika pada stage ada error maka stage selanjutnya tidak akan dieksekusi
//Terdapat plugin yang dapat melihat proses build di tiap stage secara visual yaitu Pipeline Stage View
//Jika sudah install akan muncul visualisasi stage dengan detail tiap stage beserta error, waktu, tanggal, commit, dll

//Steps
//Berisikan instruksi-instruksi yang dilakukan pipeline
//Bisa berisi satu atau beberapa steps sekaligus, misal ingin menulis dengan echo dll

//Basic Steps
//Saat install pipeline plugin otomatis juga akan menginstall Pipeline Basic Steps yg mengandung perintah/instruksi step yang bisa digunakan
plugins.jenkins.io/workflow-basic-steps/ //otomatis akan terinstall dan ada di manage jenkins -> plugin -> installed
jenkins.io/doc/pipeline/steps/workflow-basic-steps/ //daftar perintah steps selain echo

//Node and Process Steps
//Salah satu steps yang sering digunakan adalah Node and Process Steps
plugins.jenkins.io/workflow-durable-task-step/ //plugin ini juga otomatis terinstall ketika install pipeline plugin
//Plugin tsb biasanya digunakan untuk menjalankan/mengeksekusi perintah terminal, spt shellscript(unix)/cmd(windows)
jenkins.io/doc/pipeline/steps/workflow-durable-task-step //detal dokumentasi

//Script
//Kadang dibutuhkan untuk membuat pipeline yang sangat flexible, dan kadang yang kompleks
//Pipeline mendukung script yang bisa menyisipkan kode Groovy pada pipeline tersebut
//Secara default jika menggunakan Groovy dalam steps akan error, perlu tambahkan script untuk manandai bagian tsb ada kode Groovy dulu
goovy-lang.org //dokumentasi bahasa groovy

//Utility Steps
//Plugin yg berisi utility yang bisa digunakan mempermudah pembuatan pipeline, contoh: membaca file, membuat archive file, membuat hash, dll
pipeline.jenkins.io/pipeline-utility-steps/ //tidak terinstall otomatis, perlu install manual
jenkins.io/doc/pipeline/steps/pipeline-utility-steps/ //dokumentasi lengkap apa saja yang bisa dilakukan plugin ini

//Other Steps
//Selain Basic Steps, Node & Process Steps, dan Utility Steps. Masih banyak Steps lain yang bisa digunkan
//Sudah banyak plugin Steps yang tersedia dan bisa digunakan untuk mempermudah pembuatan pipeline
jenkins.io/doc/pipeline/steps/ //bahkan bisa membuat plugin steps sendiri

//Agent per Stage
//Materi sebelumnya sudah menggunakan agent untuk menentukan tempat menjalankan pipeline
//Saat menggunakan agent  otomatis semua stage akan dijalankan di agent tersebut, tapi kadang butuh menjalankan stage di agent berbeda
//Misal stage pertama butuh agent java, dan agent kedua butuh agent golang dan lain-lain
//Maka bisa dengan jadikan agent di pipeline tersebut menjadi none, lalu tambah agent di tiap spesifik stage

//Global Variable
//Saat membuat job manual sebelumnya, bisa mendapatkan global environment variable spt JOB_NAME, BUILD_NUMBER, dan lain-lain
//Pada pipeline juga bisas namun karena menggunakan Groovy, maka harus menggunakan global variable yang otomatis bisa diakses groovy
<jenkins-url/job/JOB_NAME/pipeline-syntax/globals> //Melihat detail global variable di pipeline