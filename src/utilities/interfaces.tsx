export interface reply{
    content: string,
    replyingTo: string,
    id: string,
    commentId?: number,
    user: {
        image: string,
        name: string,
        username: string
    }
}

export interface comment{
    id: number | string,
    content: string,
    feedbackId?: number,
    user: {
    image: string,
    name: string,
    username: string
    },
    replies:reply[]

}


export interface suggestions{
    id: number | string,
    title: string,
    category: string,
    upvotes: number,
    status: string,
    description: string,
    comments: comment[]
}