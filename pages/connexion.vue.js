var Connexion = Vue.component('Connexion',{
    template:`
       
       <div class="template">
      <main>
            <img src="img/fond2.png" alt="fond2" class="fond">
            <div class="connexion">
                <p class="texte_connexion">Nom d'utilisateur</p>
                <input type="text" name="name" id="nom_utilisateur" required>
                <p class="texte_connexion">Mot de passe</p>
                <input type="password" name="name" id="mdp" required>
                <button class="se_connecter" type="button">Se connecter</button>
            </div>
            <p class="pas_de_compte">Vous n'avez pas de compte Paydiaa ?</p>
            <div class="creation">
                <p class="texte_creation">Avatar</p>
                <section class="carousel">
                    <ul class="carousel-items">
                        <li class="carousel-item">
                            <img src="img/avatar1.png">
                        </li>
                        <li class="carousel-item">
                            <img src="img/avatar2.png">
                        </li>
                        <li class="carousel-item">
                            <img src="img/avatar3.png">
                        </li>
                        <li class="carousel-item">
                            <img src="img/avatar4.png">
                        </li>
                        <li class="carousel-item">
                            <img src="img/avatar5.png">
                        </li>
                        <li class="carousel-item">
                            <img src="img/avatar6.png">
                        </li>
                        <li class="carousel-item">
                            <img src="img/avatar7.png">
                        </li>
                        <li class="carousel-item">
                            <img src="img/avatar8.png">
                        </li>
                        <li class="carousel-item">
                            <img src="img/avatar9.png">
                        </li>
                        <li class="carousel-item">
                            <img src="img/avatar10.png">
                        </li>
                        <li class="carousel-item">
                            <img src="img/avatar11.png">
                        </li>
                        <li class="carousel-item">
                            <img src="img/avatar12.png">
                        </li>
                    </ul>
                </section>
                <p class="texte_creation">Nom d'utilisateur</p>
                <input type="text" name="name" id="nom_utilisateur2" required>
                <p class="texte_creation">Adresse mail</p>
                <input type="text" name="name" id="mail" required>
                <p class="texte_creation">Date de naissance</p>
                <div class="date_de_naissance">
                    <input type="text" name="name" id="jour" required>
                    <input type="text" name="name" id="mois" required>
                    <input type="text" name="name" id="annee" required>
                </div>
                <p class="texte_creation">Mot de passe</p>
                <input type="password" name="password" id="mdp2" required>
                <button id="voir">
                    <svg xmlns="http://www.w3.org/2000/svg" width="39.355" height="21.085" viewBox="0 0 39.355 21.085">
                        <g id="KOyY7w" transform="translate(-160.056 -161.938)">
                            <g id="Groupe_342" data-name="Groupe 342" transform="translate(160.056 161.938)">
                                <g id="Groupe_341" data-name="Groupe 341" transform="translate(0 0)">
                                    <path id="Trac??_3529" data-name="Trac?? 3529" d="M199.411,172.539c-5.664,5.834-11.749,10.518-20.258,10.485a19.59,19.59,0,0,1-8.994-2.485,33.914,33.914,0,0,1-10.1-8.053,33.846,33.846,0,0,1,11.035-8.493,20.218,20.218,0,0,1,8.168-2.049,20.016,20.016,0,0,1,9.284,2.157A34.52,34.52,0,0,1,199.411,172.539Zm-36.706-.064a29.874,29.874,0,0,0,11.629,7.692,16.431,16.431,0,0,0,11.344-.211,26.543,26.543,0,0,0,7.412-4.256c1.224-.985,2.381-2.053,3.641-3.146a30.176,30.176,0,0,0-11.467-7.672,15.747,15.747,0,0,0-7.946-.783C171.485,165.08,166.946,168.346,162.7,172.475Z" transform="translate(-160.056 -161.938)" fill="#586e59"/>
                                    <path id="Trac??_3530" data-name="Trac?? 3530" d="M219.767,183.7a7.553,7.553,0,1,1,7.544,7.555A7.534,7.534,0,0,1,219.767,183.7Zm7.552,6.106a6.12,6.12,0,1,0-6.117-6.1A6.129,6.129,0,0,0,227.319,189.81Z" transform="translate(-207.407 -173.191)" fill="#586e59"/>
                                    <path id="Trac??_3531" data-name="Trac?? 3531" d="M242.878,195.373c.009,2.043.75,2.661,2.589,2.222a3.416,3.416,0,0,1-.991,4.151,3.67,3.67,0,0,1-5.687-4.309A3.545,3.545,0,0,1,242.878,195.373Z" transform="translate(-222.248 -188.393)" fill="#586e59"/>
                                </g>
                            </g>
                        </g>
                    </svg>
                </button>
                <p class="texte_creation">Confirmation de mot de passe</p>
                <input type="password" name="password" id="mdp_confirm" required>
                <button class="se_connecter" type="button">Cr??er un compte</button>
            </div>
        </main>
</div>
       
    `,
    data(){
        return{}
    },
    methods: {}
});