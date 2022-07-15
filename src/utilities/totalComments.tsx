export const totalComments = (comments: any) => {
    let total = 0
    if(comments){
        comments.forEach((comment: any)=>{
            total += comment.replies.length
            total++
        })
    }

    return total
  }