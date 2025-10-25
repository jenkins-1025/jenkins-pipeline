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

//Environment
//Selain global variable, pipeline juga mendukung penambahan environment variable
//Jika environment variable ditambahkan di pipeline, maka semua stages bisa menggunakan valuenya
//Jika environment variable ditambahkan di stage, maka hanya bisa digunakan di stage tersebut
//Di environment juga terdapat perintah credentials(), yg bisa untuk mengambil data dari jenkins credentials
//Ini lebih aman dibanding menempatkan credentials langsung di Jenkinsfile, jenis credentials yang didukung :
//Secret Text, secara otomatis environment variable berisi value dari secret text
//Secret File, secara otomatis environment variable berisi lokasi file secret yang secara temporary dibuat dan dihapus otomatis setelah pipeline selesai
//Username and Password, secara otomatis environment variable berisi data username:password, dan secara otomatis akan dibuatkan environment variable dengan nama NAMA_USR dan NAMA_PSW
//SSH with Private Key, secara otomatis environment variable berisi lokasi file SSH yang secara temporary dibuat dan dihapus otomatis. Dan juga secara otomatis akan dibuatkan environment variable NAMA_USR dan NAMA_PSW (berisi passphrase SSH)
//NOTE: SENSITIVE_INFORMATION
//Perintah ${KEY} didalam “” adalah Groovy String Interpolation, dan itu seharusnya tidak digunakan untuk data sensitive, misal credentials
//Agar informasi sensitive tidak terlihat, gunakan tanda ‘’ (petik satu), dan gunakan $KEY

//Option
//Perintah Option digunakan untuk pengaturan pipeline, ada di level pipeline/level stage (seperti environment)
jenkins.io/doc/book/pipeline/syntax/#options //banyak sekali option yang bisa diatur

//Parameter
//Pada materi Jenkins dasar, bisa menambahkan parameter pada job yang dibuat
//Di pipeline juga bisa menambah parameter, dengan cara menggunakan perintah parameters
//Parameter yang diinput oleh user akan secara otomatis disimpan dalam global variable, tipe parameter :
//string: tipe parameter string/text
//text: mirip seperti string, tapi input akan berupa multiline text area
//booleanParam: untuk tipe parameter boolean (true/false)
//choice: untuk tipe parameter string/text dengan opsi pilihan yang sudah disediakan
//password: untuk tipe parameter string yang dianggap sensitif

//Trigger
//Adalah perintah yg digunakan untuk melakukan run job secara otomatis, beberapa trigger tipe :
//cron: untuk run job otomatis berdasarkan ekspresi cron yang sudah ditetapkan
//pollSCM: menggunakan ekspresi cron yang otomatis mengecek perubahan di SCM, jika terjadi perubaahan job otomatis berjalan
//upstream: untuk menjalankan job setelah job lain selesai dengan result -> javadoc.jenkins-ci.org/hudson/model/Result.html

//Input
//Input mirip dengan parameter, input adalah perintah yang bisa ditambahkan di stage
//Saat tambahkan input di stage, otomatis stage tersebut tidak akan berjalan sebelum input diisi oleh user, option input :
//id: adalah identifier input, defaultnya sama dengan nama stage
//ok: text untuk tombol ok
//submitter: user boleh memasukkan input, bisa gunakan koma jika lebih dari satu user
//parameters: parameter yang perlu diinput oleh user

//When
//Perintah yang digunakan untuk menentukan pada kondisi apa sebuah stage dieksekusi
jenkins.io/doc/book/pipeline/syntax/#when //detail kondisi sangat beragam

//Sequential Stages
//Stages bisa memiliki stage lagi di dalamnya, dan stage di dalamnya secara default akan dieksekusi secara sequential berurut
//Stage didalamnya hanya bisa memiliki satu perintah, misal steps(yg sering dipakai), stages, paralel, atau matrix
//Jadi ketika sudah tambahkan stages lagi dalam stage, maka tidak bisa digabung dengan steps misalnya

//Parallel
//Di kondisi tertentu, kadang ingin stages berjalan secara parallel
//Secara default parallel akan menunggu semua proses selesai, walaupun ada salah stage yang error
//Namun jika ingin otomatis stop semua proses stage ketika error disalah satu stage, bisa tambahkan perintah failFast / tambah parallelAlwaysFailFast() di option
//Saat menggunakan parallel, bisa tambah agent di stage atasnya, oleh karena itu perlu tentukan di stiap stage parallelnya

//Matrix
//Adalah fitur untuk mendefinisikan multidimensi matrix yang berisi kombinasi name-value, dan dijalankan secara parallel
//Matrix sangat powerfull, karena bisa menjalankan stage secara parallel dengan kombinasi matrix yang sudah ditentukan
//Karena Matrix berjalan parallel, sama seperti parallel juga bisa menggunakan option failFast/parallelAlwaysFailFast()
//Saat membuat axis di matrix, secara otomatis nanti stage akan di build menggunakan kombinasi dari matrix axis value tersebut, atau disebut Matrix Cell
//Pada kode yg dibuat, artinya dari dua axis, akan bisa jadi beberapa kombinasi OS + ARC
//linux 32, linux 64, windows 32, windows 64, mac 32, mac 64
//Secara otomatis di Stage bisa mengambil data axis dari environment variable
//Matrix juga memiliki perintah exclude, jika kita ingin meng-exclude cell tertentu
//Misal ingin meng exclude mac 32, karena misal sudah tidak ada versi mac 32

//Credentials Binding Plugin
//Sebelumnya sudah menggunakan perintah credentials() untuk mengambil data dari Jenkins Credentials secara aman
//Namun kadang-kadang ingin menggunakan Credentials hanya pada bagian tertentu, dan tidak ingin mengekspos nya ke environment variable
//Ini bisa menggunakan plugin Credentials Bindings
plugins.jenkins.io/credentials-binding/
jenkins.io/doc/pipeline/steps/credentials-binding/

//Multi Branch Pipeline
//Sebelumnya hanya membuat Job dari repository Git dengan branch yang sudah ditentukan
//Pada kenyataannya, hanya menggunakan satu branch tidaklah terlalu bermanfaat,jika ingin secara otomatis proses Job berjalan di semua branch di repository Git
//Jenkins Pipeline memiliki fitur Multi Branch Pipeline, dimana bisa secara otomatis mendeteksi branch yang terdapat di Git
//Oleh karena itu jika terdapat branch baru, tidak perlu menambah Job secara manual, begitu pula jika menghapus branch, tidak perlu menghapus Job secara manual
//Khusus Multi Branch Pipeline, hanya bisa membuat pipeline dari Jenkinsfile, tidak bisa langsung di Job nya

//Pipeline Limitation
//Pipeline di Jenkins sebenarnya dijalankan dalam sebuah Groovy Function
//Sayangnya, ada maksimal baris yang diperbolehkan pada Groovy Function
//Oleh karena itu, tidak disarankan membuat pipeline yang sangat panjang dalam satu file
//Oleh karena itu ada baiknya perlu membuat yang namanya Jenkins Shared Library, yaitu fitur dimana bisa membuat library untuk pipeline, sehingga bisa digunakan ulang, atau dipisah-pisahkan kode pipeline nya
issues.jenkins.io/browse/JENKINS-37984