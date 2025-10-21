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