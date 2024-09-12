# Linguagem de programação

Maneira de dar instruções ao computado;
Como um LEGO, você ira utilizar peças para criar algoritmos, ou seja, para resolver problemas.

# Algoritmo: 
    *Sequencias de passo lógicos e finita para resolução de um problema.*

# Peças de uma linguagem:

    - Comentários
    - Declaração de variáveis (const, let, var)
    - Operadores
    - Tipos de dados ( string, number, boolean)
    - Estrutura de dados (Functions, object, array)
    - controle de fluxo (if/else)
    - Estrutura de repetição (for, while)

# Fases de resolução:

Coletar dados
Processar os dados (manipular, alterar...)
Apresentar os dados


# Escopo e variáveis:

Variáveis globais e locais
Constantes


# Tipos de dados:

String: "", '' ou ``;
number: 2, 1, 1.5...
boolean: true ou false


# Escopo:

let variavel = "Guilherme";
console.log(`Ola, ${variavel}`);
{
    let variavel = "Gustavo";
    console.log(`Olá, ${variavel}`);
}

# Operadores:

Operador de atribuição de valor: =
Operador de concatenação: +
Operador de comparação: == != <= >= < >
Spread operator: [...]
Rest operator: ?????????
# Estruturas de dados:

# Array:

    *uma lista que contem qualquer tipo de dado*
    Método de array: 
    push    =   adicionar um item a array
    [
        map     =   busca um item dentro da array
        find    =   procurar um item dentra da array
        forEach =   percorre toda a array
        filter  =   filtar um item dentro da array
    ] = HOF (higher Order Function) => Função de ordem superior


##          let metas = ["mike", "aló"];
##          console.log(metas[1] + ", " + metas[0]);

# Objetos:

Atribuição e métodos
Criação e manipulação de objetos
Acesso a propriedades de objetos

# let meta = {
#     value: "ler um livro",
#     checked: false,
#     type: [
#         "Ação",
#         "Ficção",
#         "Terror"
#     ]    
# }
# 
# console.log(meta.type);

EXEMPLO objeto

let meta = {
    value: "ler um livro",
    checked: false,
}
let metas = [
    meta,
    {
        value: "Treinar 30m todos os dias",
        checked: false
    }
]
console.log(`Valor da meta 1: ${metas[0].value}`);

 Método é tudo aquilo que esta dentro de um objeto, enquanto uma função é utilizada fora do objeto;

#                 Function e Arrow function

    Named Function
        function criarMeta() {}


    Arrow function
        const criarMeta = () => {}


# Estrutura de repetição

        *while*

const start = () => {
    let Count = 0;

while (Count < 10 ) {
        console.log(Count)
        Count = Count + 1
    }
}
start()

# estrutura condicionais:

    *switch*

const start = () => {
    while (true) {
        let opcao =  "cadastrar"
        switch(opcao){
            case "cadastrar":
                console.log("Vamos cadastrar.")
                break
            case "Listar":
                console.log("Vamos listar.")
                break
            case "sair":
                break
        }
    return
    }
}

start()

(
    *if*
)



# Modulos/pacotes/dependencias

Importação de módulos utilizando o NPM: npm install "nomeModulo"
Biblioteca inquirer para criação de prompts interativos: npm install inquirer


# Programação async e promessas

Uso de funções assíncronas (async/await)
    