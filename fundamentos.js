"use strict";
// tipo NUMBER
Object.defineProperty(exports, "__esModule", { value: true });
let numero = 2;
// tipo STRING
let palavra = 'Mikael';
// tipo BOOLEAN
let verdardeiro = true;
let falso = false;
// ANNOTATION  e INFERENCE
let minhaVariavel = 'text'; // ANNOTATION
let meuArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // INFERENCE
minhaVariavel = 'Oliveira';
meuArray.push(10);
let multiploArray = [1, 2, 'a', 'b', true, false];
multiploArray.push();
let num = [1, 2, 3,];
let letras = ['a', 'b', 'c',];
let misto = ['a', 1, 'c', true];
const nomes = ['Joao', 'Maria', 'Eduardo',];
function minhasLetras(a, b) {
    console.log(a, b);
}
minhasLetras('a', 'b');
function soma(x, y) {
    let soma = x + y;
    return soma;
}
function coordenadas(cord) {
    console.log(`A coordenada X é: ${cord.x}`);
    console.log(`A coordenada Y é: ${cord.y}`);
}
const minhaCoordenada = { x: 329, y: 72.6 };
coordenadas(minhaCoordenada);
function mosstreNumeros(a, b, c) {
    console.log(`A: ${a}`);
    console.log(`B: ${b}`);
    console.log(`C: ${c}`);
}
mosstreNumeros(1, 2, 3);
mosstreNumeros(4, 5);
function validaOpcao(opcao1, opcao2) {
    console.log(opcao1, opcao2);
}
validaOpcao('Mikael', true);
function showId(id) {
    console.log(`O ID é: ${id}`);
}
showId(14);
showId('14');
function showCpf(cpf) {
    console.log(`O CPF é: ${cpf}`);
}
showCpf(12345678910);
showId('123.456.789-10');
function userDetails(user) {
    console.log(`Nome: ${user.name}`);
    console.log(`Idade: ${user.idade}`);
}
userDetails({ name: 'Paulo', idade: 26 });
function showCoords(myObject) {
    console.log(`x =${myObject.x}`);
    console.log(`y =${myObject.y}`);
    console.log(`z =${myObject.z}`);
}
let minhasCoordenadas = {
    x: 10,
    y: 15,
    z: 25
};
showCoords(minhasCoordenadas);
function showPet(meuPet) {
    console.log(meuPet.nome);
    console.log(meuPet.peso);
    console.log(meuPet.raca);
    console.log(meuPet.idade);
}
showPet({ nome: 'Floki', peso: 4, raca: 'Gatinho', idade: 32 });
// FUNCÃO SEM RETORNO
function semRetorno() {
    console.log('Sou sem retorno');
}
semRetorno();
// LITERAL TYPES
let teste;
teste = 'testando';
// TYPE UNKNOW
function algumaCoisa(x) {
    if (typeof x === 'number') {
        console.log('SOu um Numero');
    }
    else {
        console.log('Não sou um numero');
    }
}
// NEVER
function showErroR(msgError) {
    throw new Error(msgError); // throw - um metodo para processamentos de erro
}
// showErroR('Deu error aqui')
// REST E SPREAD no JS
// spread
let umArray = [1, 2, 3, 4, 5];
let umNovoArray = [...umArray, 6, 7, 8, 9, 10];
console.log(umNovoArray);
// rest
function oneFunction(...a) {
    console.log(a);
}
oneFunction(1, 2, 3, 4, 5, 6);
// DESTRUCTURING com parametros e objetos
function showProdutos({ nome, preco }) {
    return `O nome do produto é ${nome} e o preço dele é: ${preco}`;
}
const camisa = {
    nome: 'Camisa de Algodão',
    preco: 39.90
};
console.log(showProdutos(camisa));
// READONLY
const meuReadonly = [['mikael']];
const fusca = {
    marca: 'VW',
    modelo: 'fusca 1600',
    qtdPneus: 4,
};
// fusca.marca = 'Ford'
console.log(fusca.marca);
function showUserDatails(newUser) {
    return `Seu e-mail é: ${newUser.email} sua senha é: ${newUser.senha} e sua regra de acesso é: ${newUser.regra ? newUser.regra : 'SEM REGRA'}`;
}
const user10 = {
    email: 'Jota@teste.com.br',
    senha: 123456,
    regra: 'gerente'
};
const user11 = {
    email: 'convidado@teste.com.br',
    senha: 'sem senha',
};
console.log(showUserDatails(user10));
console.log(showUserDatails(user11));
