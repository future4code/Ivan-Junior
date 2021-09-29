// Exercício (1) - a
// const myString: string = 50
// Aparece um erro dizendo que a variável é do tipo string, portanto um número não pode ser atribuído a ela.

// - b
// let myNumber: number | string = 50
// myNumber = "Labenu"
// -> Posso atribuir um | e declarar um outro tipo na variável, então o novo tipo será aceito.

// - c

enum userTypeColor {
    RED = "Red",
    BLUE = "Blue",
    GREEN = "Green",
    ORANGE = "Orange",
    PURPLE = "Purple",
    YELLOW = "Yellow"
}

type userData = {
    name: string,
    age: number,
    favoriteColour: userTypeColor
}

const user: userData = {
    name: "Klein",
    age: 27,
    favoriteColour: userTypeColor.BLUE
}

const firstUser: userData = {
    name: "Adam",
    age: 20,
    favoriteColour: userTypeColor.ORANGE
}

const secondUser: userData = {
    name: "Ivan",
    age: 22,
    favoriteColour: userTypeColor.PURPLE
}

const thirdUser: userData = {
    name: "Carol",
    age: 30,
    favoriteColour: userTypeColor.RED
}