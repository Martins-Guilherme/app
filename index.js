const { select, input, checkbox } = require ('@inquirer/prompts')
const fs = require("fs").promises

const { textSync } = require ('figlet')

let mensagem = "Bem-vindo ao app > "

let metas

const carregaMetas = async () =>{
    try{
        const dados = await fs.readFile("metas.json", "utf-8")
        metas = JSON.parse(dados)
    }

    catch(erro){
        metas = []
    }
}

const salvarMetas = async () =>{
    await fs.writeFile("metas.json", JSON.stringify(metas, null, 2))
}

const cadastrarMeta = async () => {
    const meta = await input({message: "Digite a meta: "})

    if (meta.length == 0){
        mensagem = "A meta não pode ser vazia."
        return
    }
    metas.push({
        value: meta,
        checked: false
    })
    mensagem = "Meta cadastrada com sucesso!"
}

const listarMetas = async () => {
    
    if (metas.length == 0) {
        return mensagem = 'Lista de metas vazias.'
    }
    
    const resposta = await checkbox({
        message: "Use as setas para mudar de meta, o espaço para marcar e desmarcar, enter para finalizar a etapa:",
        choices: [...metas],
        instructions: false,    // Configurado para "false", não informa as instruções em inglês, "true" informa as instruções.
    })
    metas.forEach((m) => {
        m.checked = false
    })

    if (resposta.length == 0){
        mensagem = "Nenhuma meta marcada!"
        return
    }
        // forEache significa para cada, ele ira passar na lista relacionada ao item da lista
    resposta.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })

    meta.checked = true
    })

    mensagem = "Meta(s) marcadas como concluída(s)"
}

const metasRealizadas = async () => {

    if (metas.length == 0) {
        return mensagem = 'Lista de metas vazias.'
    }
    const realizadas = metas.filter((meta) => {
        return meta.checked
    })

    if (realizadas.length == 0) {
        mensagem = 'Não existem metas realizadas! :('
        return
    }
    
    await select({
        message: "Metas realizadas: " + realizadas.length,
        choices: [...realizadas]
    })
}


    /*  água [] - caminhar [] - cantar [x] */
const metasAbertas = async () =>{
    if (metas.length == 0) {
        return mensagem = 'Lista de metas vazias.'
    }
    const abertas = metas.filter((meta) =>{
        return meta.checked != true     // ou !meta.checked resulta o mesmo objetivo. Se verdadeiro é transforma em falso.
    })

    if (abertas.length == 0) {
        mensagem = 'Não existem metas abertas! :)'
        return
    }

    await select({
        message: "Metas abertas: " + abertas.length,
        choices:[
            ...abertas
        ]
    })

}

const deletarMetas = async () =>{

    /* 
        const metasDesmarcadas = metas.map((meta) => OPÇÃO
            meta.checked = false
            return meta
        })
    
    */
    if (metas.length == 0) {
        return mensagem = 'Lista de metas vazias.'
    }
    
    const metasDesmarcadas = metas.map((meta) => {
        return {
            value: meta.value,
            checked: false
            }
    })

    const itensADeletar = await checkbox({
        message: "Selecione item para deletar",
        choices: [...metasDesmarcadas],
        instructions: false,    // Configurado para "false", não informa as instruções em inglês, "true" informa as instruções.
    })

    if (itensADeletar.length == 0) {
        mensagem = 'Nenhum item para deletar! :)'
        return
    }
    
    itensADeletar.forEach((item) => {
        metas = metas.filter((meta)=>{
            return meta.value != item
        })
    })
    
    mensagem = 'Meta(s) deletada(s) com sucesso!'
}

const mostrarMensagem = () =>{
    console.clear()

    if (mensagem != '') {
        console.log(mensagem)
        console.log('')
        mensagem = ''
    }
}


const start = async () => {
    await carregaMetas()
    
    while (true) {
        mostrarMensagem()
        await salvarMetas()
        // github.com/patorjk/figlet.js
        console.log(textSync("To do list", {font: "Red Phoenix",horizontalLayout: "default",verticalLayout: "default",width: 80,whitespaceBreak: true,}));

// MENU APLICATIVO COM AS OPÇÕES DE EXECUÇÃO:
        const opcao = await select({
            
            message: "Menu > ",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "Metas realizadas",
                    value: "realizadas"
                },
                {
                    name: "Metas abertas",
                    value: "abertas"
                },
                {
                    name: "Deletar metas",
                    value: "deletar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })

// ESCOLHAS PARA ACESSAR FUNÇÃO DENTRO DO APLICATIVO:
//  CADASTRO DE METAS, LISTA DE METAS, METAS REALIZADAS,
//  METAS ABERTAS, METAS PARA E CASO QUEIRA SAIR DO APLICATIVO:
        switch(opcao){
            case "cadastrar":
                await cadastrarMeta()
                break
            case "listar":
                await listarMetas()
                break
            case "realizadas":
                await metasRealizadas()
                break
            case "abertas":
                await metasAbertas()
                break
            case "deletar":
                await deletarMetas()
                break
            case "sair":
                console.log("Ate a proxima.")
                return
        
        }
}
}

start()