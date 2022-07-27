export const firstLetterUpperCase = (word: string) => {
    if(word === "ui" || word === "ux") return word.toUpperCase()
    return `${word[0].toUpperCase()}${word.slice(1)}`
  }