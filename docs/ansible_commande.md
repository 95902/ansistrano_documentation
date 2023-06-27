# Ansible - Commandes de base

Voici quelques commandes de base couramment utilisées avec Ansible :

- `ansible-playbook <playbook.yml>` : Exécute un playbook Ansible.
- `ansible <host-pattern> -m <module>` : Exécute un module Ansible sur un ou plusieurs hôtes.
- `ansible-galaxy init <role-name>` : Initialise une structure de répertoire pour un nouveau rôle Ansible.

## Gestion des inventaires

Voici quelques commandes utiles pour gérer les inventaires :

- `ansible-inventory --list` : Affiche la liste des hôtes de l'inventaire.
- `ansible-inventory --graph` : Affiche un graphe des dépendances entre les groupes d'hôtes.

## Exemples de commandes

Voici quelques exemples de commandes :

- `ansible-playbook site.yml -i inventory.ini` : Exécute le playbook `site.yml` en utilisant l'inventaire `inventory.ini`.
- `ansible myhost -m ping` : Effectue un ping sur l'hôte `myhost` pour vérifier la connectivité.

Ces commandes de base vous aideront à démarrer avec Ansible et à effectuer des opérations courantes sur vos hôtes cibles.
