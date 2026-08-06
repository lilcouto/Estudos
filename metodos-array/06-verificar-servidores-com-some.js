// Objetivo: Verificar se algum servidor está offline
let servidores = [
    {nome: "Servidor 1", status: "online", uptime: 99.9},
    {nome: "Servidor 2", status: "online", uptime: 98.5},
    {nome: "Servidor 3", status: "offline", uptime: 0},
    {nome: "Servidor 4", status: "online", uptime: 99.2},
]
let serverOff = servidores.some((valor) => valor.status === "offline")
function verificaStatus() {
    if(serverOff) {
        let servidorOffline = servidores.find((valor) => valor.status === "offline")
        return `ALERTA! Existe servidor offline: ${servidorOffline.nome}`
    }else {
        return `Todos os servidores estão operacionais`
    }
}
console.log(verificaStatus())
