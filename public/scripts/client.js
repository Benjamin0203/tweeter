/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// const $tweet = $(`<article class="tweet">Hello world</article>`);

// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]


const createTweetElement = tweetData => {
  let $tweet = $(`
  <article class="tweet">
          <header class="tweet-header">
            <div class="tweet-profile">
              <img class="tweet-avatar" src="/images/profile-hex.png">
              <h3>${tweetData.user.name}</h3>
            </div>
          </header>
          <div class="tweet-comment">
            ${tweetData.content.text}
          </div>
          <footer class="tweet-new-footer">
            <span class="tweet-date">${tweetData.created_at}</span>
            <div class="tweet-logos">
              <i class="fa-solid fa-flag"></i>
              <i class="fa-solid fa-retweet"></i>
              <i class="fa-solid fa-heart"></i>
            </div>
          </footer>
        </article>
  `);
  return $tweet;
};

const renderTweets = tweets => {
  $('#tweet-container').empty();
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $('#tweet-container').prepend($tweet);
  }
};



$(() => {
  renderTweets(data);
});


// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.