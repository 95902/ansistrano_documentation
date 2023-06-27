# Procédure pour lancer le projet

## Démarrer le Vagrantfile

Suivez les étapes ci-dessous pour démarrer le Vagrantfile :

1. Ouvrez une fenêtre de commande (cmd).
2. Accédez au répertoire contenant le fichier Vagrantfile.
3. Exécutez la commande suivante pour démarrer la machine virtuelle : 

  ```` bash
  vagrant up
  ````	

## Lancer la commande Docker Compose

Suivez les étapes ci-dessous pour lancer la commande Docker Compose :

1. Ouvrez un terminal ou une autre fenêtre de commande.
2. Accédez au répertoire du projet.
3. Exécutez la commande suivante pour lancer les conteneurs Docker :

  ```` bash
  docker-compose up
  ````

## Tester les URL du projet

Suivez les étapes ci-dessous pour tester les URL du projet :

1. Ouvrez un navigateur web.
2. Accédez aux URL du projet pour effectuer les tests nécessaires.

## Pour quitter le projet et arrêter les services

Suivez les étapes ci-dessous pour quitter le projet et arrêter les services :

- Pour quitter le projet, vous pouvez simplement exécuter la commande Ctrl+C dans le terminal où vous avez exécuté la commande `docker-compose up`. Cela arrêtera les services en cours d'exécution.

- Pour arrêter les conteneurs Docker et éteindre les machines virtuelles Vagrant, vous pouvez exécuter les commandes suivantes dans le terminal où vous avez exécuté `vagrant up` :

  - `vagrant halt` : Pour arrêter les machines virtuelles Vagrant.

> Ceci conclut la procédure pour démarrer un Vagrantfile, lancer la commande Docker Compose, tester les URL du projet, et quitter le projet tout en arrêtant les services..
