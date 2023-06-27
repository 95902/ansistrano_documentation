
# Installation de VirtualBox et création de deux machines virtuelles avec un Vagrantfile

## 1. **Installation de VirtualBox :**
   - Rendez-vous sur le site officiel de VirtualBox ([https://www.virtualbox.org/](https://www.virtualbox.org/)) et téléchargez la version appropriée pour votre système d'exploitation.
   - Suivez les instructions d'installation fournies par le programme d'installation de VirtualBox.
   - Une fois l'installation terminée, lancez VirtualBox pour vous assurer qu'il fonctionne correctement.

## 2. **Création d'un répertoire de travail :**
   - Créez un nouveau répertoire sur votre machine pour le projet de déploiement d'application. Par exemple, "mon_projet_de déploiement".
   - Ouvrez un terminal ou une invite de commandes et accédez au répertoire que vous venez de créer.

     ``` bash

     mkdir mon_projet_de_deploiement

     ```

## 3. **Initialisation de Vagrant dans le répertoire :**
   - Dans le terminal, exécutez la commande suivante pour initialiser Vagrant dans votre répertoire de travail :

     ``` bash
     vagrant init
     ```

   - Cette commande générera un fichier Vagrantfile, qui sera utilisé pour décrire la configuration de vos machines virtuelles.

## 4. **Création d'un fichier de crédenciale :**
   - Créez un nouveau fichier sur votre machine pour le projet de déploiement d'application. Nommez-le `credentials.json` dans le même repertoire.
   - Insérez votre mot de passe et passphrase dans le fichier :

     ``` bash
     {
       "password": "********",
       "passphrase": "*********"
     }
     ```

## 5. **Configuration du Vagrantfile :**
   - Ouvrez le fichier Vagrantfile généré à l'étape précédente dans un éditeur de texte ou directement dans votr Ide.
   - Dans ce fichier, vous trouverez des commentaires expliquant les options de configuration.
   - Modifiez le contenu du fichier avec le fichier fourni.
      ::: details fichier

      ```js
        Vagrant.configure("2") do |config|
          config.vm.define "marster_serveur" do |marster_serveur|
            marster_serveur.vm.box = "bento/ubuntu-22.04"
            marster_serveur.vm.network "private_network", ip: "***.***.**.****"
            marster_serveur.vm.provider "virtualbox" do |vb|
              vb.name = "marster_serveur"
              vb.memory = "2024"
              vb.cpus = "3"
            end

              # Installation d'ANSIBLE
              marster_serveur.vm.provision "shell", inline: <<-SHELL
              # Installer les dépendances d'Ansible
              sudo apt-get update
              sudo apt-get install -y software-properties-common
              sudo apt-add-repository --yes --update ppa:ansible/ansible
              sudo apt-get install -y ansible
              # Installer Ansistrano via Ansible Galaxy
              ansible-galaxy install ansistrano.deploy ansistrano.rollback
            SHELL
            

          end

          config.vm.define "dev_serveur" do |dev_serveur|
            dev_serveur.vm.box = "bento/ubuntu-22.04"
            dev_serveur.vm.network "private_network", ip: "***.***.**.****"
            dev_serveur.vm.provider "virtualbox" do |vb|
              vb.name = "dev_serveur"
              vb.memory = "5024"
              vb.cpus = "3"
            end

            dev_serveur.vm.provision "shell", inline: <<-SHELL
            cat /home/deploy/.ssh/id_dev.pub > /home/deploy/.ssh/authorized_keys
            SHELL

          end

          config.vm.synced_folder ".", "/vagrant"

          config.vm.provision "shell", inline: <<-SHELL

            # Installer le paquet jq
            sudo apt-get update
            sudo apt-get install -y jq

            # Lire les variables depuis le fichier JSON
            password=$(jq -r '.password' "/vagrant/credentials.json")
            passphrase=$(jq -r '.passphrase' "/vagrant/credentials.json")

            # Créer l'utilisateur deploy
            adduser deploy --disabled-password --gecos ""
            echo "deploy:$password" | sudo chpasswd

            # Ajouter l'utilisateur deploy au groupe sudo
            usermod -aG sudo deploy

            # Générer la paire de clés SSH pour l'utilisateur deploy avec passphrase
            su - deploy -c "ssh-keygen -t rsa -N $passphrase -f ~/.ssh/id_dev"

            # Créer un fichier authorized_keys et y ajouter la clé publique
            sudo -u deploy touch /home/deploy/.ssh/authorized_keys
            cat /home/deploy/.ssh/id_dev.pub > /home/deploy/.ssh/authorized_keys

          SHELL


          config.vm.provision "shell", inline: <<-SHELL
            # Installer fish et vim
            sudo apt-get update
            sudo apt-get install -y fish vim
          SHELL
          # Installation de DOCKER
          config.vm.provision "shell", inline: <<-SHELL
            # Ajouter la clé GPG officielle de Docker
            curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

            # Ajouter le référentiel Docker aux sources de paquets
            sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

            # Installer Docker
            sudo apt-get update
            sudo apt-get install -y docker-ce docker-ce-cli containerd.io

            # Ajouter l'utilisateur "deploy" au groupe "docker"
            sudo usermod -aG docker deploy

            # Démarrer le service Docker
            sudo systemctl start docker

            # Installation de Docker Compose
            sudo apt-get install -y python3-pip
            sudo pip3 install docker-compose
            
          SHELL

          config.vm.provision "shell", inline: <<-SHELL
            # Mise à jour des packages sur les deux machines
            sudo apt-get update
            sudo apt-get upgrade -y
          SHELL

        end
      ```

      :::

      ::: warning N'oubliez pas de modifier le contenue de ce fichier
        - Ip des machines.
      :::

## 6. **Démarrage des machines virtuelles :**
   - Dans le terminal, exécutez la commande suivante pour télécharger et démarrer les machines virtuelles définies dans le Vagrantfile :

     ``` bash
     vagrant up
     ```

   - Vagrant téléchargera l'image de la machine virtuelle et configurera les paramètres selon les spécifications du Vagrantfile.
   - Une fois le processus terminé, vous aurez deux machines virtuelles en cours d'exécution.
