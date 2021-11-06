
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
for(var count = 0; count < tweet_length; count++) {
    console.log(`'${twitterPost.tweet[count]}' - ${twitterPost.username[count]} (${twitterPost.created_at[count]}) `);
};