




const convertPhraseToSnakeCase = (phrase) => {
    const splittedWords = phrase.split(/(?=[A-Z])/)
    const allUpperCase = splittedWords.map( word => word.toUpperCase())
    return allUpperCase.join('_')
};


const uppercaseFirstLetter = (letter) => {
    const splittedLetter = letter.split('')
    return [splittedLetter[0].toUpperCase() , ...splittedLetter.slice(1)].join('')
}



module.exports = {
    convertPhraseToSnakeCase,
    uppercaseFirstLetter
};