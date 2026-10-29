# Nebula VR

Page officielle de téléchargement du prototype Quest et Android mobile : **https://tommyaudetcontact-wq.github.io/NebulaVR/**

Les APK sont distribués dans les [Releases](https://github.com/tommyaudetcontact-wq/NebulaVR/releases). La page se trouve dans `docs/`; `docs/version.json` est le manifeste public consulté par les deux applications pour signaler les mises à jour.

## Coop (jusqu’à 4)

Un joueur héberge la partie, les trois autres rejoignent son adresse. Les deux plateformes utilisent le même protocole. Sur le même Wi-Fi, utiliser l’IP locale. Par Internet, utiliser l’IP publique de l’hôte avec le port UDP 24721 accessible. Le bouton UPnP tente une ouverture temporaire d’une heure sur le routeur. Si cela échoue, une redirection manuelle est nécessaire. Les connexions derrière CGNAT peuvent nécessiter un relais, absent de cette version. Il n’y a pas de migration d’hôte : si l’hôte quitte, les clients retournent au menu.

## État de la version

Prototype de développement. La validation automatique inclut un hôte et trois clients locaux, le partage des gestes et des dégâts, le générateur de niveaux et les commandes tactiles. La validation en situation réelle Quest + téléphone, sur des réseaux Internet distincts, reste nécessaire. Les 72 fps constants ne sont pas certifiés.

Les mises à jour sont détectées au lancement. Le téléchargement et l’installation restent confirmés par le joueur dans Android. Le paquet Quest conserve l’identifiant `com.nova.auroravr` pour pouvoir mettre à jour le prototype existant; le nom affiché est Nebula VR. Le paquet mobile est `com.nebula.adventure.mobile`.
