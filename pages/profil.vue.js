var Profil = Vue.component('Profil',{
    template:` 
    <div class="template">
        <main>
            <img src="img/fond6.png" alt="fond" class="fond">
            <div class="profil">
                <img src="img/avatar_placeholder.png" alt="photo_de_profil" class="pdp">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5" height="254.167" viewBox="0 0 1.5 254.167">
                    <line id="Ligne_36" data-name="Ligne 36" x2="0.5" y2="254.165" transform="translate(0.5 0.001)" fill="none" stroke="#000" stroke-width="1"/>
                </svg>
                <div class="pseudo_infos">
                    <h2 class="pseudo">Jean77</h2>
                    <p class="infos_profil">Membre depuis Juillet 2020</p>
                </div>
                <div id="favoris">
                    <img src="img/favoris_jeux_de_role.png" alt="jeux de role" class="favoris1">
                    <img src="img/favoris_la_bonne_paye.png" alt="la bonne paye" class="favoris2">
                    <img src="img/favoris_risk.png" alt="risk" class="favoris3">
                    <button>Modifier les informations</button>
                </div>
            </div>
            <button class="bouton_pdp">Modifier l'image de profil</button>
            <h2 class="derniers_avis">Derniers avis</h2>
            <div class="avis">
                <div class="avis1">
                    <p class="jeu_avis">Risk</p>
                    <p class="note_avis">★★★★★</p>
                    <p class="commentaire_avis">"Ce jeu de stratégie est chanmé"</p>
                </div>
                <div class="avis2">
                    <p class="jeu_avis">La Bonne Paye</p>
                    <p class="note_avis">★★★★☆</p>
                    <p class="commentaire_avis">"Jeu très sympas en famille, je recommande"</p>
                </div>
                <div class="avis3">
                    <p class="jeu_avis">UNO</p>
                    <p class="note_avis">★☆☆☆☆</p>
                    <p class="commentaire_avis">"Je me suis pris un +4 j'ai envie de crever"</p>
                </div>
            </div>
        </main>
    </div>    
           `,
    data(){
        return{}
    },
    methods: {}
});