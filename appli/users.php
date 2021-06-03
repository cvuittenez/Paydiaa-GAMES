<?php
header("Access-Control-Allow-Origin: *");

require_once 'classes/COMPTE.php';
require_once 'connexion.php';

// Liste des villageois, de leur spécialité et lieu d'habitation
$sql = "SELECT * FROM COMPTE";
// Préparation de la requête
$requete = $pdo->prepare($sql);
// Tableau qui contiendra la liste des villageois
$liste = array();

// Si la requête renvoie quelque chose
if ($requete->execute()) {
    // Parcours des résultats
    while ($donnees = $requete->fetch()) {
        $membre = new COMPTE(
            $donnees['ID_MEMBRE'],
            $donnees['PSEUDO'],
            $donnees['NOM'],
            $donnees['PRENOM'],
            $donnees['ADRESSE_MAIL'],
            $donnees['MOT_DE_PASSE'],
            $donnees['CATEGORIE_PREFEREE'],
            $donnees['ROLE'],
            $donnees['AVATAR'],
            $donnees['DATE_CREATION'],
            $donnees['LIBELLE_MEMBRE']
        );
        $liste[] = $membre;

    }
}
// Encodage et affichage du flux Json
echo json_encode($liste);
exit();

?>
