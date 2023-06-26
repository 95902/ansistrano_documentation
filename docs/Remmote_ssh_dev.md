# Procédure d'installation Remote-SSH machine dev

## Connection "Remote - SSH"

1. Pour se connecter à un hôte distant via SSH, cliquez sur l'extension explorateur distant et sélectionnez nouveau distant.
   
    ::: details Voir l'image
    ![An image](images\remotessh2.jpg)
    :::

2. Taper dans l'onglet les informations de votre machine de dev comme ce-ci : 
    
    ```js
        ssh deploy@111.222.33.44
    ```


3. Sélectionner le fichier de configuration SSH à mettre à jour  .

    ::: details Voir l'image
      ![An image](images\remotessh3.jpg)
    :::
  

4. Ouvrer le fichier de configuration SSH  et taper les détails de connexion

    ```js
        Host *********
            HostName ***.***.***.***
            User deploy
            IdentityFile "C:\*****\*\**"
    ```


5. Actualiser l'explorateur distant

    ::: details  Voir l'image
    ![An image](images\remotessh5.jpg)
    :::


6. Cliquer sur le bouton ce connecter dans un nouvelle onglet 

    ::: details Voir l'image
    ![An image](images\remotessh6.jpg)
    :::

7. Sélectioner la plateforme linux pour le remote

    ::: details Voir l'image
    ![An image](images\remotessh7.jpg)
    :::

8. Entrer la phrase secrète pour vous connecter

    ::: details Voir l'image
    ![An image](images\remotessh8.png)
    :::

9. Ouvrer l'explorateur de fichier, puis le dossier et seclectioner l'empacement de la racine du projet.

    ::: details 
    seclectioner l'empacement du projet dans le current.

    > /home/deploy/DocumentRoot/Projet/current/

    ![An image](images\remotessh9.jpg)
    :::

10. Sélectioner la plateforme linux pour le remote, Ouvrer l'explorateur de fichier  et vous devriez avoir un résultat comme l'image ci-dessous

    ::: details 
    ![An image](images\remotessh10.png)
    :::

L'intallation du remote ssh pour la dev est terminer 

N'hésitez pas à consulter la documentation officielle de l'extension Remote - SSH pour plus d'informations et de détails sur son utilisation :

- [Documentation Remote - SSH de Visual Studio Code](https://code.visualstudio.com/docs/remote/ssh)
- [Vidéo de présentation de l'extension Remote SSH sur la chaîne YouTube officielle de Visual Studio Code](https://www.youtube.com/watch?v=rh1Ag41J6IA)

Cette documentation fournit des instructions détaillées ainsi que des captures d'écran pour vous aider à comprendre et à utiliser pleinement l'extension Remote - SSH dans Visual Studio Code.

