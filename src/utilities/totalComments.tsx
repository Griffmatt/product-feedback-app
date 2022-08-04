import { comment } from "../utilities/interfaces"

export const totalComments = (comments: comment[]) => {
    let total = 0
    if(comments){
        comments.forEach((comment: any)=>{
            total += comment.replies.length
            total++
        })
    }

    return total
  } 