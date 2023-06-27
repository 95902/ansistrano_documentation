# Procédure pour lancer un playbook Ansible avec clé privée SSH et fichier de variables chiffrées

## Activation de l'agent 

Suivez les étapes ci-dessous pour exécuter un playbook Ansible en utilisant `eval "$(ssh-agent)"`, `ssh-add` pour ajouter une clé privée SSH, et un fichier de variables chiffrées avec Ansible Vault :

1. Ouvrez un terminal ou une invite de commandes sur votre machine locale dans votre repertoire playbooks.

2. Exécutez la commande `eval "$(ssh-agent)"` pour démarrer l'agent SSH. Cela démarrera l'agent SSH sur votre machine locale.


    ``` bash
        eval "$(ssh-agent)"
    ```

3. Utilisez la commande `ssh-add` pour ajouter votre clé privée SSH à l'agent. 

    ``` bash
        ssh-add ~/.ssh/nom_de_la_clé_privée
    ```

    Assurez-vous de remplacer `nom_de_la_clé_privée` par le nom de votre propre clé privée SSH. 
    Par exemple, si votre clé privée s'appelle `id_rsa`, la commande serait `ssh-add ~/.ssh/id_rsa`.
    
    Vous devrez saisir le mot de passe de votre clé privée SSH pour l'ajouter à l'agent. 
    
    Une fois ajoutée, la clé privée sera disponible pour être utilisée lors de la connexion aux serveurs distants.

## Lancement du playbok

4. Assurez-vous d'avoir un fichier de variables chiffrées (par exemple, `vars/vault.yml`) créé à l'aide d'Ansible Vault.

5. Pour exécuter votre playbook Ansible, utilisez la commande suivante en spécifiant le fichier de variables chiffrées et en utilisant l'option `--ask-vault-pass` pour demander le mot de passe du fichier chiffré :

    ``` bash
    ansible-playbook -i inventory/hosts playbook.yml --ask-vault-pass 
    ```

    Assurez-vous de remplacer `inventory.yml` par votre propre fichier d'inventaire et `playbook.yml` par votre propre playbook.

6. Lorsque vous exécutez la commande, Ansible vous demandera le mot de passe du fichier chiffré. Entrez le mot de passe contenu dans le fichier `vault_pass.yaml` que vous avez créé.

    > Note : Assurez-vous de protéger correctement la clé privée SSH et le fichier de mot de passe du fichier chiffré pour garantir la sécurité de vos systèmes et données sensibles.

7. Ansible exécutera le playbook en utilisant la clé privée SSH ajoutée à l'agent et utilisera les variables chiffrées du fichier `vault.yml` pendant l'exécution.

Ceci conclut la procédure pour lancer un playbook Ansible en utilisant `eval "$(ssh-agent)"` et un fichier de variables chiffrées avec Ansible Vault.
