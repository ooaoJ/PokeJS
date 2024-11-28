class Pokemon{
    constructor(sprite,nome, tipo, hp, atq, def, spAtq, spDef, velocidade,ataques_usaveis) {
        this.sprite = sprite;
        this.nome = nome;       
        this.tipo = tipo;        
        this.hp = hp;           
        this.atq = atq;         
        this.def = def;          
        this.spAtq = spAtq;      // Ataque especial 
        this.spDef = spDef;      // Defesa especial 
        this.velocidade = velocidade;
        this.ataques_usaveis = ataques_usaveis
    }
    atacar(alvo){
        var ataque_lista = this.ataques_usaveis[0]
        console.log(`HP do alvo antes ${alvo.hp}`)
        if(ataque_lista.tipo == 'fisico'){
            let ataque_somado_a_dano = this.atq + ataque_lista.dano
            let dano_causado =   ataque_somado_a_dano - alvo.def
            alvo.hp -= dano_causado
        }else{
            alvo.hp -= ataque_lista.dano - alvo.spDef
        }
        console.log(`HP do alvo depois ${alvo.hp}`)
    }
}

function render_sprite(pokemon){
    let div_html = document.getElementById('pokemon-espaco')
    lista = ``;
    lista = pokemon.sprite
    div_html.innerHTML += `<img id="sprites" src="${lista}" alt="${pokemon.nome}">`
}
function render_sprite_oponent(pokemon){
    let div_html = document.getElementById('pokemon-espaco-op')
    lista = ``;
    lista = pokemon.sprite
    div_html.innerHTML += `<img id="sprites-op" src="${lista}" alt="${pokemon.nome}">`
}




const charmander = new Pokemon("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
"Charmander", "Fogo", 39, 52, 43, 60, 50, 65, [{nome: 'arranhão',tipo:'fisico',dano: 25}]);


const venussaur = new Pokemon("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png",
"Charmander", "Fogo", 39, 52, 43, 60, 50, 65, [{nome: 'arranhão',tipo:'fisico',dano: 25}]);


const squirtle = new Pokemon("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png","Squirtle","Água",44,48,65,50,64,43,[{ nome: "Jato d'Água", tipo: "especial", dano: 40 }]);


//dialog
const dialog = document.getElementById("Dialog");

function openDialog() {
    dialog.showModal();
}

function closeDialog() {
    dialog.close();
}
//dialog
render_sprite(venussaur)
render_sprite_oponent(squirtle)
