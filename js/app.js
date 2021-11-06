
// this is to create an array JavaScript Objects
var twitterPost = {
    tweet: ['Looking for nice tweets to post on Twitter?', 'Wondering what the best tweet for Twitter actually is?', 'Struggling to craft good tweets that grow your Twitter followers, engagement and reach?', "You're not alone!", 'It can take a while to find your groove on Twitter', 'Although Twitter is constantly changing -- there are some tweet types that are classic and stand the test of time.', 'They are good tweets that build rapport and highlight your personality.', "I've listed 13 of these tweets below -- and I've included a template for each one (for you to copy).", 'If you are new to Twitter, you can experiment with these classic tweets and the endless variations you can create with them.', 'We hope you find these helpful as you grow your Twitter audience!'],
    username: ['James', 'Bob the Builder', 'Johnson', 'Faketwitter', 'Ran_out_of_ideas', 'OoOoOo_half_way_there', 'Wow_4_more', 'Almost_there', "Don't_stop_me_now", 'The_last_username'],
    created_at: ['12-12-2021', '10-12-2020', '10-10-1990', '08-30-1997', '04-30-1965', '12-12-2012', '09-09-1999', '08-08-2008', '07-07-2017', '06-06-2016'],
    age: [12, 14, 24, 54, 34, 64, 23, 14, 19, 31]
};

// This is to determine how many posts there are
var tweet_length = twitterPost.tweet.length;

// this is the loop to print out tweet, username and created_at field
for (var count = 0; count < tweet_length; count++) {
    console.log(`'${twitterPost.tweet[count]}' - ${twitterPost.username[count]} (${twitterPost.created_at[count]}) `);
};


// this is to rearrange my advanced array
var tweets = [
    {
        content: twitterPost.tweet[0],
        username: twitterPost.username[0],
        created_at: twitterPost.created_at[0],
        age: twitterPost.age[0],

    }, {
        content: twitterPost.tweet[1],
        username: twitterPost.username[1],
        created_at: twitterPost.created_at[1],
        age: twitterPost.age[1],

    }, {
        content: twitterPost.tweet[2],
        username: twitterPost.username[2],
        created_at: twitterPost.created_at[2],
        age: twitterPost.age[2],

    }, {
        content: twitterPost.tweet[3],
        username: twitterPost.username[3],
        created_at: twitterPost.created_at[3],
        age: twitterPost.age[3],

    }, {
        content: twitterPost.tweet[4],
        username: twitterPost.username[4],
        created_at: twitterPost.created_at[4],
        age: twitterPost.age[4],

    }, {
        content: twitterPost.tweet[5],
        username: twitterPost.username[5],
        created_at: twitterPost.created_at[5],
        age: twitterPost.age[5],

    }, {
        content: twitterPost.tweet[6],
        username: twitterPost.username[6],
        created_at: twitterPost.created_at[6],
        age: twitterPost.age[6],

    }, {
        content: twitterPost.tweet[7],
        username: twitterPost.username[7],
        created_at: twitterPost.created_at[7],
        age: twitterPost.age[7],

    }, {
        content: twitterPost.tweet[8],
        username: twitterPost.username[8],
        created_at: twitterPost.created_at[8],
        age: twitterPost.age[8],

    }, {
        content: twitterPost.tweet[9],
        username: twitterPost.username[9],
        created_at: twitterPost.created_at[9],
        age: twitterPost.age[9],

    },
]

// function to verify age is above 17
function ageVerify(num) {
    if (num['age'] >= 18) {
        return true;
    } else {
        return false;
    }
}

// declare variable to represent filtered list
var AgeVerfiedTweets = tweets.filter(ageVerify);

// print out filter list in a legible format
console.log('*****Below is the filtered list of tweets of users over the age of 17*****')
for (var count = 0; count < AgeVerfiedTweets.length; count++) {
    console.log(`'${AgeVerfiedTweets[count]['content']}' - ${AgeVerfiedTweets[count]['username']} (${AgeVerfiedTweets[count]['created_at']}) AGE:${AgeVerfiedTweets[count]['age']}`);
};