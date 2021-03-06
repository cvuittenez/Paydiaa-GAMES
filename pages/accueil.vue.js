var Accueil = Vue.component('Accueil',{
    template:`
    <div class="template">
    <main>
            <img src="img/fond.png" alt="fond" class="fond">
            <div class="barre-de-recherche">
                <input type="search" id="site-search" name="q" aria-label="Rechercher un jeu" placeholder="Rechercher un jeu...">
                <router-link class="voir-jeux" to="/jeux">Voir tous les jeux</router-link>
            </div>
            <div class="jeux_semaine">
                <h2>Jeux de la semaine</h2>
                <div class="contenu_semaine"   v-for="accueil in accueilList" v-bind::item="accueil" ::key="accueil.id">
                    <div class="contenu_gauche">
                        <img v-bind:src="accueil.image">
                        <button class="voir_règles" type="button">Voir les règles</button>
                    </div>
                    <div class="contenu_droite">
                        <div>
                            <h4>{{accueil.titre}}</h4>
                            <p>{{accueil.description}}({{accueil.joueurs}} joueurs minimum)</p>
                        </div>
                        <router-link to="/jeu">
                        <button class="voir_jeu" type="button">Voir la page du jeu</button>
                        </router-link>
                    </div>
                </div>
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
        </main>
    
    
</div>
    
    
    
    
    `,
    data() {
        return {
            accueilList: []
        }
    },
    mounted() {
        axios.get('./json/accueil.json')
            .then(response => {
                this.accueilList = response.data;
                console.log("Accueil list", this.accueilList);
            })
            .catch(function (error){
                console.log(error)
            })
    },
    methods: {}
});