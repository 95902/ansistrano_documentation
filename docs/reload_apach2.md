# Procédure détaillée pour redémarrer Apache

1. Ouvrez un terminal sur votre machine virtuelle.

2. Exécutez la commande suivante pour arrêter le service Apache :

    ```` bash
        sudo service apache2 stop
    ````

    Cette commande arrêtera le service Apache en cours d'exécution sur votre machine virtuelle.

3. Ensuite, exécutez la commande suivante pour désactiver le démarrage automatique d'Apache lors du démarrage du système :

    ```` bash
        sudo systemctl disable apache2
    ````

    Cela désactivera le service Apache pour qu'il ne démarre pas automatiquement lors du prochain démarrage de votre machine virtuelle.


4. Vous pouvez vérifier l'état d'Apache pour vous assurer qu'il est bien arrêté en exécutant la commande suivante :


    ```` bash
        sudo service apache2 status
    ````

    Si le service est correctement arrêté, vous devriez voir un message indiquant que le service est "inactive" ou "stopped".

5. Maintenant, vous pouvez redémarrer Apache en exécutant la commande suivante :

    ```` bash
        sudo service apache2 start
    ````

    Cela démarrera à nouveau le service Apache sur votre machine virtuelle.

    Assurez-vous d'exécuter ces commandes avec des privilèges d'administration (`sudo`) pour pouvoir effectuer les actions nécessaires sur le service Apache.

    Cette procédure vous permet d'arrêter, désactiver et redémarrer le service Apache sur une machine virtuelle en utilisant les commandes `sudo service apache2 stop` et `sudo systemctl disable apache2`. 
    
6. Maintenant, vous pouvez fermer Visual Studio et éteindre les machines virtuelles en utilisant la commande suivante :

    ````bash
        vagrant halt
    ````

    Cette commande arrêtera les machines virtuelles en cours d'exécution sur votre machine locale.
