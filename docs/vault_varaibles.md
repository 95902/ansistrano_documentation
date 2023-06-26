
# Gestion des variables chiffrées avec Ansible Vault
##  Chiffrement  des variables

Pour gérer vos variables chiffrées en toute sécurité avec Ansible Vault, suivez la procédure ci-dessous :

1. Créez un fichier de variables chiffrées à l'aide de la commande suivante (s'il n'est pas créer) :

    ```
    ansible-vault create nom_fichier_variables_chiffrees.yml
    ```

    Cela ouvrira un éditeur de texte pour entrer vos variables chiffrées. Si vous utilisez Ansible Vault pour la première fois, vous devrez définir un mot de passe pour le fichier chiffré.

2. Ajoutez vos variables dans le fichier ouvert. Par exemple :

    ```yaml

    *****_shared_path: "/****/*****"
    *****_deploy_to: "/****/****/******/*********"
    vault_ansistrano_token: "****************************"
    mysql_db: "*********"
    mysql_user: "********"
    mysql_password: "*********"

    ```

3. Enregistrez et fermez le fichier lorsque vous avez terminé.

4. Vous pouvez également éditer un fichier de variables existant en utilisant la commande suivante :

    ```
    ansible-vault edit nom_fichier_variables_chiffrees.yml
    ```

    Cela ouvrira l'éditeur de texte avec le contenu chiffré du fichier, vous permettant de modifier les variables existantes.

    ::: details Commandes  suplémentaire

    - Pour chiffrer un fichier de variables non chiffrées existant, utilisez la commande :

        ```
            ansible-vault encrypt nom_fichier_variables_non_chiffrees.yml
        ```

        Cela chiffrera le fichier spécifié et créera un nouveau fichier chiffré avec l'extension `.vault`.
        Le fichier d'origine sera préservé et vous pouvez le supprimer en toute sécurité une fois que vous êtes sûr que le fichier chiffré fonctionne correctement.

    - Pour décrypter un fichier chiffré et le rendre accessible en clair, utilisez la commande :

        ```
            ansible-vault decrypt nom_fichier_variables_chiffrees.yml
        ```

         Cela supprimera le chiffrement du fichier spécifié et vous pourrez le modifier comme un fichier de variables normal.

    :::

5. Dans les tâches ou les modèles de votre rôle, vous pouvez référencer les variables chiffrées en utilisant la syntaxe {{ vault_variable_name }}.

    Par exemple, si vous avez une tâche pour configurer un fichier de configuration avec le mot de passe de la base de données dans un docker-compose :

    ```
      db:
        image: mysql:latest
        container_name: db
        environment:
            MYSQL_DATABASE: "{{ mysql_db }}"
            MYSQL_USER: "{{ mysql_user }}"
            MYSQL_PASSWORD: "{{ mysql_password }}"
            MYSQL_ROOT_PASSWORD: "{{ mysql_password }}"
    ```

    Dans cet exemple,`{mysql_password}`,` {mysql_user} `,`{mysql_db}`  sont les variables chiffrées que vous avez définie dans le fichier vars/nom_fichier_variables_chiffrees.yml.

<!-- 6. Pour exécuter un playbook Ansible avec des variables chiffrées, utilisez la commande :

    ```
    ansible-playbook playbook.yml --ask-vault-pass
    ```

    Cela demandera le mot de passe du fichier chiffré avant d'exécuter le playbook. -->

Ceci conclut la procédure pour utiliser Ansible Vault et gérer vos variables chiffrées de manière sécurisée.
