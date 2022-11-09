/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// const $tweet = $(`<article class="tweet">Hello world</article>`);

const createTweetElement = tweetData => {
  const $tweet = $(`
  <article class="tweet">
          <header class="tweet-header">
            <div class="tweet-profile">
              <img class="tweet-avatar" src="/images/profile-hex.png">
              <h3>${tweetData.user.name}</h3>
            </div>
          </header>
          <div class="tweet-comment">
            $escape(tweetData.content.text)
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



// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const $tweet = createTweetElement(tweetData);


// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.