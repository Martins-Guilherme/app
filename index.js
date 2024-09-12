const { select, input, checkbox } = require ('@inquirer/prompts')
const { textSync } = require ('figlet')

let meta = {
    value: "tomar 3l de água por dia",
    checked: false
}
let metas = [meta]

const cadastrarMeta = async () => {
    const meta = await input({message: "Digite a meta: "})

    if (meta.length == 0){                                  //  
        console.log("A meta não pode ser vazia.")           // 
        return
    }
    metas.push({
        value: meta,
        checked: false
    })

}

const listarMetas = async () => {
    const resposta = await checkbox({
        message: "Use as setas para mudar de meta, o espaço para marcar e desmarcar, enter para finalizar a etapa:",
        choices: [...metas],
        instructions: false,    // Configurado para "false", não informa as instruções em inglês, "true" informa as instruções.
    })
    metas.forEach((m) => {
        m.checked = false
    })

    if (resposta.length == 0){
        console.log("Nenhuma meta marcada!")
        return
    }
        // forEache significa para cada, ele ira passar na lista relacionada ao item da lista
    resposta.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })

    meta.checked = true
    })

    console.log("Meta(s) marcadas como concluída(s)")
}

const metasRealizadas = async () => {
    const realizadas = metas.filter((meta) => {
        return meta.checked
    })

    if (realizadas.length == 0) {
        console.log('Não existem metas realizadas! :(');
        return
    }
    
    await select({
        message: "Metas realizadas ",
        choices: [...realizadas]
    })
}

const start = async () => {
    while (true) {
        // github.com/patorjk/figlet.js
        console.log(textSync("To do list", {font: "Thorned",horizontalLayout: "default",verticalLayout: "default",width: 80,whitespaceBreak: true,}));

// MENU APLICATIVO COM AS OPÇÕES DE EXECUÇÃO:
        const opcao = await select({
            message: "Menu >",
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
                    name: "Sair",
                    value: "sair"
                }
            ]
        })

// OPÇÕES PARA ACESSAR O APLICATIVO. CADASTRO DE METAS, LISTA DE METAS E CASO QUEIRA IRA SAIR DO APLICATIVO:
        switch(opcao){
            case "cadastrar":
                await cadastrarMeta()
                console.log(metas)
                break
            case "listar":
                await listarMetas()
                console.log("Vamos listar.")
                break
            case "realizadas":
                await metasRealizadas()
                break 
            console.log('');
            case "sair":
                console.log("Ate a proxima.")
                return
        
        }

}

}

start()