import{_ as n,o,c as p,C as s,t,a as e,V as a}from"./chunks/framework.490198c0.js";const b=JSON.parse('{"title":"Gestion des variables chiffrées avec Ansible Vault","description":"","frontmatter":{},"headers":[],"relativePath":"vault_varaibles.md","filePath":"vault_varaibles.md"}'),r={name:"vault_varaibles.md"},i=s("h1",{id:"gestion-des-variables-chiffrees-avec-ansible-vault",tabindex:"-1"},[e("Gestion des variables chiffrées avec Ansible Vault "),s("a",{class:"header-anchor",href:"#gestion-des-variables-chiffrees-avec-ansible-vault","aria-label":'Permalink to "Gestion des variables chiffrées avec Ansible Vault"'},"​")],-1),c=s("h2",{id:"chiffrement-des-variables",tabindex:"-1"},[e("Chiffrement des variables "),s("a",{class:"header-anchor",href:"#chiffrement-des-variables","aria-label":'Permalink to "Chiffrement  des variables"'},"​")],-1),u=s("p",null,"Pour gérer vos variables chiffrées en toute sécurité avec Ansible Vault, suivez la procédure ci-dessous :",-1),d=a(`<li><p>Créez un fichier de variables chiffrées à l&#39;aide de la commande suivante (s&#39;il n&#39;est pas créer) :</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ansible-vault</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nom_fichier_variables_chiffrees.yml</span></span></code></pre></div><p>Cela ouvrira un éditeur de texte pour entrer vos variables chiffrées. Si vous utilisez Ansible Vault pour la première fois, vous devrez définir un mot de passe pour le fichier chiffré.</p></li><li><p>Ajoutez vos variables dans le fichier ouvert. Par exemple :</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">*</span><span style="color:#A6ACCD;">****_shared_path: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/****/*****</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">*</span><span style="color:#A6ACCD;">****_deploy_to: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/****/****/******/*********</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">vault_ansistrano_token</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">****************************</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">mysql_db</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*********</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">mysql_user</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">********</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">mysql_password</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*********</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div></li><li><p>Enregistrez et fermez le fichier lorsque vous avez terminé.</p></li><li><p>Vous pouvez également éditer un fichier de variables existant en utilisant la commande suivante :</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ansible-vault</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">edit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nom_fichier_variables_chiffrees.yml</span></span></code></pre></div><p>Cela ouvrira l&#39;éditeur de texte avec le contenu chiffré du fichier, vous permettant de modifier les variables existantes.</p><details class="details custom-block"><summary>Commandes suplémentaire</summary><ul><li><p>Pour chiffrer un fichier de variables non chiffrées existant, utilisez la commande :</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ansible-vault</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">encrypt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nom_fichier_variables_non_chiffrees.yml</span></span></code></pre></div><p>Cela chiffrera le fichier spécifié et créera un nouveau fichier chiffré avec l&#39;extension <code>.vault</code>. Le fichier d&#39;origine sera préservé et vous pouvez le supprimer en toute sécurité une fois que vous êtes sûr que le fichier chiffré fonctionne correctement.</p></li><li><p>Pour décrypter un fichier chiffré et le rendre accessible en clair, utilisez la commande :</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ansible-vault</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">decrypt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nom_fichier_variables_chiffrees.yml</span></span></code></pre></div><p>Cela supprimera le chiffrement du fichier spécifié et vous pourrez le modifier comme un fichier de variables normal.</p></li></ul></details></li>`,4),y=a(`<p>Par exemple, si vous avez une tâche pour configurer un fichier de configuration avec le mot de passe de la base de données dans un docker-compose :</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">db:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">image:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mysql:latest</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">container_name:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">db</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">environment:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">MYSQL_DATABASE:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{{ mysql_db }}</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">MYSQL_USER:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{{ mysql_user }}</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">MYSQL_PASSWORD:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{{ mysql_password }}</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">MYSQL_ROOT_PASSWORD:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{{ mysql_password }}</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><p>Dans cet exemple,<code>{mysql_password}</code>,<code>{mysql_user}</code>,<code>{mysql_db}</code> sont les variables chiffrées que vous avez définie dans le fichier vars/nom_fichier_variables_chiffrees.yml.</p>`,3),C=s("p",null,"Ceci conclut la procédure pour utiliser Ansible Vault et gérer vos variables chiffrées de manière sécurisée.",-1);function D(l,f,h,v,m,_){return o(),p("div",null,[i,c,u,s("ol",null,[d,s("li",null,[s("p",null,"Dans les tâches ou les modèles de votre rôle, vous pouvez référencer les variables chiffrées en utilisant la syntaxe "+t(l.vault_variable_name)+".",1),y])]),C])}const A=n(r,[["render",D]]);export{b as __pageData,A as default};
