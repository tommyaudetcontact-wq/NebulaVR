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
