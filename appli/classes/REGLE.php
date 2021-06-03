<?php

/* Generated from GenMyModel */

class REGLE {
	public $id_regle;
	public $nom_regle;

    /**
     * @return mixed
     */
    public function getIdRegle()
    {
        return $this->id_regle;
    }

    /**
     * @param mixed $id_regle
     */
    public function setIdRegle($id_regle)
    {
        $this->id_regle = $id_regle;
    }
	public $libelle_regle;
	public $id_jeu;
	public $id_membre;
	
}
