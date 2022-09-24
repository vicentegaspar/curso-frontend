import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

createApp(App).mount('#app')

import imoveis from './imoveis.js';

const filteredNumero = imoveis.filter((imoveis) => {
    return imoveis.numero > 600
})

console.log(filteredNumero);

let listaImoveis = ''

// Lista dos nomes dos imveis filtrados
filteredNumero.forEach(imovel => {
    listaImoveis += imovel.nome + ', '
});

console.log(listaImoveis);

// Reduce - funcao com soma dos numeros dos imoveis filtrados retornando valor unico
let somaNumeros = filteredNumero.reduce( (prev, next) => {
    return {NumerosSomados: prev.numero + next.numero}
});

console.log(somaNumeros.NumerosSomados);


document.getElementById('main').innerHTML = 
    '<br> Nome dos imoveis filtrados com numero >600: ' 
    + listaImoveis + '<br> Soma dos numeros do imoveis filtrados: ' 
    + somaNumeros.NumerosSomados
