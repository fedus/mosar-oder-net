type Tweet = {
    id: string;
    name: string;
    handle: string;
    createdAt: Date;
    likes: number;
    retweets: number;
    text: string;
};

export default Tweet;