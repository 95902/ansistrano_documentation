# Initialisation d'un rôle ansistrano avec ansible-galaxy

<!-- 1. Ouvrez un terminal ou une invite de commandes dans le répertoire playbooks.

2. Utilisez la commande suivante pour initialiser un nouveau rôle Ansible en spécifiant le nom du rôle et le chemin où vous souhaitez créer le rôle :

    ```
        ansible-galaxy init nom_du_projet
    ```

3. Une fois la commande exécutée, un nouveau répertoire portant le nom du rôle sera créé dans le répertoire actuel. 
    Ce répertoire contiendra la structure de base du rôle Ansible, y compris les répertoires defaults, files, handlers, meta, tasks, templates, tests et vars, ainsi qu'un fichier README.md. -->

4. Pour installer les rôles "ansistrano.deploy" et "ansistrano.rollback", utilisez la commande suivante dans votre terminal :

    ``` bash
    ansible-galaxy install ansistrano.deploy ansistrano.rollback
    ````
    Cette commande téléchargera les rôles depuis la galerie Ansible Galaxy et les installera dans le répertoire de votre projet.

