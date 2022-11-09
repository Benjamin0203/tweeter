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
      "handle": "@rd"
    },
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
            <span class="tweet-date">${timeago.format(tweetData.created_at)}</span>
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
  $('#tweets-container').empty();
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $('#tweets-container').prepend($tweet);
  }
};

const loadTweets = () => {
  $.get("/tweets", data => {
    renderTweets(data);
  })
};

//Document ready function
$(() => {
  $("#new-tweet-form").on("submit", event => {
    // prevent the default form submission
    event.preventDefault();

    const $tweetText = $("#tweet-text");
    const $text = $tweetText.val();

    if (!$text) {
      return alert("Your tweet is empty!");
    }
    
    if ($text.length > 140) {
      return alert("Your tweet is too long!");
    }

    $.ajax({
      url: "/tweets",
      method: "POST",
      data: $("#new-tweet-form").serialize()
    }).then(() => {
      // load the tweets callback function
      loadTweets();
      //reset texts to empty (140)
      $tweetText.val("");
      $(".counter").text(140);
    });
    
     
  });
});

