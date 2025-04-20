function printer ()  {
console.log("function normal")
}

printerer = () => {

    console.log("arrow function")
}
printer()
printerer()

// 1. Write a function that takes two numbers as arguments and returns their sum.
number1 = (x,y) => {
// x = 565
// y = 595
r = x + y
return r
}
result = number1(1,2)
console.log(result)
// 2. Write a function that takes an array of numbers and returns the largest number in the array.
const arrayOfNumbers = (a,b,c,d) => {
    return  Math.max(a,b,c,d)
}
array = arrayOfNumbers(1,9,3,4)
console.log(array)
// 3. Write a function that takes a string as an argument and returns the string reversed.
const stringReverse = () => {
    i = string1 = 'test'
   r = i.split("").reverse()
   return r
}
show = stringReverse()
console.log(show)
const numebersREverse = () =>{
    numerozinhos = [ 1,7,6,5,4,7,8,9,].reverse().join("")
    console.log(numerozinhos.split(""))
}
numebersREverse()

// 4. Write a function that takes an array of strings and returns the longest string in the array.
const arrayOfStrings = () => {
    arrayofS = ["teste1","cabeçuda","zoio"]
    return arrayofS.reduce((longest, current) => 
        current.length > longest.length ? current : longest
    )
    // converter = arrayofS.join()
    // console.log(converter)
    // experiemnt = converter.Math.max()
    // console.log(experiemnt)
}
n = arrayOfStrings()
console.log(n)

const champions = [
    {
        name: "Lucas Silva",
        age: 21,
        awards: [
            { title: "MVP 2023", value: 5000 },
            { title: "Campeão Mundial 2022", value: 20000 },
            { title: "Melhor Jogador BR 2021", value: 3000 }
        ]
    },
    {
        name: "Ana Souza",
        age: 19,
        awards: [
            { title: "Campeã Nacional 2024", value: 12000 },
            { title: "Revelação 2023", value: 2500 }
        ]
    },
    {
        name: "Pedro Lima",
        age: 24,
        awards: [
            { title: "Top 3 Mundial 2022", value: 8000 },
            { title: "Campeão Sul-Americano 2021", value: 7000 },
            { title: "MVP Regional 2020", value: 1500 }
        ]
    }
    
];
const maiorPremio = champions.reduce((valorAnterior, valorAtual) => {
    const awardsSum = valorAtual.awards.reduce((sum, award) => sum + award.value, 0);
    return valorAnterior + awardsSum;
}, 0);
console.log(maiorPremio)



const souGastao = [
    {
        name: "doido1",
        age: "90",
        gasto: 1200
    },
    {
        name: "doido2",
        age: "90",
        gasto: 1600
    },
    {
        name: "doido3",
        age: "90",
        gasto: 12200
    },
    {
        name: "doido4",
        age: "90",
        gasto: 12800
    },
    {
        name: "doido5",
        age: "90",
        gasto: 12900

    }
]
const quemGastaMais = souGastao.reduce((valorAnterior,valorAtual) =>valorAtual.gasto > valorAnterior.gasto? valorAtual : valorAnterior, souGastao[0])
console.log(quemGastaMais.name + " e o mais gastao " + quemGastaMais.gasto + " reais por mês")
const quemGastaMenos = souGastao.reduce ((valorAnterior,valorAtual) =>valorAtual.gasto < valorAnterior.gasto? valorAtual : valorAnterior, souGastao[0])
console.log(quemGastaMenos.name + " e o menos gastao porque gastou " + quemGastaMenos.gasto + " reais por mês")

const quemEmaisCulto = [
   {
    grupo1: [
        {
            name: "doido1",
            age: "90",
            livro: 11
        },
        {
            name: "doido2",
            age: "90",
            livro: 44
        },
        {
            name: "doido3",
            age: "90",
            livro: 65
        },
        {
            name: "doido4",
            age: "90",
            livro: 14
        },
        {
            name: "doido5",
            age: "90",
            livro: 86

        }],
    grupo2: [
        {
            name: "doida1",
            age: "90",
            livro: 22
        },
        {
            name: "doida2",
            age: "90",
            livro: 44
        },
        {
            name: "doida3",
            age: "90",
            livro: 33
        },
        {
            name: "doida4",
            age: "90",
            livro: 55
        },
        {
            name: "doida5",
            age: "90",
            livro: 77
        }
    ]
   }
]
const comparacao = quemEmaisCulto.reduce((_prev,current)=>{
    const grupo1Sum = current.grupo1.reduce((livroAnterior,livroAtual) => livroAnterior + livroAtual.livro, 0)
    const  grupo2Sum = current.grupo2.reduce((livroAnterior,livroAtual) => livroAnterior + livroAtual.livro, 0)
    if (grupo1Sum > grupo2Sum){
        return "grupo 1 é o mais culto com " + grupo1Sum + " livros"
    }else if (grupo2Sum > grupo1Sum){
        return "grupo 2 é o mais culto com " + grupo2Sum + " livros"
    }else{
        return "os dois grupos são iguais em livros"
    }
}, "")
console.log(comparacao)



