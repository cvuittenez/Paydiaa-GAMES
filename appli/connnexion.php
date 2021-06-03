<?php

$parametres = parse_ini_file("param/param.ini");


$pdo = new PDO(
    $parametres['dsn'],
    $parametres['user'],
    $parametres['psw']
);

$host = $parametres['host'];
?>
