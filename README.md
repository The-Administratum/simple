# SIMPLE

C'est un petit projet que je compte faire avant de commencer quoique ce soit.
le but est d'avoir une cli facilement extensible qui soit capable de lancer des script bash/zsh et powershell.

comme je ne sais pas faire une cli (vous pouvez me juger) et comme il faut commencer quelque part, je me base sur le code source de nuxi la cli du framework nuxt.

## evolution

### dans un premier temps

j'aimerai que l'on puisse taper ce genre de commande dans un terminal :

> simple docker install <monEnvDev>

> simple cpp install cmake

>simple eslint install

>simple unity configure

*nom du module en premier suivi de la commande*
*module = module esm*

## Dans un second temps :

Je compte vite faire evoluer le tout avec un objet global en guise de liant.
par exemple :

```JS
//Application.mjs

const Application=function(namespace){ // before ES5 class style for prototype inheritance and non-java inheritance style. fuck java
    this.bootstrap=new Bootstrap() // script qui va load les different modules de l'app
    globalThis[namespace]=this; // ici on enregistre l'entièreté de l'app comme propriété de l'objet global de js (qui evoluera car je compte avoir a terme une partie web)
    Object.defineProperty(this, "name",{ // un getter pour lire le namespace
        get:()=>namespace
    })
}
```

```JS
// Bootstrap.mjs
// very primitive way to do this
// at term I want to use the tarjan algorithm

const Bootstrap = function(){
    const module= {}
    this.register=(name,invoke) =>{
    // wip api
        module[name]={name,invoke}
    }
}
```

Et j'aimerai orienter l'architecture sur une architecture basée sur des services agnostiques.
Pour cela j'aimerai m'aider du systeme de monorepo de pnpm.

### troisième temps

Pour diverse raison notamment de performance mais de cross plateforme j'aimerai etudier la possibilité de faire evoluer certaines part du projet vers d'autre tech comme golang ou rust ( j'en ai un peu marre de JS)

par la même occasion il serait interressant d'étudier l'architecture client-server d'un deamon. (idée)


## exigences :


### tech

J'ai mis en place un env docker (basic) basé sur ubuntu (jammy)/ pnpm/ node  lts)/git

Mais !

si vous voulez participer sachez que :

- le mot clé "Class" est banni

- les return sur une seule ligne est interdit 

exemple : 
```JS
// bad 

if(condition)return

// good

if(condition){
    return
}
```

- restreignez l'export par defaut préférez les export nommés.

- préférez l'api objet si vous avez des paramètres optionnels.

- le formatage linux de mise ( désolé aux pro cpp mais je vous rassur le gnu style est banni aussi )

- utilisez PNPM


et pour l'instant c'est tout

ps : ça risque de bouger vite car node me saoule avec sont commonJS.

### git

Nous utilisons git, merci de faire vos commit les plus atomiques possible, le nommage je m'en fous.
Pas de wip lors d'une pr.

en revanche j'utilise git-flow comme méthode de participation ce qui veut dire que vous ne pouvez commiter directement sur master, master est sacrée.

le merge n'est utilisé que pour les pr préférez lui le rebase et rebasez vous souvent.

tips : 

> git fetch --all --prune

> git rebase -i <nomDeLaBranche>

> git commit --amend

( je ferai une doc de rappel sur git si besoin est )
