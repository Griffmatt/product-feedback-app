import { suggestions } from "../utilities/interfaces"

import { totalComments } from "./totalComments";


export const sortSuggestions = (value: string, suggestions: suggestions[]) =>{
    switch (value) {
        case "Most Upvotes":
            return [...suggestions].sort((a, b)=> -a.upvotes - -b.upvotes)
        case "Least Upvotes":
            return [...suggestions].sort((a, b)=> a.upvotes - b.upvotes)
        case "Most Comments":
            return [...suggestions].sort((a, b)=> -totalComments(a.comments) - -totalComments(b.comments))
        case "Least Comments":
            return [...suggestions].sort((a, b)=> totalComments(a.comments) - totalComments(b.comments))
        default:
            return [...suggestions].sort((a, b)=> -a.upvotes - -b.upvotes)
      }
}