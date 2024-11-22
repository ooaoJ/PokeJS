class Pokemon{
    constructor(nome, tipo, hp, atq, def, spAtq, spDef, velocidade,ataques_usaveis) {
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
        console.log(`HP do alvo dpois ${alvo.hp}`)
    }
}

const charmander = new Pokemon("Charmander", "Fogo", 39, 52, 43, 60, 50, 65, [{nome: 'arranhão',tipo:'fisico',dano: 25}]);
const pidgey = new Pokemon("Pidgey","Voador",40,45,40,35,35,56)


charmander.atacar(pidgey)