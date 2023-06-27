# Procédure pour ajouter une adresse IP au fichier hosts

Suivez les étapes ci-dessous pour ouvrir le fichier hosts en tant qu'administrateur avec le Bloc-notes :

1. Cliquez avec le bouton droit de la souris sur l'icône du Bloc-notes dans le menu Démarrer ou sur votre bureau.

2. Dans le menu contextuel qui apparaît, survolez l'option "Bloc-notes" pour afficher un sous-menu supplémentaire.

3. Dans le sous-menu, cliquez sur l'option "Exécuter en tant qu'administrateur". Cela lancera le Bloc-notes avec les privilèges d'administrateur.

4. Dans le Bloc-notes, cliquez sur "Fichier" dans la barre de menus, puis sélectionnez "Ouvrir".

5. Accédez au chemin **C:\Windows\System32\drivers\etc**.

6. En bas de la boîte de dialogue "Ouvrir", modifiez le type de fichier à "Tous les fichiers (.)" pour afficher tous les fichiers.

7. Sélectionnez le fichier **hosts** et cliquez sur le bouton "Ouvrir".

8. Dans le fichier `hosts`, ajoutez une nouvelle ligne en bas pour ajouter l'adresse IP et le nom d'hôte que vous souhaitez associer. La syntaxe est la suivante :


    ```` bash
        <adresse_IP>    <nom_hôte>
    ````

    Par exemple : 

    ````bash
        192.168.1.100   example.com
    ````

9. Enregistrez les modifications apportées au fichier hosts.

> Pour que les modifications prennent effet, vous devrez peut-être redémarrer votre navigateur Web ou vider le cache DNS de votre système.

Cette procédure vous permet d'ajouter manuellement une adresse IP personnalisée au fichier hosts sur Windows, ce qui vous permet d'associer des noms d'hôtes à des adresses IP spécifiques.

