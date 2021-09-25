
type Estatisticas = {
    maior: number,
    menor: number,
    media: number
}


function obterEstatisticas(numeros: number[]): Estatisticas {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// b - Existe a numerosOrdenados, que é do tipo array, o soma que é do tipo number e a estatisticas que é um objeto.

function obterEstatisticasTotalmenteTipada(numeros: number[]): Estatisticas {
    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a -b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: Estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// c

type AmostraDeIdades = {
    numeros: number[],
    obterEstatisticas: (number: number[]) => Estatisticas
}

const amostraDeIdades: AmostraDeIdades = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas 
}