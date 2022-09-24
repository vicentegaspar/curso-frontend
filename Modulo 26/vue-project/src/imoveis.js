let imoveis = [
    {
        id: 1,
        nome: 'imovel 1',
        cidade: 'fortaleza',
        estado: 'CE',
        rua: 'avenida santos dumont',
        numero: 2383,
        bairro: 'aldeota',
        CEP: 60150161
    },
    {
        id: 2,
        nome: 'imovel 2',
        cidade: 'salvador',
        estado: 'BA',
        rua: 'Rua Professor Souza Brito',
        numero: 392,
        bairro: 'itapuã',
        CEP: 41640380
    },
    {
        id: 3,
        nome: 'imovel 3',
        cidade: 'Joinville',
        estado: 'SC',
        rua: 'Rua Tharcilio Vieira',
        numero: 330,
        bairro: 'Aventureiro',
        CEP: 89226160
    },
    {
        id: 4,
        nome: 'imovel 4',
        cidade: 'Palmas',
        estado: 'TO',
        rua: 'Quadra 406 Norte Alameda 9',
        numero: 688,
        bairro: 'Plano Diretor Norte',
        CEP: 77006488
    },
    {
        id: 5,
        nome: 'imovel 5',
        cidade: 'Rondonópolis',
        estado: 'MT',
        rua: 'Rua Leontina Ferreira Paes',
        numero: 599,
        bairro: 'Jardim Nilmara',
        CEP: 78720571
    }
]

function getImoveis(){
    return imoveis
}

export default getImoveis()