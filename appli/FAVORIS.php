<?php
require_once 'JEU.php';


/* Generated from GenMyModel */

class FAVORIS extends JEU {
	public $id_membre;

    /**
     * @return mixed
     */
    public function getIdMembre()
    {
        return $this->id_membre;
    }

    /**
     * @param mixed $id_membre
     */
    public function setIdMembre($id_membre)
    {
        $this->id_membre = $id_membre;
    }

    /**
     * @return mixed
     */
    public function getDateFavori()
    {
        return $this->date_favori;
    }

    /**
     * @param mixed $date_favori
     */
    public function setDateFavori($date_favori)
    {
        $this->date_favori = $date_favori;
    }

    /**
     * @return mixed
     */
    public function getIdJeu()
    {
        return $this->id_jeu;
    }

    /**
     * @param mixed $id_jeu
     */
    public function setIdJeu($id_jeu)
    {
        $this->id_jeu = $id_jeu;
    }

    /**
     * @return mixed
     */
    public function getNomJeu()
    {
        return $this->nom_jeu;
    }

    /**
     * @param mixed $nom_jeu
     */
    public function setNomJeu($nom_jeu)
    {
        $this->nom_jeu = $nom_jeu;
    }

    /**
     * @return mixed
     */
    public function getDateJeu()
    {
        return $this->date_jeu;
    }

    /**
     * @param mixed $date_jeu
     */
    public function setDateJeu($date_jeu)
    {
        $this->date_jeu = $date_jeu;
    }

    /**
     * @return mixed
     */
    public function getDureeJeu()
    {
        return $this->duree_jeu;
    }

    /**
     * @param mixed $duree_jeu
     */
    public function setDureeJeu($duree_jeu)
    {
        $this->duree_jeu = $duree_jeu;
    }

    /**
     * @return mixed
     */
    public function getAgeJeu()
    {
        return $this->age_jeu;
    }

    /**
     * @param mixed $age_jeu
     */
    public function setAgeJeu($age_jeu)
    {
        $this->age_jeu = $age_jeu;
    }

    /**
     * @return mixed
     */
    public function getCommentaires()
    {
        return $this->commentaires;
    }

    /**
     * @param mixed $commentaires
     */
    public function setCommentaires($commentaires)
    {
        $this->commentaires = $commentaires;
    }

    /**
     * @return mixed
     */
    public function getCategorie()
    {
        return $this->categorie;
    }

    /**
     * @param mixed $categorie
     */
    public function setCategorie($categorie)
    {
        $this->categorie = $categorie;
    }

    /**
     * @return mixed
     */
    public function getNombreJoueur()
    {
        return $this->nombre_Joueur;
    }

    /**
     * @param mixed $nombre_Joueur
     */
    public function setNombreJoueur($nombre_Joueur)
    {
        $this->nombre_Joueur = $nombre_Joueur;
    }

    /**
     * @return mixed
     */
    public function getLibelleJeu()
    {
        return $this->libelle_jeu;
    }

    /**
     * @param mixed $libelle_jeu
     */
    public function setLibelleJeu($libelle_jeu)
    {
        $this->libelle_jeu = $libelle_jeu;
    }
	public $date_favori;
	
}
