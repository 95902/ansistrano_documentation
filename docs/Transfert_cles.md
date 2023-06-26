
# Transfert de clés avec FileZilla

## Instalation de FileZilla

::: details Installation de FileZilla

   1. Rendez-vous sur le site officiel de FileZilla ([https://filezilla-project.org/](https://filezilla-project.org/)) dans votre navigateur web.

   2. Cliquez sur le bouton "Download FileZilla Client" pour accéder à la page de téléchargement.

   3. Sur la page de téléchargement, vous verrez les différentes versions de FileZilla disponibles pour différents systèmes d'exploitation. Sélectionnez la version appropriée pour votre système d'exploitation (Windows, macOS, Linux, etc.) et cliquez sur le lien de téléchargement correspondant.

   4. Une fois le téléchargement terminé, localisez le fichier d'installation de FileZilla dans votre dossier de téléchargements ou à l'emplacement spécifié.

   5. Double-cliquez sur le fichier d'installation pour démarrer le processus d'installation.

   6. Dans l'assistant d'installation, suivez les instructions à l'écran et acceptez les termes du contrat de licence.

   7. Choisissez les options d'installation appropriées. Par défaut, toutes les fonctionnalités nécessaires sont sélectionnées. Vous pouvez laisser les paramètres par défaut ou personnaliser l'installation selon vos besoins.

   8. Sélectionnez le dossier de destination où FileZilla sera installé. Vous pouvez accepter le dossier par défaut ou spécifier un autre emplacement si nécessaire.

   9. Une fois que vous avez vérifié les options d'installation, cliquez sur le bouton "Install" pour commencer le processus d'installation.

   10. Attendez que l'installation soit terminée. Une fois l'installation réussie, vous verrez un message de confirmation.

   11. Cliquez sur le bouton "Finish" pour fermer l'assistant d'installation.

   Maintenant, vous avez installé FileZilla sur votre système. Vous pouvez le trouver dans le menu des applications ou sur le bureau, selon votre système d'exploitation. Lancez FileZilla pour commencer à l'utiliser et configurer vos connexions FTP ou SFTP.

   N'oubliez pas de prendre en compte la version spécifique de votre système d'exploitation et de suivre les instructions appropriées pour assurer une installation réussie de FileZilla.
:::

## Transfert de la clé id_rsa de la machine virtuelle 1 vers .ssh (local)

-  Ouvrez FileZilla et connectez-vous à la machine virtuelle 1 en utilisant le protocole SFTP avec votre mot de passe .
      ::: details Voir l'image
      
      <!-- ![An image](images\filezila.png) -->

      :::

- Accédez au répertoire `.ssh` sur la machine virtuelle 1 dans FileZilla.
      ::: details Voir l'image

      <!-- ![An image](images\filezilassh.PNG) -->

      :::
  
- Téléchargez la clé sur votre machine locale, puis transférez-la dans le dossier `.ssh` (local).

    ````
          Répertoire => C:\Users\Utilisateur\.ssh
    ````

## Transfert de l'authorized_keys de la machine virtuelle 1 vers la machine virtuelle 2 :**

- Accédez au répertoire `.ssh` sur la machine virtuelle 1 dans FileZilla.

- Transférez le fichier `authorized_keys` de la machine virtuelle 1 vers votre machine locale.

- Maintenant, connectez-vous à la machine virtuelle 2 en utilisant FileZilla.

- Accédez au répertoire `.ssh` sur la machine virtuelle 2 dans FileZilla.
  
- Transférez le fichier `authorized_keys` depuis votre machine locale vers le répertoire `.ssh` de la machine virtuelle 2.
