interface Subreddit {
    display_name: string
}

interface Author {
    name: string
}

interface RedditPost {
    id: string,
    total_awards_received: number,
    created: number,
    title: string,
    score: number,
    num_comments: number,
    subreddit_name_prefixed: string,
    url_overridden_by_dest: string,
    thumbnail: string,
    stickied: boolean,
    is_self: boolean,
    over_18: boolean,
    subreddit: Subreddit,
    author: Author
}

export { RedditPost as Post };
