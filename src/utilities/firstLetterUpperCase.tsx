export const firstLetterUpperCase = (word: string) => {
    if(word === "ui" || word === "ux") return word.toUpperCase()
    return `${word.slice(0, 1).toUpperCase()}${word.slice(1)}`
  }