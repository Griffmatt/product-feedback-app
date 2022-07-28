import { suggestions } from "../utilities/interfaces"

export const countStatus = (status: string, suggestions: suggestions[]) => {
    let count = 0
    suggestions.forEach((suggestion: suggestions)=>{
        if(suggestion.status.toLowerCase() === status) count++
    })
    return count
}