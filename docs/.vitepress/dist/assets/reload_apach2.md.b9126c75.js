import{_ as e,o as a,c as s,V as r}from"./chunks/framework.490198c0.js";const v=JSON.parse('{"title":"Procédure détaillée pour redémarrer Apache","description":"","frontmatter":{},"headers":[],"relativePath":"reload_apach2.md","filePath":"reload_apach2.md"}'),t={name:"reload_apach2.md"},l=r('<h1 id="procedure-detaillee-pour-redemarrer-apache" tabindex="-1">Procédure détaillée pour redémarrer Apache <a class="header-anchor" href="#procedure-detaillee-pour-redemarrer-apache" aria-label="Permalink to &quot;Procédure détaillée pour redémarrer Apache&quot;">​</a></h1><ol><li><p>Ouvrez un terminal sur votre machine virtuelle.</p></li><li><p>Exécutez la commande suivante pour arrêter le service Apache :</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apache2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span></span></code></pre></div><p>Cette commande arrêtera le service Apache en cours d&#39;exécution sur votre machine virtuelle.</p></li><li><p>Ensuite, exécutez la commande suivante pour désactiver le démarrage automatique d&#39;Apache lors du démarrage du système :</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">disable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apache2</span></span></code></pre></div><p>Cela désactivera le service Apache pour qu&#39;il ne démarre pas automatiquement lors du prochain démarrage de votre machine virtuelle.</p></li><li><p>Vous pouvez vérifier l&#39;état d&#39;Apache pour vous assurer qu&#39;il est bien arrêté en exécutant la commande suivante :</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apache2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">status</span></span></code></pre></div><p>Si le service est correctement arrêté, vous devriez voir un message indiquant que le service est &quot;inactive&quot; ou &quot;stopped&quot;.</p></li><li><p>Maintenant, vous pouvez redémarrer Apache en exécutant la commande suivante :</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apache2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span></span></code></pre></div><p>Cela démarrera à nouveau le service Apache sur votre machine virtuelle.</p><p>Assurez-vous d&#39;exécuter ces commandes avec des privilèges d&#39;administration (<code>sudo</code>) pour pouvoir effectuer les actions nécessaires sur le service Apache.</p><p>Cette procédure vous permet d&#39;arrêter, désactiver et redémarrer le service Apache sur une machine virtuelle en utilisant les commandes <code>sudo service apache2 stop</code> et <code>sudo systemctl disable apache2</code>.</p></li><li><p>Maintenant, vous pouvez fermer Visual Studio et éteindre les machines virtuelles en utilisant la commande suivante :</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">vagrant</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">halt</span></span></code></pre></div><p>Cette commande arrêtera les machines virtuelles en cours d&#39;exécution sur votre machine locale.</p></li></ol>',2),o=[l];function n(p,c,i,u,d,h){return a(),s("div",null,o)}const C=e(t,[["render",n]]);export{v as __pageData,C as default};
