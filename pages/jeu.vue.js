var jeu = Vue.component('jeu', {
    template: `

    <div class="template">
            <img src="img/fond5.png" alt="fond" class="fond">
            <h1 class="titre-règles-jeu">Règles de [jeu]</h1>
            <div class="cadre_jeu">
                <img class="image_cadre_jeu" src="img/la_bonne_paye.png" alt="jeu">
                <div>
                    <h4>Pré-requis</h4>
                    <ul>
                        <li>Un plateau de jeu composé de 31 cases correspondant aux 31 jours d’un mois</li>
                        <li>1 dé</li>
                        <li>6 Pions de couleur différente</li>
                        <li>16 cartes TRANSACTIONS</li>
                        <li>16 cartes PRETS</li>
                        <li>80 cartes COURRIER</li>
                        <li>6 Livrets d’épargne</li>
                        <li>1 Liasse de billet de banque</li>
                    </ul>
                </div>
            </div>
            <div class="regles">
                <div class="menu_deroulant">
                    <div class="section">
                        <div class="titre">Comment jouer ?</div>
                        <div class="contenu">
                            <ul>
                                <li>
                                    <p>Avant de démarrer la partie, les joueurs  décident du nombre de mois, c’est-à-dire du nombre de tours complets du plateau de jeu que va durer la partie. On peut décider de jouer pendant un mois, un trimestre voire même une année entière. Chaque joueur pose son pion sur la case Départ. Le jeu se déroule dans le sens des aiguilles d’une montre. A son tour de jeu, chaque joueur lance le dé et avance du nombre de cases correspondant au chiffre indiqué par le dé. A son tour de jeu, chaque joueur se retrouve donc sur une case dont il doit suivre les instructions. Pour jouer vous devez gérer au mieux votre budget pour cela vous avez la possibilité de faire des prêts auprès de la banque et aussi d’épargner votre argent.</p>
                                </li>
                                <li>
                                    <p>L’EPARGNE : Le banquier est responsable des opérations. Si un joueur possède une épargne il ne peut faire un emprunt auprès de la banque. L’épargnant met l’argent dans son livret. Si, par exemple, à la fin du mois il a épargné 1500 euros (ou 15 000 francs), il touchera 150 euros d’intérêts (ou 1500 francs); Attention, l’épargnant ne peut toucher ses intérêts à la fin du mois, que s’il a versé les sommes dans son livret avant le 23 du mois (avant la case 23). Après le 23 du mois, il est en effet interdit de mettre de l’argent dans son livret. En revanche, si au cours du mois, il fait un retrait quelconque, il doit verser immédiatement 100 euros (ou 1000 francs) à la Banque, quel que soit le montant de son retrait.</p>
                                </li>
                                <li>
                                    <p>LES PRETS : Les emprunts se font également à la Banque. Le montant d’un prêt est  de 1000 euros (ou 10 000 francs). Le banquier donne l’argent à l’emprunteur avec une carte de PRÊT qui sert de contrôle permanent. A la fin du mois, l’emprunteur paye les intérêts qui sont dus à la Banque. Les sommes empruntées peuvent être conservées par l’emprunteur sans les rembourser à la Banque pendant le mois durant lequel l’emprunt a été contracté et durant les 2 mois suivants.  Mais le joueur endetté doit obligatoirement rembourser son emprunt le 31 du deuxième mois, sans recourir évidemment à un autre emprunt à la Banque à ce moment-là !</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="section">
                        <div class="titre">Préparation du jeu</div>
                        <div class="contenu">
                            <ul>
                                <li><p>Les cartes PRETS doivent être séparées des cartes TRANSACTION. Les cartes COURRIERS, elles, doivent être mélangées.<br>
                                        Pour commencer il vous faut définir un joueur pour tenir la banque. Ce joueur doit distribuer à chacun des joueurs :<br>
                                        <br>
                                        - 650 euros<br>
                                        - Un pion<br>
                                        - Un Livret d’épargne<br>
                                        - Le banquier doit poser le tas de cartes COURRIERS et celui des cartes TRANSACTION sur la table, faces cachées. Il garde prêt de lui les cartes PRET.<br></p></li>
                            </ul>
                        </div>
                    </div>
                    <div class="section">
                        <div class="titre">Les cartes du jeu</div>
                        <div class="contenu">
                            <ul>
                                <li>
                                                                <p>Cartes TRANSACTIONS :<br>           
                                 Vous pouvez en acquérir une à chaque fois que vous tombez sur une case correspondante.
                                Si par la suite vous tombez sur une case vente, vous pouvez vendre votre carte et ainsi empocher le bénéfice inscrit sur la carte de votre bien. Vous avez également une chance de remporter une commission. Celle-ci sera versée au joueur qui fera le plus grand score en lançant le dé. C’est la banque qui paie cette commission.</p>
                                </li>
                                <li><p>Cartes COURRIER : <br>
                                Ces cartes donnent des informations par courrier. On les obtient les jours du facteur. Les cartes postales et les annonces publicitaires n’ont pas d’autre but que de vous divertir. Les factures, les frais d’entretien, les honoraires de médecin, les primes d’assurance en revanche doivent être payées à la banque à la fin du mois.</p></li>
                                <li><p>Carte EN CAS DE BESOIN… :<br>
                                 Cette carte vous permet lorsque vous avez des dettes de lancer le dé et miser une somme inférieure à 200 euros (ou 2000 francs). Si vous obtenez un 5 ou un 6, la Banque vous paye 10 fois votre mise. Mais si vous obtenez un point inférieur, vous devez verser votre mise à la Caisse de Secours.</p></li>
                            </ul>
                        </div>
                    </div>
                    <div class="section">
                        <div class="titre">Les différentes cases du jeu</div>
                        <div class="contenu">
                            <ul>
                                <li><p>Cases DIMANCHE : Cette case vous permet de vous reposer, vous devez donc passer votre tour.</p></li>
                                <li><p>Cases JOURS DE COURRIER : Quand vous tombez sur cette carte, vous devez piocher le nombre de cartes indiqué sur l’enveloppe du facteur, dans le tas de carte COURRIER.</p></li>
                                <li><p>Cases TRANSACTION : Cette case implique que vous piochiez une carte TRANSACTION.<br>
                                        Cette carte vous propose de faire une affaire. Si l’achat proposé vous intéresse, versez à la Banque le prix indiqué sous le dessin, à gauche, PRIX D’ACHAT. Sinon remettez la carte sous le paquet. Si vous manquez d’argent pour cet achat, retirez-en de votre livret d’EPARGNE, demandez un PRÊT ou encore combinez ces deux opérations.<br>
                                        Par ailleurs, sachez que pour tout retrait d’argent de votre livret d’épargne, vous devrez verser à la Banque une somme forfaitaire de 100 euros (ou 1000 francs).</p></li>
                                <li><p>Cases FAITES VOS VENTES : Lorsque vous tombez sur cette case vous pouvez vendre à la banque l’une de vos cartes TRANSACTIONS, à la VALEUR REELLE indiquée sur la carte. Le banquier vous donne alors la valeur indiquée, la carte TRANSACTIONS est alors remise en dessous du tas de cartes TRANSACTIONS.</p></li>
                                <li><p>Cases BILLETS GAGNANTS A LA LOTERIE : si vous tombez sur le mardi 30, jour de validation des billets, et si vous détenez un ou plusieurs billets de Loterie, vous avez gagné !<br>
                                        La Banque vous règle alors le montant gagné et vous remettez vos billets sous le paquet de cartes COURRIER.<br>
                                        Attention, les billets ne sont valables qu’un mois. Lorsque vous arrivez au 31 du mois, s’il vous reste des billets de Loterie, remettez-les sous le paquet de cartes  COURRIER.</p></li>
                                <li><p>Case PARTIE DE DÉ : Cette case se trouve sur le 10 du mois, lorsque vous tombez dessus une partie de dé est organisée.<br>
                                        Tous les joueurs lancent le dé, celui qui obtient le meilleur score gagne 200 euros (ou 2000 francs) payés par la Banque.</p></li>
                                <li><p>Case CAISSE ELECTORALE : Lorsque vous tombez sur cette case, TOUS les jours versent 100 euros (ou 1000 francs) à la caisse.<br>
                                        La caisse électorale comme la caisse de secours vous oblige à mettre une somme d’argent appelée POT au centre du jeu. C’est le premier joueur qui fait 6 avec le dé qui obtient l’ensemble du pot.</p></li>
                                <li><p>Case CHANGEMENT D’HEURE : Si un joueur tombe sur cette case tout le monde recule d’une case et suit les indications de la nouvelle case où il se trouve. Le joueur qui se trouve sur la case DÉPART retourne au mercredi 31 et encaisse de nouveau 650 euros de la Banque. Mais si sa position l’oblige à reculer sur le CHANGEMENT D’HEURE, il saute cette case et tombe alors sur une case TRANSACTIONS.</p></li>
                                <li><p>Case JOUR DE PAYE : arrêtez-vous y, coûte que coûte, même si les points de dé sont supérieurs au nombre de cases qui vous en sépare et agissez dans l’ordre suivant:<br>
                                        1. Recevez 650 euros (ou 6500 francs) de la Banque.<br>
                                        2. Si vous avez de l’argent dans votre livret d’épargne, récupérez les intérêts.<br>
                                        3. Si vous avez fait un emprunt à la banque, payez vos intérêts d’emprunt.<br>
                                        4. Réglez toutes les factures accumulées en piochant les cartes COURRIER au fil du mois.<br>
                                        5. Remboursez ou non tout ou partie de vos prêts.<br>
                                        6. Si vous le souhaitez, vous pouvez retirer de l’argent de votre livret d’EPARGNE ou, au contraire, en ajouter.<br>
                                        7. Remettez au banquier les cartes BILLETS DE LOTERIE qui n’ont pas été validées le 30 du mois ainsi que les cartes postales ou publicitaires. Elles ne serviront plus.<br>
                                        8. Faites noter par le banquier le mois que vous allez commencer et placez votre pion au Départ.</p></li>
                            </ul>    
                        </div>
                    </div>
                </div>
            </div>
     </div>
     

    
    `,


    data() {
        return {}
    },
    methods: {}
});