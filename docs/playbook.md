# Procédure d'intégration d'un dossier playbook dans un projet
## Playbook

1. Récupérer le dossier playbook fournie et glisser le dans le projet  .

    ::: details Structure du dossier
       playbooks/
        ├── inventory/
        │   └── hosts
        ├── portenaire.io/
        │  
        └── deploy.yml

     :::

    ::: tip     [Plus d'information concernat la création d'un role](/initialisation_role).

    :::

## Ficher hosts 

2. Ouvrer le ficher hosts qui ce trouve dans inventory .

3. Modifier les informations des serveurs ce trouvant dans ce fichier.

    ``` bash
        [marster_serveur]
        marster_serveur ansible_host=***.***.**.***

        [dev_serveur]
        dev_serveur ansible_host=***.***.**.***


        [all:vars]
        ansible_python_interpreter=/usr/bin/python3

    ````

