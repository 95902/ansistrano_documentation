import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ansistrano documentation",
  description: "ansistrano documentation",
  base: "/ansistrano_documentation",
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Instalation', link: '/presentation' },
      { text: 'Documentation', link: '/docker_commande' }
   
    ],

    sidebar: [
      {
        text: 'Présentation',
        collapsed: true,
        items: [
          { text: 'Présentation', link: '/presentation' },
        ]
      },
      {
        text: 'Instalation',
        collapsed: false,
        items: [
          { text: 'Instalation de VirtualBox', link: '/instalation_VirtualBox' },
          { text: 'Transfert de clés avec FileZilla', link: '/Transfert_cles' },
          { text: 'Connection à visual studio (master)', link: '/Remmote_ssh_master' },
          { text: 'Intégration du playbook', link: '/playbook'},
          { text: "Création d'un role ansitrano ", link: '/creation_role_ansistrano' },
          { text: "Initialisation d'un role", link: '/initialisation_role' },
          { text: "Github token",link:'/creation_token_github'},
          { text: "Vaults des varaibles",link:'/vault_varaibles'},
          { text: "Lancement du playbook",link:'/lancement_playbook'},
          { text: "Connection à visual studio (dev)",link:'/Remmote_ssh_dev'},
          { text: "Extension Docker (dev)",link:'/extension_docker'},
          { text: "Fichier host",link:'/fichier_hosts'},
          { text: 'Reload apache ', link: '/reload_apach2' },
          { text: 'Lancement du projet', link: '/lancement_projet.md' }
        ]
      },
      {
        text: 'Documentation',
        collapsed: true,
        items: [
          { text: 'Mémento Docker Compose', link: '/docker_commande' },
          { text: 'Mémento Ansible', link: '/ansible_commande' },
          { text: 'Mémento Vagrant', link: '/vagrant_commande' },
          { text: 'Mémento Ansistrano', link: '/ansistrano_commande' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/INNOSYSFRANCE/assurmix_inte' }
    ]
  }
  
})
