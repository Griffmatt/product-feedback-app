export interface replies{
    content: string,
    replyingTo: string,
    user: {
        image: string,
        name: string,
        username: string
    }
}

export interface comment{
    id: number,
    content: string,
    user: {
    image: string,
    name: string,
    username: string
    },
    replies:replies[]

}


export interface suggestions{
    id: number,
    title: string,
    category: string,
    upvotes: number,
    status: string,
    description: string,
    comments: comment[]
}