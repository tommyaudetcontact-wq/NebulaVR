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
