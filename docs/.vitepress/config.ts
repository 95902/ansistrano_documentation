import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "tets",
  description: "test",
  base: "/ansistrano_documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Instalation', link: '/presentation' },
      { text: 'Documentation', link: '/markdown-examples' }
   
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
          { text: 'Lancement du projet', link: '/markdown-examples' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Documentation',
        collapsed: true,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Reload apache ', link: '/reload_apach2' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Instalation de VirtualBox', link: '/instalation_VirtualBox' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/INNOSYSFRANCE/assurmix_inte' }
    ]
  }
})
