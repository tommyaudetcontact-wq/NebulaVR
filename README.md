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
