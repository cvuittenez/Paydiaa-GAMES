<?php

/* Generated from GenMyModel */

class COMMENTAIRE {
	public $text;
	public $pseudo;
	public $avatar;

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
    public function getIdCommentaire()
    {
        return $this->id_commentaire;
    }

    /**
     * @param mixed $id_commentaire
     */
    public function setIdCommentaire($id_commentaire)
    {
        $this->id_commentaire = $id_commentaire;
    }
	public $id_membre;
	public $id_jeu;
	public $id_commentaire;
	
}
