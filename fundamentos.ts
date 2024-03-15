// tipo NUMBER

import { Interface } from "readline"

let numero: number = 2 

// tipo STRING

let palavra: string = 'Mikael'

// tipo BOOLEAN

let verdardeiro: boolean = true
let falso: boolean = false

// ANNOTATION  e INFERENCE
let minhaVariavel: string  = 'text' // ANNOTATION
let meuArray = [1,2,3,4,5,6,7,8,9] // INFERENCE

minhaVariavel = 'Oliveira'
meuArray.push(10)
let multiploArray = [1, 2, 'a', 'b', true, false]
multiploArray.push()





let num: number[] = [1,2,3,]
let letras: string[] = ['a','b','c',]
let misto: any[] = ['a',1,'c',true]

const nomes :Array<string> = ['Joao','Maria','Eduardo',]


function minhasLetras(a:string, b:string){

    console.log(a, b)

}

minhasLetras('a','b')


function soma(x:number, y:number): number {
    let soma: number = x + y

    return soma
}

function coordenadas (cord:{ x:number , y: number}){
    console.log(`A coordenada X é: ${cord.x}`)
    console.log(`A coordenada Y é: ${cord.y}`)
}

const minhaCoordenada = {x: 329, y: 72.6}

coordenadas(minhaCoordenada)

function mosstreNumeros(a:number, b:number, c?:number){
    console.log(`A: ${a}`)
    console.log(`B: ${b}`)
    console.log(`C: ${c}`)
}
mosstreNumeros(1,2,3)
mosstreNumeros(4,5)

function validaOpcao(opcao1: string | number, opcao2: number | boolean){
    console.log(opcao1, opcao2)

}
validaOpcao('Mikael',true)


type myAlias = number | string

function showId(id: myAlias){
    console.log(`O ID é: ${id}`)
}

showId(14)
showId('14')

function showCpf(cpf: myAlias){
    console.log(`O CPF é: ${cpf}`)
}

showCpf(12345678910)
showId('123.456.789-10')

type User = {
    name: string,
    idade: number
}

function userDetails(user: User){
    console.log(`Nome: ${user.name}`)
    console.log(`Idade: ${user.idade}`)
} 

userDetails({name: 'Paulo',idade: 26})

// INTERFACES

interface Coords {
    x: number,
    y: number,
    z : number
}

function showCoords(myObject: Coords){
    console.log(`x =${myObject.x}`)
    console.log(`y =${myObject.y}`)
    console.log(`z =${myObject.z}`)
}

let minhasCoordenadas = {
    x: 10,
    y: 15,
    z: 25
}

showCoords(minhasCoordenadas)



// direrença ENTRE ALIAS E INTERFACES

type myPet ={
    nome: string,
    peso: number,
    raca: string,
    idade: number,
}

function showPet(meuPet:myPet){
    console.log(meuPet.nome)
    console.log(meuPet.peso)
    console.log(meuPet.raca)
    console.log(meuPet.idade)
}

showPet({nome: 'Floki', peso:4, raca: 'Gatinho', idade: 32})

type myPet1 = {
    tipoRacao: string
}

// FUNCÃO SEM RETORNO

function semRetorno(): void {
    console.log('Sou sem retorno')
}

semRetorno()

// LITERAL TYPES

let teste: 'testando'

teste = 'testando'


// TYPE UNKNOW

function algumaCoisa ( x: unknown ): void{
    if(typeof x === 'number'){
        console.log('SOu um Numero')
    }else{  
        console.log('Não sou um numero')
    }
}

// NEVER

function showErroR(msgError: string): never {
    throw new Error(msgError) // throw - um metodo para processamentos de erro
}

// showErroR('Deu error aqui')

// REST E SPREAD no JS
// spread
let umArray = [1,2,3,4,5]

let umNovoArray= [...umArray,6,7,8,9,10]

console.log(umNovoArray)

// rest
function oneFunction(...a: number[]){
    console.log(a)
}
oneFunction(1,2,3,4,5,6)


// DESTRUCTURING com parametros e objetos


function showProdutos({nome, preco }: {nome: string, preco:number}): string {
    return `O nome do produto é ${nome} e o preço dele é: ${preco}`
}
const camisa = {
    nome: 'Camisa de Algodão',
    preco: 39.90
}

console.log(showProdutos(camisa))

// READONLY

const meuReadonly: readonly string[][] = [['mikael']]

// meuReadonly.push(['Oliveira'])
// OBS: toda inferface deve iniciar com letra Maiuscula.
interface Carro{
   readonly marca: string,
    modelo: string,
    qtdPneus: number,
}

const  fusca: Carro ={
    marca: 'VW',
    modelo: 'fusca 1600',
    qtdPneus: 4,
}

// fusca.marca = 'Ford'

console.log(fusca.marca)


// OPCIONAL EM INTERFACES 
interface newUser {
    email: string
    senha: string | number
    regra?: string
}
function showUserDatails(newUser: newUser): string{
    return `Seu e-mail é: ${newUser.email} sua senha é: ${newUser.senha} e sua regra de acesso é: ${ newUser.regra ? newUser.regra : 'SEM REGRA' }`
}
 
const user10: newUser = {
    email: 'Jota@teste.com.br',
    senha: 123456,
    regra: 'gerente'
}

const user11: newUser = {
    email: 'convidado@teste.com.br',
    senha: 'sem senha',  
}

console.log(showUserDatails(user10))
console.log(showUserDatails(user11))