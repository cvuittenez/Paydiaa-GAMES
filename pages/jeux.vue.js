var Jeux = Vue.component('Jeux',{
    template:`

        <div class="template">

        <main>
            <img src="img/fond3.png" alt="fond3" class="fond">
            <div class="barre-de-recherche">
                <input type="search" id="site-search" name="q" aria-label="Rechercher un jeu" placeholder="Rechercher un jeu...">
            </div>
            <h3>CATÉGORIES DE JEUX</h3>
            <div class="cartes">
                <div class="container">
                    <div class="box">
                        <h2 class="name">Jeux en famille</h2>
                        <a href="#" class="infos">Accéder</a>
                        <div class="circle"></div>
                        <img src="img/carte_jeux_en_famille.png" class="jeu">
                    </div>
                    <div class="box">
                        <h2 class="name">Jeux de cartes classiques</h2>
                        <a href="#" class="infos">Accéder</a>
                        <div class="circle"></div>
                        <img src="img/carte_jeux_de_cartes_classiques.png" class="jeu">
                    </div>
                    <div class="box">
                        <h2 class="name">Jeux de stratégie</h2>
                        <a href="#" class="infos">Accéder</a>
                        <div class="circle"></div>
                        <img src="img/carte_jeux_de_strategie.png" class="jeu">
                    </div>
                    <div class="box">
                        <h2 class="name">Jeux pour enfants</h2>
                        <a href="#" class="infos">Accéder</a>
                        <div class="circle"></div>
                        <img src="img/carte_jeux_pour_enfants.png" class="jeu">
                    </div>
                    <div class="box">
                        <h2 class="name">Jeux de bars</h2>
                        <a href="#" class="infos">Accéder</a>
                        <div class="circle"></div>
                        <img src="img/carte_jeux_de_bars.png" class="jeu">
                    </div>
                    <div class="box">
                        <h2 class="name">Jeux de rôle</h2>
                        <a href="#" class="infos">Accéder</a>
                        <div class="circle"></div>
                        <img src="img/carte_jeux_de_role.png" class="jeu">
                    </div>
                    <div class="box">
                        <h2 class="name">Jeux d'argent</h2>
                        <a href="#" class="infos">Accéder</a>
                        <div class="circle"></div>
                        <img src="img/carte_jeux_argent.png" class="jeu">
                    </div>
                    <div class="box">
                        <h2 class="name">Jeux de diplomatie</h2>
                        <a href="#" class="infos">Accéder</a>
                        <div class="circle"></div>
                        <img src="img/carte_jeux_diplomatie.png" class="jeu">
                    </div>
                    <div class="box">
                        <h2 class="name">Jeux d'ambiance</h2>
                        <a href="#" class="infos">Accéder</a>
                        <div class="circle"></div>
                        <img src="img/carte_jeux_ambiance.png" class="jeu">
                    </div>
                </div>
            </div>
            <h3>JEUX</h3>
            <div class="cartes">
                <div class="container">
                    <div class="box">
                        <h2 class="name">UNO</h2>
                        <a href="#" class="infos">Accéder</a>
                        <div class="circle"></div>
                        <img src="img/jeu_uno.jpg" class="jeu">
                    </div>
                    <div class="box">
                        <h2 class="name">RISK</h2>
                        <a href="#" class="infos">Accéder</a>
                        <div class="circle"></div>
                        <img src="img/jeu_risk.png" class="jeu">
                    </div>
                    <div class="box">
                        <h2 class="name">Monopoly</h2>
                        <a href="#" class="infos">Accéder</a>
                        <div class="circle"></div>
                        <img src="img/jeu_monopoly.png" class="jeu">
                    </div>
                    <div class="box">
                        <h2 class="name">La Bonne Paye</h2>
                        <router-link to="/jeu" class="infos">Accéder</router-link>
                        <div class="circle"></div>
                        <img src="img/jeu_la_bonne_paye.png" class="jeu">
                    </div>
                    <div class="box">
                        <h2 class="name">Échecs</h2>
                        <a href="#" class="infos">Accéder</a>
                        <div class="circle"></div>
                        <img src="img/jeu_echecs.jpg" class="jeu">
                    </div>
                    <div class="box">
                        <h2 class="name">Jungle Speed</h2>
                        <a href="#" class="infos">Accéder</a>
                        <div class="circle"></div>
                        <img src="img/jeu_jungle_speed.jpg" class="jeu">
                    </div>
                    <div class="box">
                        <h2 class="name">Petits Chevaux</h2>
                        <a href="#" class="infos">Accéder</a>
                        <div class="circle"></div>
                        <img src="img/jeu_petits_chevaux.png" class="jeu">
                    </div>
                    <div class="box">
                        <h2 class="name">Poker</h2>
                        <a href="#" class="infos">Accéder</a>
                        <div class="circle"></div>
                        <img src="img/jeu_poker.jpeg" class="jeu">
                    </div>
                    <div class="box">
                        <h2 class="name">Cluedo</h2>
                        <a href="#" class="infos">Accéder</a>
                        <div class="circle"></div>
                        <img src="img/jeu_cluedo.png" class="jeu">
                    </div>
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