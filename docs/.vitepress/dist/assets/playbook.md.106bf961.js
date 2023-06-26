import{_ as s,o as a,c as e,O as o}from"./chunks/framework.24da11a5.js";const _=JSON.parse(`{"title":"Procédure d'intégration d'un dossier playbook dans un projet","description":"","frontmatter":{},"headers":[],"relativePath":"playbook.md","filePath":"playbook.md"}`),n={name:"playbook.md"},r=o(`<h1 id="procedure-d-integration-d-un-dossier-playbook-dans-un-projet" tabindex="-1">Procédure d&#39;intégration d&#39;un dossier playbook dans un projet <a class="header-anchor" href="#procedure-d-integration-d-un-dossier-playbook-dans-un-projet" aria-label="Permalink to &quot;Procédure d&#39;intégration d&#39;un dossier playbook dans un projet&quot;">​</a></h1><h2 id="playbook" tabindex="-1">Playbook <a class="header-anchor" href="#playbook" aria-label="Permalink to &quot;Playbook&quot;">​</a></h2><ol><li><p>Récupérer le dossier playbook fournie et glisser le dans le projet .</p><details class="details custom-block"><summary>Structure du dossier</summary><pre><code>playbooks/
 ├── inventory/
 │   └── hosts
 ├── portenaire.io/
 │  
 └── deploy.yml
</code></pre></details><div class="tip custom-block"><p class="custom-block-title"><a href="/ansistrano_documentation/initialisation_role.html">Plus d&#39;information concernat la création d&#39;un role</a>.</p></div></li></ol><h2 id="ficher-hosts" tabindex="-1">Ficher hosts <a class="header-anchor" href="#ficher-hosts" aria-label="Permalink to &quot;Ficher hosts&quot;">​</a></h2><ol start="2"><li><p>Ouvrer le ficher hosts qui ce trouve dans inventory .</p></li><li><p>Modifier les informations des serveurs ce trouvant dans ce fichier.</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[marster_serveur]</span></span>
<span class="line"><span style="color:#A6ACCD;">    marster_serveur ansible_host</span><span style="color:#89DDFF;">=***.***.**.***</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    [dev_serveur]</span></span>
<span class="line"><span style="color:#A6ACCD;">    dev_serveur ansible_host</span><span style="color:#89DDFF;">=***.***.**.***</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    [all:vars]</span></span>
<span class="line"><span style="color:#A6ACCD;">    ansible_python_interpreter</span><span style="color:#89DDFF;">=/</span><span style="color:#A6ACCD;">usr</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">bin</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">python3</span></span></code></pre></div></li></ol>`,5),l=[r];function t(i,p,c,d,u,h){return a(),e("div",null,l)}const b=s(n,[["render",t]]);export{_ as __pageData,b as default};
