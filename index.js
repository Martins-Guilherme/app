const { select, input } = require ('@inquirer/prompts')

let meta = {
    value: "tomar 3l de água por dia",
    checked: false
}

let metas = [meta]

const cadastrarMeta = async () => {
    const meta = await input({message: "Digite a meta: "})

    if (meta.length == 0){
        console.log("A meta não pode ser vazia.")
        return
    }

    metas.push({
        value: meta,
        checked: false
    })

}

const start = async () => {
    
    while (true) {

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
                console.log("Vamos listar.")
                break
            case "sair":
                console.log("Ate a proxima.")
                return
        
        }

}

}

start()