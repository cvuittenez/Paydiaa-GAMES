var Profil = Vue.component('Profil',{
    template:` 
 
 <header>
            <div className="logo_header">
                <a href="../index.html">
                    <img src="../img/logo.png" title="Accueil" width="65" alt="Logo Paydiaa Games">
                </a>
            </div>
            <nav className="boutons_header">
                <ul className="boutons_header_ul">
                    <li className="boutons_header_li">
                        <a className="boutons_header_accueil" title="Accueil">
                            PAYDIAA GAMES
                        </a>
                    </li>
                    <li className="boutons_header_li">
                        <a href="jeux.html" className="boutons_header_a" title="Jeux">
                            Jeux
                        </a>
                    </li>
                    <li className="boutons_header_li">
                        <a className="boutons_header_a" title="Boutique">
                            Boutique
                        </a>
                    </li>
                    <li className="boutons_header_li">
                        <a className="boutons_header_a" title="Contact">
                            Contact
                        </a>
                    </li>
                    <li className="boutons_header_li">
                        <a className="boutons_header_a" title="Profil" href="connexion.html">
                            Profil
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <img src="../img/fond6.png" alt="fond" className="fond">
            <div className="profil">
                <img src="../img/avatar_placeholder.png" alt="photo_de_profil" className="pdp">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5" height="254.167" viewBox="0 0 1.5 254.167">
                    <line id="Ligne_36" data-name="Ligne 36" x2="0.5" y2="254.165" transform="translate(0.5 0.001)" fill="none" stroke="#000" stroke-width="1"/>
                </svg>
                <div className="pseudo_infos">
                    <h2 className="pseudo">Jean77</h2>
                    <p className="infos_profil">Membre depuis Juillet 2020</p>
                </div>
                <div id="favoris">
                    <img src="../img/favoris_jeux_de_role.png" alt="jeux de role" className="favoris1">
                    <img src="../img/favoris_la_bonne_paye.png" alt="la bonne paye" className="favoris2">
                    <img src="../img/favoris_risk.png" alt="risk" className="favoris3">
                    <button>Modifier les informations</button>
                </div>
            </div>
            <button className="bouton_pdp">Modifier l'image de profil</button>
            <h2 className="derniers_avis">Derniers avis</h2>
            <div className="avis">
                <div className="avis1">
                    <p className="jeu_avis">Risk</p>
                    <p className="note_avis">★★★★★</p>
                    <p className="commentaire_avis">"Ce jeu de stratégie est chanmé"</p>
                </div>
                <div className="avis2">
                    <p className="jeu_avis">La Bonne Paye</p>
                    <p className="note_avis">★★★★☆</p>
                    <p className="commentaire_avis">"Jeu très sympas en famille, je recommande"</p>
                </div>
                <div className="avis3">
                    <p className="jeu_avis">UNO</p>
                    <p className="note_avis">★☆☆☆☆</p>
                    <p className="commentaire_avis">"Je me suis pris un +4 j'ai envie de crever"</p>
                </div>
            </div>
        </main>
           `,
    data(){
        return{}
    },
    methods: {}
});