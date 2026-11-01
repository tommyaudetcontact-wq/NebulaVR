# Nebula VR

Page officielle de téléchargement du prototype Quest et Android mobile : **https://tommyaudetcontact-wq.github.io/NebulaVR/**

Les APK sont distribués dans les [Releases](https://github.com/tommyaudetcontact-wq/NebulaVR/releases). La page se trouve dans `docs/`; `docs/version.json` est le manifeste public consulté par les deux applications pour signaler les mises à jour.

## Coop (jusqu’à 4)

Chaque joueur ouvre automatiquement un salon personnel au lancement. Dans le menu, choisir « Même Wi-Fi » ou « Internet », puis « Rejoindre » à côté d'un salon. L'hôte choisit le niveau et lance la partie; on peut aussi rejoindre une partie en cours. Les salons affichent leur nombre de joueurs et disparaissent après la fermeture ou l'expiration de leur présence. Le trafic de jeu reste P2P : UPnP tente l'ouverture du port de l'hôte; certains routeurs et les réseaux CGNAT peuvent bloquer cette connexion. Pas de relais ni de migration d'hôte dans cette version.

## État de la version

Prototype de développement. La validation automatique inclut un hôte et trois clients locaux, le partage des gestes et des dégâts, le générateur de niveaux et les commandes tactiles. La validation en situation réelle Quest + téléphone, sur des réseaux Internet distincts, reste nécessaire. Les 72 fps constants ne sont pas certifiés.

Les mises à jour sont détectées au lancement. Le téléchargement et l’installation restent confirmés par le joueur dans Android. Le paquet Quest conserve l’identifiant `com.nova.auroravr` pour pouvoir mettre à jour le prototype existant; le nom affiché est Nebula VR. Le paquet mobile est `com.nebula.adventure.mobile`.

## Salons 0.22
Le menu ouvre un salon personnel automatiquement. La liste Même Wi-Fi utilise la découverte UDP; la liste Internet utilise un annuaire hébergé avec heartbeat et expiration des salons. Rejoindre résout l’adresse sans saisie manuelle. Le trafic de jeu reste direct et dépend de la joignabilité de l’hôte (pas de relais CGNAT). Le nom et le nombre de joueurs sont visibles dans la liste; les adresses ne sont retournées que lors de la demande de jonction.

## 0.23 — Menu et représentation
Menu de console spatiale avec portrait de Nebula, tir glissé sur Android et attaque rapide à la masse avec retour à l’arme précédente. Caméra mobile au-dessus de l’épaule droite, plus reculée. Les avatars distants gardent leur tête visible en VR; seuls les joueurs VR portent le casque. Protocole 22 : installer 0.23.0 sur tous les appareils.

## 0.24 — Corps et fluidité
Rotation cohérente des cuisses, genoux, bottes, hanches et queue. Le ragdoll conserve sa pose et son élan, avec des articulations aux vrais pivots et des pieds libres de suivre la chute. Les poses des alliés et des robots sont interpolées entre les paquets réseau. Sur Android, le grappin sélectionne un point accessible proche sans exiger de visée précise; la visée VR est conservée. Les boulons suivent un drain tourbillonnant vers la main. Utiliser 0.24.0 sur tous les appareils pour bénéficier de ces corrections.

## 0.25 — Combat mobile
Les robots humanoïdes combattent au fusil et reculent si le joueur s'approche trop; les petits robots gardent leur bond. Le tir mobile permet de faire pivoter la caméra avec le doigt maintenu sur le bouton, même en glissant à l'extérieur. Les projectiles ennemis partent du canon, avec l'orientation du fusil synchronisée en coop. Grenades et chargeurs explosifs mobiles suivent un arc sous la gravité. Le lancer physique VR reste conservé. **Protocole 23 : mettre tous les appareils en 0.25.0 pour jouer ensemble.**

## 0.26 — Héliopolis, niveau 2
Choisir **Niveau 2** dans le menu pour explorer une cité solaire de onze quartiers : 528 mètres de parcours, trafic aérien, chantier animé, monuments orbitaux, ascenseurs et traversées au grappin à un, deux puis trois ancrages. Les sentinelles expérimentales se repositionnent entre leurs rafales et réagissent aux impacts; les drones tombent physiquement. Décocher **Ennemis expérimentaux** remet les anciens robots dans ce niveau. Le niveau 1 et le mode procédural restent disponibles.

Le tir mobile conserve son doigt même quand le pouce de déplacement est relâché; une arme vide recharge automatiquement si le tir est maintenu. Résolution fixe et absence de flou temporel conservées. Le regroupement des décors réduit les appels de dessin, mais les **72 fps soutenus sur Quest restent à confirmer par des mesures casque porté en combat**. Protocole coop **24** : utiliser **0.26.0** sur tous les appareils.

## 0.27 — Gardien Hélios et corrections vidéo
Le blaster fonctionne désormais à la chaleur : douze tirs continus provoquent la surchauffe, le canon rougit puis refroidit progressivement, sans recharge manuelle. Le lance-pierre peut faire cinq rebonds, soit six contacts. Le niveau 2 propose des rampes sans petites marches bloquantes, deux enchaînements de plateformes en translation et un gardien volant qui tire des missiles.

Arbres remplacés par des monuments orbitaux, panneaux flottants et textes décoratifs retirés, trafic aérien placé dans des couloirs dégagés. Le thème musical fourni pour Héliopolis joue en boucle durant la mission. Les recherches de sol et de chemins des IA sont mises en cache; résolution fixe et effets de tir conservés. La mesure de 0.26.0 donnait 64 à 73 fps par échantillon sur Quest : elle ne certifie pas les 72 fps constants de cette nouvelle version. **Protocole 25 : utiliser 0.27.0 sur tous les appareils.**

## 0.27.1 — Trafic allégé
Six vaisseaux au total : deux passages occasionnels proches et quatre routes lointaines au-dessus des bâtiments. Géométries des effets et collisions des ragdolls partagées en mémoire; éclairages temporaires limités sur Quest. Résolution fixe conservée. La mesure de 0.27.0 variait de 64 à 72 fps : les 72 fps constants ne sont pas encore validés. Compatible avec le protocole 25.


## 0.28 — Exploration, rythme et armes
Première adaptation de la rétrospective PS2 fournie : trois détours reviennent à leur place de départ dans Héliopolis, avec deux cellules hors de la rue principale et un détour de ravitaillement. Deux parcours demandent des sauts; le troisième reste accessible à pied. Les trois phases principales de grappin et le gardien volant restent présents.

Les groupes mélangent sentinelles, drones et deux lourds blindés. Les ennemis retiennent une dernière position connue, cherchent temporairement derrière un obstacle puis retournent au poste. Une charge orange sur leur fusil annonce les rafales et se synchronise en coop. Le blaster possède des ailettes thermiques mobiles; le shockwave montre des mâchoires de compression et des pistons au tir. Le plasma bleu et les impacts existants sont conservés.

Les parcours ont été testés avec déplacement et collisions réels, les commandes tactiles et la coop à quatre instances locales vérifiées. **Protocole 26 : utiliser 0.28.0 sur tous les appareils.** Résolution fixe conservée; les 72 fps constants et la coop Quest + téléphone sur plusieurs réseaux restent à mesurer sur matériel.

Référence : [The Golden Bolt, rétrospective PS2](https://www.youtube.com/watch?v=UwYu8hPeEu4). Étude ciblée de la transcription et de séquences de la trilogie; pas un visionnage intégral des huit heures. Cette première passe n'ajoute pas encore de progression des armes par expérience.

## 0.29 — Corrections de l'enregistrement du 30 octobre à 08:01
Le blaster tire vingt fois avant surchauffe. Son plasma et ses indicateurs deviennent verts; ses deux barres et sa coque rougissent nettement à chaud. Le shockwave et les tirs ennemis prennent une teinte violette. Les humanoïdes cessent de reculer à courte portée : ils approchent et donnent un coup de crosse préparé, évitable et bloqué par les murs.

Drones et gardien Hélios possèdent de nouvelles coques biseautées, des turbines, des ailes et des nacelles. Le boss se brise en sept morceaux physiques et sa destruction produit trois détonations visuelles successives. La cité mêle cuivre, olive et prune. Le trafic passe à douze vaisseaux, avec quatre routes proches et huit lointaines.

Deux rues contournent des bâtiments et un quatrième détour passe derrière une tour, avec un grappin optionnel, des caisses et des soins. Les plateformes de saut et les ferries sont plus petits. Les parcours ont été traversés avec collisions réelles, y compris les trois séquences principales au grappin; les ferries demandent maintenant davantage de précision et un double saut temporisé.

**Protocole 27 : installer 0.29.0 sur tous les appareils pour la coop.** Résolution fixe et plafond des éclairages d'effets conservés. Les 72 fps constants ne sont pas certifiés; la version doit être mesurée dans le casque porté, en combat.

## 0.30 — Grands parcours, piles de caisses et combat
Les couleurs du blaster sont restaurées; seuls le canon et son embout rougissent à chaud. Le niveau 2 comporte désormais cinq grandes rues en virage autour de tours arrondies à fenêtres, quatre longs détours et huit ancrages optionnels, en plus des trois séquences principales au grappin. Le parcours principal s'étend sur plus de 700 mètres.

Cinq tireurs variés occupent chaque secteur de combat, avec les petits robots en complément. La contrainte qui les ramenait au poste à proximité est levée : ils tirent, approchent et frappent au corps à corps; ils peuvent rentrer au poste après un éloignement de 60 mètres. Les caisses s'empilent de une à cinq et retombent quand un support disparaît. Le trafic suit des lignes droites rapides depuis le lointain. Le gardien volant est allongé et légèrement agrandi.

Les caisses partagent leur modèle visible et les personnages immobiles sur un support statique évitent les calculs de déplacement inutiles. **Protocole 28 : utiliser 0.30.0 sur tous les appareils.** Résolution fixe conservée. Le dernier test de 0.29 donnait environ 71 fps en moyenne des relevés, avec des baisses à 64; les 72 fps soutenus de 0.30 restent à vérifier sur Quest porté.

## 0.31 — Corrections de la vidéo 09:49

- Robots : orientation vers le joueur en combat, tir conditionne a une orientation correcte, arret avant les bords et suppression des sauts de navigation des humanoides. Retour au poste apres un eloignement important conserve.
- Heliopolis : rues courbes continues, une section droite, vraies traversees au grappin autour des tours, plateformes de retour agrandies, caisses hors des atterrissages, fleches de guidage. Les grandes facades plates sont remplacees par des tours a fenetres. Les petites plateformes verticales qui coupaient les monuments sont remplacees par des marches fixes.
- Six ferries un peu plus rapides, avec des ponts elargis pour conserver leur accessibilite. Collisions ajoutees aux principaux monuments, portiques et comptoirs. Verification des caisses contre les decors solides.
- Blaster et indicateur violets. Canon et embout passent au meme rouge lumineux a chaud; le corps conserve ses couleurs.
- Armures lourdes : epaulette gauche, epaulette droite puis plastron se detachent selon les degats, en coop aussi. Animation de crosse amplifiee.
- Masse : saut puis geste descendant en VR, ou attaque rapide en l'air sur mobile, declenche une frappe au sol qui detruit les piles proches.
- Gardien encore allonge et missiles d'energie violette. Trafic decoratif accepte et musique conserves.
- Niveau 1, procedural et coop quatre joueurs conserves. Protocole 29 : installer 0.31.0 sur tous les appareils.

Resolution fixe conservee. Les tests automatiques ne certifient pas les 72 fps constants : la derniere mesure casque porte de 0.29 variait de 64 a 73 fps. Cette version reste a mesurer. Internet P2P depend du routeur; pas de relais CGNAT.

## 0.32 — Rails et précision

Nebula VR 0.32.0 - Video 10:51 : rails et precision.

- Quatre longues rues sont remplacees par des doubles rails de grind autour des tours. Accrochage en approchant, glisse a 12 m/s, changement assiste de rail au stick, sauts et obstacles sur les voies. Les passages au grappin apprecies restent en place.
- Nouvelle arme de precision disponible des le depart (cinquieme arme). Maintenir la gachette puis relacher : charge jusqu'a 2,2 secondes, vibrations et recul progressifs, 2 a 10 degats, portee 110 metres. Une seule cartouche; pas de recharge automatique.
- Recharge VR : grip gauche sur la cartouche a la ceinture, insertion dans la chambre, puis tirer et relacher la culasse. Recharge mobile animee en trois phases pendant 2,5 secondes.
- Trois snipers sur perchoirs : visibilite et engagement a longue distance, tir toutes les 3,2 secondes, projectiles rapides depuis le canon. Fusil et cartouche representes en coop.
- Lance-pierre : assistance initiale discrete (cone d'environ 3 degres). Les rebonds ciblent ennemis et caisses; en l'absence de cible, un seul dernier saut au sol puis disparition.
- Boulons : courbes d'aspiration plus serrees, sans gros cyclone; les petits reculs du gant sont conserves.
- Ponts de retour raccordes aux plateformes, rambardes ouvertes au bon endroit et renforts sous les ponts. Trois publicites animees de vaisseaux sur les facades. Couche de nuages opaque sous la ville pour masquer le vide, sans brouillard volumetrique devant la camera.
- Images a resolution fixe, musique, blaster violet, ragdolls, niveau 1, procedural et coop quatre joueurs conserves. Protocole 30 : utiliser 0.32.0 sur tous les appareils.

Les tests automatiques ne certifient pas les 72 fps constants sur Quest. La derniere mesure casque porte exploitable de 0.29 variait de 64 a 73 fps; cette version reste a mesurer. Internet P2P depend du routeur; pas de relais CGNAT.

## 0.33 — Contrôles des rails, sniper et écrans

Nebula VR 0.33.0 - Corrections de la video 11:26.

- Precision VR : maintien a deux mains avec orientation controlee par la main avant. Indicateur de charge sur les deux cotes, etat de chambre lisible et confirmation de pleine charge. Le tir est maintenant un rayon lumineux instantane, avec recul proportionnel a la charge.
- Recharge : ouvrir la chambre avec la culasse, prendre une cartouche visible a la ceinture, l'inserer dans la chambre ouverte puis refermer et armer. Chambre animee et cartouche visible dans la main, y compris en coop. Sequence mobile adaptee en 2,8 secondes.
- Deux parcours de rails conserves, un au debut et un plus loin. Voies espacees de 3,1 metres. Fonctionnement dans les deux sens. Un saut simple suit la meme voie; il faut sauter ET orienter le joystick pour changer de voie. Une collision avec un obstacle provoque le ragdoll et le retour au checkpoint.
- Les deux autres passages sont remplaces par des plateformes et six nouveaux points de grappin. Les detours au grappin apprecies restent en place.
- Snipers ennemis : fusil tenu a deux mains devant le corps, visee annoncee par un fin laser, rayon puissant et 5,5 secondes entre les tirs. Les gestes des bras et l'arme sont synchronises en coop.
- Publicites : sequence tournante de 24 images rendues du vaisseau, animee directement sur une surface d'ecran. Aucun vaisseau ne depasse maintenant du panneau. Pas de decodage video en temps reel.
- Resolution fixe, nuages sous la ville, trafic, musique, autres armes et modes conserves. Protocole 31 : mettre tous les appareils en 0.33.0 pour la coop.

Les 72 fps soutenus restent a mesurer sur cette version dans le casque porte. Les tests locaux et les captures PC ne les certifient pas. Internet P2P depend du routeur; pas de relais CGNAT.

## 0.34 — Lunette, refroidissement et tactique

Nebula VR 0.34.0 - Corrections de la video 12:08.

- Laser de precision : tir immediat a l'appui, pleine puissance, puis deux secondes de refroidissement. Le maintien de charge, la cartouche, la porte de chambre et la culasse sont retires. Le dessus du fusil est remodele avec des ailettes de refroidissement.
- Lunette fonctionnelle : vue grossie avec reticule, rendue dans l'oculaire quand un oeil est aligne. Le rendu supplementaire 512 x 512 est arrete hors visee. Sur Android, maintenir le bouton de tir resserre la vue.
- Prise a deux mains : orientation calculee avec les points de prise du modele, amortissement du suivi et main avant posee sous le fusil. Gant, poignet et bras suivent cette prise; la manette physique et la camera ne sont pas deplacees. Representation partagee en coop.
- IA : les tireurs restent repartis sur leurs postes avant l'entree dans le quartier; une fois engage, le groupe partage pression, couverture et deplacements lateraux. Les positions de tir evitent les obstacles. Le suivi vise avec un retard et une dispersion sur les cibles mobiles. Retour au poste apres grand eloignement conserve.
- Rails : tubes continus, extremites avancees sur les plateformes et fixations visibles. Deux sections, deux sens, saut simple sur la meme voie et saut + joystick pour changer de voie conserves.
- Boulons : spirale plus ample autour d'un axe commun vers la main, sans effet ajoute lorsqu'il n'y a aucun boulon. Petit recul du gant a chaque arrivee conserve.
- Publicites retravaillees : vaisseaux Helion, Nova Noodles et cellules Ion+, avec compositions colorees, prix et produits animes. Atlas de 72 images, sans decodage video a l'execution.
- Brume basse renforcee sous la cite, avec relief doux et sans brouillard devant la camera. Musique, trafic, grappins, modes et autres armes conserves.
- Protocole 32 : mettre tous les appareils en 0.34.0 pour jouer ensemble.

Resolution principale fixe conservee. Les 72 fps soutenus ne sont pas certifies : un essai casque porte, notamment en visant a la lunette, reste necessaire. Les controles VR et le confort de visee restent a confirmer en usage reel. Internet P2P depend du routeur; pas de relais CGNAT.


## 0.35 — Heliopolis aleatoire et visee optique

Nebula VR 0.35.0

- Nouveau mode Niveau 2 aleatoire : graine partagee en coop, quartiers decales et formations ennemies variables. La structure de 11 quartiers, les deux rails, les grappins, les boucles annexes et le final sont conserves pour garder un parcours coherent.
- Lunette VR : champ optique de 9 degres au lieu de 18 (zoom double), rendu additionnel arrete hors visee.
- Android : bouton LUNETTE avec grande visee circulaire, reticule et sensibilite fine; tirer et glisser pour orienter la camera restent possibles.
- VR : maintenir le grip droit equipe le marteau depuis toute position; relacher restaure l'arme precedente. Pour conserver le lancer physique de grenade, la grenade selectionnee se prend et se lance avec le grip gauche.
- Animations : foulée et levee des pieds accrues en course, transfert de poids, genoux articules, jambes repliees au saut et reception amortie; camera VR et controles conserves. Poses partagees en coop.
- Nouveaux sons fournis par le joueur : Shockwave et snipers (RescopicSound / Pixabay).
- Protocole 33 : tous les appareils doivent etre en 0.35.0.

Prototype : resolution fixe conservee; 72 fps soutenus et confort des nouveaux controles restent a mesurer dans le casque. Internet P2P depend du reseau; pas de relais CGNAT.


## 0.35.1 — Zoom mobile et ramassage

Nebula VR 0.35.1

- Android : bouton ZOOM dedie au sniper, pres du tir. Appuyer ouvre la grande lunette et le grossissement optique; DEZOOM permet de revenir a la vue normale. Le bouton de changement de camera garde sa fonction habituelle. Visee fine et glissement sur le bouton de tir conserves.
- Nouveau son de boulon fourni par le joueur : Drop Coin. Legere variation de hauteur, lecture au gant et trois queues de ramassage maximum pour laisser de la place aux sons de combat. Les autres armes gardent leur hauteur sonore normale.
- Niveau 2 aleatoire, animations et commandes de la 0.35 conserves. Protocole 33.

Les performances et le confort restent a mesurer dans le casque.


## 0.35.2 — Camera mobile et reticule

Nebula VR 0.35.2

- Mobile : camera epaule rapprochee de 4 m a 2,8 m; decalage lateral reduit de 1,45 m a 0,85 m.
- Champ de vision normal reduit de 76 a 62 degres pour attenuer la perspective grand-angle.
- Reticule plus grand, traits blancs renforces avec contour noir et point central; taille adaptee a la resolution.
- Grande lunette du sniper et son bouton ZOOM conserves, avec visee tactile fine et tir glisse.
- Sons de boulons, modes et commandes VR conserves. Protocole 33.

Cadrage verifie en rendu natif et controles tactiles verifies. Les performances restent a mesurer sur appareil.


## 0.36 — Salons prives et synchronisation

Nebula VR 0.36.0 - Salons prives et commandes VR

- Nouveau lobby prive : creation explicite d'un salon, code a huit caracteres, quatre places, plateforme Quest/Android affichee et etat PRET de chaque joueur. Le code est requis pour rejoindre; les salons prives ne figurent pas dans l'annuaire public. Clavier de saisie dans le menu VR.
- L'hote lance la partie lorsque tous les joueurs sont prets. Le jeu attend le chargement de l'escadron avant de commencer; les parametres du niveau et la graine sont partages. Les echecs affichent un motif (code, version, salon complet, connexion).
- Connexion locale prioritaire pour un salon trouve par Internet sur le meme Wi-Fi, afin d'eviter les problemes de bouclage du routeur. Tentative de route alternative si disponible, renouvellement d'un salon expire et fermeture propre de l'ancienne connexion.
- Marteau : le relachement du grip verifie le geste de lancer avant de ranger l'arme. Lancer physique et lancer a la gachette conserves; le gun revient au relachement.
- Lance-pierre : le grip pres de la poche ou du manche prend la priorite sur le marteau. Il reste utilisable pendant que le marteau vole. Ailleurs, le grip droit appelle le marteau.
- Camera mobile, lunette, reticule, sons et niveaux de la 0.35.2 conserves.
- Protocole 34 : installer 0.36.0 sur tous les appareils.

Validation : commandes VR simulees, annuaire prive en production, salon et demarrage a quatre instances natives locales. Le test reel Quest + telephone et deux reseaux Internet distincts reste a confirmer. Internet P2P depend toujours de l'ouverture UDP du routeur; pas de relais CGNAT. Les 72 fps soutenus ne sont pas certifies.


## 0.37 — Presence et parties ouvertes

Nebula VR 0.37.0 — Joueurs, invitations et parties ouvertes

- Liste des joueurs presents actualisee automatiquement, invitations avec acceptation/refus et salons publics jusqu a quatre joueurs Quest/Android.
- Arrivee dans une partie deja lancee sans redemarrer celle de l hote; reprise du checkpoint, des objectifs et des ennemis elimines.
- Routage local prioritaire sur le meme Wi-Fi, y compris avec adresses Internet IPv6 et IPv4 differentes; delais de connexion et diagnostics explicites.
- Chargement illustre en fondu avec conseils et progression.
- Pause : reprendre, inviter, ouvrir la partie, quitter seul ou revenir au salon avec le groupe. Pause complete en solo, jeu reseau maintenu en coop.
- Volumes bruitages et musique independants, memorises sur chaque appareil.
- Gameplay, camera mobile, armes et commandes de la 0.36 conserves. Protocole 35 : tous les appareils doivent installer 0.37.0.

Validation : service en production, invitations natives et quatre instances locales, arrivee tardive, objectifs partages et retour du groupe au salon. Le test reel Quest/telephone et deux reseaux Internet distincts reste a confirmer. Connexion de jeu P2P directe, sans relais pour les reseaux CGNAT. Les 72 fps soutenus restent a mesurer sur casque.


## 0.37.1 - Preparation du groupe

Nebula VR 0.37.1 - Depart du groupe

- Le bouton JE SUIS PRET est visible pour les invites dans tous les onglets, a gauche sous le lancement, sans chevauchement avec les invitations.
- Le bouton de l hote indique ATTENTE DES JOUEURS tant que le salon prive attend leur confirmation.
- Gameplay et protocole 35 conserves.

Validation : deux instances natives, boutons reels du menu pour preparer puis lancer la partie; arrivee dans le jeu des deux joueurs. Test Quest/Android reel encore requis.


## 0.38 - Commandes et mises a jour

Nebula VR 0.38.0 - Commandes mobiles et mises a jour integrees

- Saut et grappin mobiles : meme diametre et surface tactile que le tir, sans chevauchement entre saut et grappin.
- Au menu hors partie/groupe, une nouvelle version est telechargee automatiquement depuis les Releases officielles; progression dans le menu.
- Verification taille/SHA-256, puis module Android natif verifiant le nom de l application, la version et la signature d origine avant installation.
- Installation via PackageInstaller sans navigateur. Android/Quest peuvent demander l autorisation d installer depuis Nebula et une confirmation systeme. Une partie en cours ne sera pas interrompue.
- En cas d echec, le jeu reste jouable et le bouton permet de reessayer. Actualisation periodique au menu.
- Coop et gameplay 0.37.1 conserves, protocole 35.

La 0.37.1 doit etre mise a jour manuellement une derniere fois pour recevoir le nouveau module. L installation automatique native sur Quest reste a valider sur appareil; les controles et la logique de telechargement/verification ont passe 13 tests locaux. Internet P2P depend toujours du routeur; les 72 fps soutenus ne sont pas certifies.


## 0.39 - Arene

Nebula VR 0.39.0 - Arene : Vallee Sylvestre

- Deux modes supplementaires : match par equipes (25 eliminations) et capture du drapeau (3 captures), manches de 10 minutes maximum.
- Jusqu a quatre joueurs humains Quest/Android et zero a six bots Nebula supplementaires, equipes rouge et bleue. Selection du nombre de bots par l hote avant lancement.
- Nouvelle petite vallee de jour : bases opposees, falaises, reliefs, boisements, boucle de circulation, rochers de couverture et acces aux toits. Geometrie originale.
- Un rover et un appareil volant par base, pilotables en VR et sur mobile, avec tir monte, destruction et reapparition apres 12 secondes. Un conducteur par vehicule.
- Bots avec navigation, poursuite, tirs depuis leur arme, deplacements lateraux, objectifs de drapeau, morts physiques et reapparitions. Autorite de l hote pour degats, scores, drapeaux et vehicules.
- Retour en jeu apres 4 secondes, protection initiale et tirs allies bloques. Drapeau lache a la mort, retour apres 15 secondes et capture seulement si son propre drapeau est a la base.
- Invitations, arrivee en cours de match, pause, volumes, mises a jour integrees et modes aventure conserves. Protocole 36 : tous les appareils doivent etre en 0.39.
- Optimisation des bots : 116 maillages regroupes en 19 groupes animes; decors statiques regroupes et roues conservees mobiles.

Commandes vehicules : X gauche en VR, E au clavier ou bouton PILOTER/SORTIR sur mobile. Joystick gauche : avancer/reculer et tourner; gachette/tir : canon. Appareil volant : A/saut pour monter, B/crosse pour descendre (Espace/Ctrl au clavier).

Validation : regles locales, quatre instances natives avec six bots, conduite par un invite, scores de drapeau partages, retour du groupe au salon, tirs PvP reels entre deux instances, mort et reapparition de l hote. Les scenarios multijoueurs tournaient sur le meme PC. Quest/telephone reels et 72 fps soutenus restent a mesurer; pas de garantie entre tous les routeurs Internet/CGNAT.


## 0.40 - Test de destruction

Nebula VR 0.40.0 - Banc d armes : demolition

- Nouveau mode accessible par Banc d armes / demolition : six batiments differents dans le vocabulaire architectural d Heliopolis, dont deux tours de 42 et 52 metres hors couronnement. Aucun bot ni vehicule dans ce mode.
- Parois, vitres, poteaux, poutres et planchers adressables individuellement. Les armes existantes, la masse tenue/lancee, les coups de crosse et les grenades endommagent les pieces touchees.
- Graphe de soutiens : une vitre ne porte pas les etages. Les appuis survivants reprennent la charge et peuvent ceder; les sections privees d appui passent en rigid bodies, puis se fragmentent davantage au contact.
- Gros debris interactifs, impacts secondaires, gravats persistants et inertie. Simulation limitee en nombre de corps actifs : les debris supplementaires suivent une trajectoire balistique puis se posent contre la geometrie statique.
- Objectif partage : la partie se termine quand les six batiments ont perdu leur structure debout et se sont effondres.
- Synchronisation des degats, sections detachees, gravats et fin de partie entre quatre joueurs. Un joueur arrivant en cours de test recoit la destruction existante. Paquets de mouvement fractionnes pour rester sous le MTU.
- Modes aventure et arene, pause, volumes et mises a jour integrees conserves. Protocole 37 : installer 0.40 sur tous les appareils.

Reference visuelle : Red Faction Guerrilla, videos https://www.youtube.com/watch?v=Oe8LWlakNa8 et https://www.youtube.com/watch?v=1remxGqsu3U . Il s agit d une premiere simulation modulaire adaptee a Nebula/Quest, avec un modele de charge simplifie, et non du moteur Geo-Mod original.

Validation : regles et effondrement des six cibles, tirs d un invite, quatre instances natives, arrivee tardive retrouvant les degats, fin de mission et retour du groupe au salon. Rendu natif inspecte avant et apres effondrement. Tests executes sur PC; performances soutenues a 72 fps dans le casque encore a mesurer. P2P Internet toujours dependant du routeur, sans relais CGNAT.


### 0.40.1

Le plasma du blaster s arrete sur la surface destructible touchee, en local et chez les autres joueurs. Modes et protocole 37 conserves.


### 0.41.1

Nebula VR 0.41.1 — Vallée sylvestre et destruction articulée

- Arène refaite : relief végétal, rivière, ponts, arbres à larges couronnes, fougères, falaises ocres et refuges industriels arrondis. Référence visuelle : Novalis PS2 (https://www.youtube.com/watch?v=OK0CJgQEKM0), avec modèles originaux pour Nebula.
- Rover et appareil volant reconstruits dans la palette ivoire/olive/laiton de Nebula. Roues détaillées, garde-boue, arceau, cockpit, réacteurs et tourelle plasma orientable.
- Rover à deux places indépendantes : conducteur et tireur. Joueurs et bots peuvent occuper chaque poste, y compris un équipage mixte. X gauche / E ou EMBARQUER sur mobile près d'une place libre; même commande pour sortir. Une place tenue par un bot allié peut être reprise par un joueur.
- Les bots choisissent des places libres, conduisent sur le graphe de navigation, se dégagent en marche arrière et visent avec la tourelle. Hors véhicule, X/E/ALLIE appelle un bot ami pour accompagner le joueur.
- Démolition : façades plus détaillées, sections d'étages reliées par joints physiques, rupture sous contrainte, fragmentation à l'impact, inertie et rebonds des débris, poussière 3D et sons originaux de structure/impact.
- Budget borné à 64 corps dynamiques et 360 groupes de gravats; les morceaux supplémentaires utilisent une trajectoire balistique simplifiée. La destruction est une simulation modulaire, pas le moteur Geo-Mod.
- Deux sièges, visée de tourelle, dégâts et destruction synchronisés. Protocole 38 : mettre tous les appareils en 0.41.1 pour jouer ensemble.

Validation : règles arène/démolition, embarquement autonome, conduite et tir IA, poste de tireur d'un invité réseau, quatre instances natives et arrivée tardive en démolition. Captures natives inspectées. Les 72 fps soutenus dans un Quest porté restent à mesurer; aucune réduction de résolution ajoutée. Connexion P2P Internet dépendante du routeur, sans relais CGNAT.


### 0.41.1

Nebula VR 0.41.1 — Gravats solides et surfaces conservées

- Même palette, même métal, rugosité et émission lumineuse avant et après rupture. Suppression de la recoloration des pièces endommagées.
- La fragmentation conserve les géométries et détails des sections; les fragments frappés sont séparés en corps physiques, au lieu du remplacement par des formes génériques.
- Tous les groupes de débris restent solides : suppression du passage en trajectoire cosmétique sans collision. Les débris se heurtent, s'empilent, s'endorment naturellement et se réveillent lorsqu'ils sont poussés.
- Collision de chaque élément structurel conservée dans les sections composées, au lieu des grandes enveloppes par étage et de la limite de huit formes par groupe.
- L'objectif accepte les gravats empilés et stabilisés. Arène, véhicules à deux places et compagnons conservés.
- Protocole 39 : installer 0.41.1 sur tous les appareils pour la coop.

Validation : empilement réel de trois corps, réveil par impulsion, absence de retrait de collision sous faible budget, paramètres de surfaces, géométrie ronde, effondrement des six bâtiments et réseau avec arrivée tardive. Plus de physique augmente le coût : les 72 fps soutenus sur Quest restent à mesurer, sans promesse de maintien lors de l'effondrement simultané des six cibles.


### 0.42.0

Nebula VR 0.42.0 — Mini Nuke et arène à trois voies

- Sixième arme : Mini Nuke Laucher. Modèle validé dans la démo, exporté puis regroupé en dix groupes de rendu Godot. B droit / Tab pour parcourir les armes en VR/PC; sixième icône radioactive sur Android. Maintenir le tir 0,6 s pour charger; refroidissement de 3 s.
- Projectile et détonation calculés par l'hôte. Explosion rose/mauve, éclairage coloré transitoire, onde de pression, panache volumétrique 3D et étincelles. Dégâts et projection sur robots, joueurs d'arène, véhicules et structures destructibles. Les décors non destructibles des niveaux aventure gardent leur comportement existant.
- Arène élargie : terrain d'environ 180 × 128 m, bases espacées de 120 m, trois voies reliées par des traversées distinctes. Route centrale, passage forestier couvert au nord et pont plus large au sud pour les véhicules, avec changements de voie latéraux.
- Deux bases de 20 × 15 m sur deux niveaux, appuis et façades destructibles. Les dégâts, sections détachées, gravats et état à l'arrivée tardive sont partagés. Les gravats gardent leurs collisions et leur apparence; les répliques côté invité restent solides pour les déplacements.
- Atlas original de feuillages découpés, branches feuillues, fougères et plantes fleuries, animation légère du vent, détail de surface sur terrain, pierre et métal.
- Navigation des bots répartie entre les routes, coureurs du drapeau et pilotes; franchissement des petites bordures pour les rovers. Conducteur et tourelle restent accessibles aux humains et aux bots.
- Onde de pression réfractive adaptée aux autres armes : front directionnel de 12 m pour le shockwave; onde de grenade et version plus courte et compacte pour le chargeur explosif. Le rayon correct est transmis en coop. Aucun nouveau gros panache ni éclairage ajouté par ces ondes.
- Protocole 40 : installer 0.42.0 sur tous les appareils pour jouer ensemble.

Validation : charge et cooldown, requêtes invalides, robot aventure en ragdoll, destruction, voies traversables, base stable puis effondrement, traversée réelle du pont en rover, bot prenant et rapportant un drapeau, quatre instances natives dont arrivée tardive, conduite/tourelle réseau et régressions des contrôles/pause/volumes. Rendus natifs inspectés, y compris le volume vu de près.

Sur Quest : résolution fixe conservée, budget du panache limité à un volume proche et deux lumières transitoires, échantillonnage réduit du shader volumétrique. Les 72 fps soutenus sur casque porté restent à mesurer; plus de physique lors des grosses destructions reste coûteux. Internet P2P dépend du routeur, sans relais CGNAT.


### 0.42.1

Nebula VR 0.42.1 — Débris optimisés et surfaces détaillées

- Mini Nuke : tir immédiat à l’appui, sans maintien. Un appui produit un projectile; relâcher la gâchette avant le suivant. Refroidissement de trois secondes conservé.
- Arène : textures originales de sol, roche stratifiée et métal avec relief de surface, joints et fixations. Coordonnées à l’échelle du monde, mipmaps et filtrage anisotrope pour stabiliser les détails à distance. Les gravats des bases gardent ces surfaces.
- Destruction : géométrie des débris regroupée par matériau et forme. La transformation de chaque corps est transmise au GPU dans une petite texture; les détails suivent les morceaux physiques sans recréer des centaines de rendus séparés.
- Détachement progressif des sections sur plusieurs images et file de fractures. Les sections restent visibles et solides jusqu’à leur détachement. Les débris conservent leurs collisions, leurs matériaux et peuvent se réveiller après repos.
- Colliders adjacents fusionnés seulement lorsque leur union reste une boîte exacte, sans remplir les espaces vides; formes réutilisées, groupes de débris plus cohérents. Les structures stables évitent les recalculs de support inutiles.
- Préparation du shader des gravats pendant le chargement VR. Pas de baisse automatique de résolution, de flou temporel ou de fovéation dynamique ajoutée. Mesures de destruction ajoutées aux journaux de performance.
- Coop : fractures et état des bâtiments synchronisés, y compris une arrivée tardive pendant la démolition. Protocole 40 conservé.

Validation : tests de tir immédiat/refroidissement, empilement et réveil des débris, six bâtiments détruits et objectif terminé, deux grandes tours, textures rendues dans le moteur, réseaux à quatre instances avec arrivée tardive et dégâts du Mini Nuke.

Comparaison sur le même PC natif, deux tours : appels de dessin de 1 635 à environ 140, corps physiques de 462 à 176; coût physique moyen d’environ 12,5 à 3,9 ms dans le relevé comparatif. Ce n’est pas une mesure Quest. Les 72 fps soutenus et la clarté pendant les effondrements restent à vérifier en portant le casque. Les grosses destructions restent plus coûteuses qu’une scène intacte.


### 0.44.1

Nebula VR 0.44.1 — Destruction sur Quest et Android

- Les dégâts sur panneaux proches sont regroupés en petits ensembles physiques, avec leur géométrie, détails et matériaux conservés. Leur création passe par une file de travail au lieu de créer plusieurs fragments pour chaque panneau dans une seule image.
- Les sections de tour en chute sont fragmentées en ensembles plus cohérents sur Quest/Android. Chaque débris produit reste solide et physique; les espaces vides entre éléments ne sont pas remplis par une grosse boîte.
- Les impulsions des explosions du Mini Nuke sont conservées pour les fragments créés par la file différée. La destruction, les dégâts et les débris restent transmis par l’hôte, y compris lors d’une arrivée tardive.
- Le panache reste un volume 3D rose/mauve : ses valeurs de bruit sont préparées dans une petite texture 3D, pour remplacer les calculs répétés de bruit dans chaque pixel. Nombre de pas, silhouette, couleurs, lumière et onde conservés.
- Résolution VR fixe, anticrénelage et cible 72 Hz inchangés. Un journal local de performance est aussi enregistré dans le dossier externe propre à l’application pour permettre une lecture USB après un essai.

Validation : scénario de deux tours frappées par plusieurs explosions, 656 corps physiques au maximum en 0.42.1 contre 95 avec la nouvelle politique Quest/Android dans le test PC; collisions et effondrement des deux tours conservés. Tests de tir, débris, objectif des six bâtiments, résolution fixe, onde et réseau à quatre instances avec arrivée tardive. Nouveau shader inspecté dans le moteur natif.

Les 72 fps soutenus pendant les effondrements restent à vérifier sur casque porté. Le test PC ne constitue pas une mesure Quest.

Les nouveaux véhicules, la tourelle plus haute, les flammes bleues et la nouvelle maquette d’arène restent uniquement dans l’atelier 3D local en attente de validation. Ils ne sont pas intégrés à cet APK.
