<?php
$page = (isset($_GET['page'])) ? $_GET['page'] : '';

switch($page){
  case 'home': // $page == home (jika isi dari $page adalah home)
  include "views/home.php"; // load file home.php yang ada di folder views
  break;
  
  case 'about': // $page == about (jika isi dari $page adalah about)
  include "views/about.php"; // load file about.php yang ada di folder views
  break;

  case 'news': // $page == news (jika isi dari $page adalah news)
  include "views/news.php"; // load file news.php yang ada di folder views
  break;

  case 'project': // $page == project (jika isi dari $page adalah project)
  include "views/project.php"; // load file news.php yang ada di folder views
  break;

  case 'login': // $page == login (jika isi dari $page adalah login)
  include "views/login.php"; // load file news.php yang ada di folder views
  break;

  default: // Ini untuk set default jika isi dari $page tidak ada pada kondisi diatas
  include "views/home.php";
}
?>