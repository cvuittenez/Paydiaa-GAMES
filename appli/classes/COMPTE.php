<?php


class COMPTE implements JsonSerializable
{
    private $id_membre =0;
    private $pseudo = null;
    private $nom = null;
    private $prenom = null;
    private $adresse_mail = null;
    private $mot_de_passe = null;
    private $avatar = null;
    private $date_creation = false;
    private $role = null;
    private $categorie_preferee = false;
    private $libelle_membre = false;

    public function __construct($id_membre = 0, $pseudo = null, $nom = null, $prenom = null, $adresse_mail = null, $mot_de_passe = null, $avatar = null, $date_creation = false, $role = null, $categorie_preferee=null, $libelle_membre=null)
    {
        $this->id_membre            = $id_membre;
        $this->pseudo               = $pseudo;
        $this->nom                  = $nom;
        $this->avatar               = $avatar;
        $this->prenom               = $prenom;
        $this->date_creation        = $date_creation;
        $this->adresse_mail         = $adresse_mail;
        $this->mot_de_passe         = $mot_de_passe;
        $this->role                 = $role;
        $this->categorie_preferee   = $categorie_preferee;
        $this->libelle_membre       = $libelle_membre;
    }

    public function getIdMembre(){
        return $this->id_membre;
    }

    public function setIdMembre($id_membre)
    {
        $this->id_membre = $id_membre;
    }

    public function getPseudo()
    {
        return $this->pseudo;
    }

    public function setPseudo($pseudo)
    {
        $this->pseudo = $pseudo;
    }

    public function getNom()
    {
        return $this->nom;
    }

    public function setNom($nom)
    {
        $this->nom = $nom;
    }

    public function getPrenom()
    {
        return $this->prenom;
    }

    public function setPrenom($prenom)
    {
        $this->prenom = $prenom;

    }

    public function getRole($role)
    {
        return $this->role;

    }

    public function setRole($role)
    {
        $this->role = $role;

    }

    public function getCategoriepreferee($categorie_preferee)
    {
        return $this->categorie_preferee;

    }

    public function setCategorieperferee($categorie_preferee)
    {
        $this->role = $categorie_preferee;

    }

    public function getLibellemembre($libelle_membre)
    {
        return $this->libelle_membre;

    }

    public function setLibellemembre($libelle_membre)
    {
        $this->role = $libelle_membre;

    }

    public function getAdresseMail()
    {
        return $this->adresse_mail;
    }

    public function setAdresseMail($adresse_mail)
    {
        $this->adresse_mail = $adresse_mail;
    }

    public function getMotDePasse()
    {
        return $this->mot_de_passe;
    }

    public function setMotDePasse($mot_de_passe)
    {
        $this->mot_de_passe = $mot_de_passe;
    }

    public function getAvatar(){
        return $this->avatar;
    }

    public function setAvatar($avatar)
    {
        $this->avatar = $avatar;

    }

    public function getDateCreation()
    {
        return $this->date_creation;
    }

    public function setDateCreation($date_creation)
    {
        $this->date_creation = $date_creation;
    }

    public function jsonSerialize(){
        return get_object_vars($this);
    }

}
?>