<?php
require_once 'COMPTE.php';

/* Generated from GenMyModel */

class ÉMETTEUR extends COMPTE {
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
    public function getPseudo()
    {
        return $this->pseudo;
    }

    /**
     * @param mixed $pseudo
     */
    public function setPseudo($pseudo)
    {
        $this->pseudo = $pseudo;
    }

    /**
     * @return mixed
     */
    public function getLibelleMembre()
    {
        return $this->libelle_membre;
    }

    /**
     * @param mixed $libelle_membre
     */
    public function setLibelleMembre($libelle_membre)
    {
        $this->libelle_membre = $libelle_membre;
    }

    /**
     * @return mixed
     */
    public function getDateCreation()
    {
        return $this->date_creation;
    }

    /**
     * @param mixed $date_creation
     */
    public function setDateCreation($date_creation)
    {
        $this->date_creation = $date_creation;
    }

    /**
     * @return mixed
     */
    public function getMotDePasse()
    {
        return $this->mot_de_passe;
    }

    /**
     * @param mixed $mot_de_passe
     */
    public function setMotDePasse($mot_de_passe)
    {
        $this->mot_de_passe = $mot_de_passe;
    }

    /**
     * @return mixed
     */
    public function getCategoriePreferee()
    {
        return $this->categorie_preferee;
    }

    /**
     * @param mixed $categorie_preferee
     */
    public function setCategoriePreferee($categorie_preferee)
    {
        $this->categorie_preferee = $categorie_preferee;
    }

    /**
     * @return mixed
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @param mixed $type
     */
    public function setType($type)
    {
        $this->type = $type;
    }

    /**
     * @return mixed
     */
    public function getRole()
    {
        return $this->role;
    }

    /**
     * @param mixed $role
     */
    public function setRole($role)
    {
        $this->role = $role;
    }

    /**
     * @return mixed
     */
    public function getNom()
    {
        return $this->nom;
    }

    /**
     * @param mixed $nom
     */
    public function setNom($nom)
    {
        $this->nom = $nom;
    }

    /**
     * @return mixed
     */
    public function getPrenom()
    {
        return $this->prenom;
    }

    /**
     * @param mixed $prenom
     */
    public function setPrenom($prenom)
    {
        $this->prenom = $prenom;
    }

    /**
     * @return mixed
     */
    public function getAvatar()
    {
        return $this->avatar;
    }

    /**
     * @param mixed $avatar
     */
    public function setAvatar($avatar)
    {
        $this->avatar = $avatar;
    }

    /**
     * @return mixed
     */
    public function getAdresseMail()
    {
        return $this->adresse_mail;
    }

    /**
     * @param mixed $adresse_mail
     */
    public function setAdresseMail($adresse_mail)
    {
        $this->adresse_mail = $adresse_mail;
    }

    /**
     * @return mixed
     */
    public function getIdMembreReceveur()
    {
        return $this->id_membre_receveur;
    }

    /**
     * @param mixed $id_membre_receveur
     */
    public function setIdMembreReceveur($id_membre_receveur)
    {
        $this->id_membre_receveur = $id_membre_receveur;
    }

    /**
     * @return mixed
     */
    public function getDateCommentaire()
    {
        return $this->date_Commentaire;
    }

    /**
     * @param mixed $date_Commentaire
     */
    public function setDateCommentaire($date_Commentaire)
    {
        $this->date_Commentaire = $date_Commentaire;
    }

    /**
     * @return mixed
     */
    public function getText()
    {
        return $this->text;
    }

    /**
     * @param mixed $text
     */
    public function setText($text)
    {
        $this->text = $text;
    }
	public $id_membre_receveur;
	public $date_Commentaire;
	public $text;
	
}
