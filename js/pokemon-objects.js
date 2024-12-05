class Pokemon{
    constructor(sprite,nome, tipo,tipo2, hp, atq, def, spAtq, spDef, velocidade,ataques_usaveis) {
        this.sprite = sprite;
        this.nome = nome;       
        this.tipo = tipo;
        this.tipo2 = tipo2;        
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
"Charmander", "Fogo",'null', 39, 52, 43, 60, 50, 65, [{nome: 'arranhão',tipo:'fisico',dano: 25}]);


const venussaur = new Pokemon("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/3.png","Venussaur", "Grama","Veneno", 80, 82, 83, 100, 100, 80, [{nome: 'arranhão',tipo:'fisico',dano: 25}]);


const wartortle = new Pokemon("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png","Squirtle","Água",
59,63,80,65,80,58,[{ nome: "Jato d'Água", tipo: "especial", dano: 40 }]);

//dialog
const dialog = document.getElementById("Dialog");

function openDialog() {
    dialog.showModal();
}

function closeDialog() {
    dialog.close();
}
//dialog
render_sprite_oponent(wartortle)

//Iner batalha
let Name = document.getElementById('name')
let hp = document.getElementById('hp')
function InerPkm(your_pokemom){
    Name.innerHTML += your_pokemom.nome
    let hp_pokemon = your_pokemom.hp
    hp.innerHTML += hp_pokemon
    render_sprite(your_pokemom)

}
InerPkm(venussaur)
//Iner batalha