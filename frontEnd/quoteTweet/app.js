var quotes = [
  { "quote": "Life isn’t about getting and having, it’s about giving and being.",
    "legend": "Steve Jobs"
  },
  { "quote": "Life is about making an impact, not making an income.",
    "legend": "Kevin Kruse"
  },
  { "quote": "Whatever the mind of man can conceive and believe, it can achieve.",
    "legend": "Napoleon Hill"
  },
  { "quote": "Strive not to be a success, but rather to be of value.",
    "legend": "Albert Einstein"
  },
  { "quote": "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    "legend": "Robert Frost"
  },
  { "quote": "I attribute my success to this: I never gave or took any excuse.",
    "legend": "Florence Nightingale"
  },
  { "quote": "You miss 100% of the shots you don’t take.",
    "legend": "Wayne Gretzky"
  },
  { "quote": "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
    "legend": "Michael Jordan"
  },
  { "quote": "The most difficult thing is the decision to act, the rest is merely tenacity.",
    "legend": "Amelia Earhart"
  },
  { "quote": "Every strike brings me closer to the next home run.",
    "legend": "Babe Ruth"
  },
  { "quote": "Definiteness of purpose is the starting point of all achievement.",
    "legend": "W. Clement Stone"
  },
  { "quote": "Life isn't about getting and having, it's about giving and being.",
    "legend": "Kevin Kruse"
  },
  { "quote": "Life is what happens to you while you’re busy making other plans.",
    "legend": "John Lennon"
  },
  { "quote": "We become what we think about.",
    "legend": "Earl Nightingale"
  },
  { "quote": "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
    "legend": "Mark Twain"
  },
  { "quote": "Life is 10% what happens to me and 90% of how I react to it.",
    "legend": "Charles Swindoll"
  },
  { "quote": "The most common way people give up their power is by thinking they don’t have any.",
    "legend": "Alice Walker"
  },
  { "quote": "The mind is everything. What you think you become.",
    "legend": "Buddha"
  },
  { "quote": "The best time to plant a tree was 20 years ago. The second best time is now.",
    "legend": "Chinese Proverb"
  },
  { "quote": "An unexamined life is not worth living.",
    "legend": "Socrates"
  },
  { "quote": "Eighty percent of success is showing up. ",
    "legend": "Woody Allen"
  },
  { "quote": "Your time is limited, so don’t waste it living someone else’s life.",
    "legend": "Steve Jobs"
  },
  { "quote": "Winning isn’t everything, but wanting to win is.",
    "legend": "Vince Lombardi"
  },
  { "quote": "I am not a product of my circumstances. I am a product of my decisions.",
    "legend": "Stephen Covey"
  },
  { "quote": "Every child is an artist.  The problem is how to remain an artist once he grows up.",
    "legend": "Pablo Picasso"
  },
  { "quote": "You can never cross the ocean until you have the courage to lose sight of the shore.",
    "legend": ""
  },
  { "quote": "You can never cross the ocean until you have the courage to lose sight of the shore.",
    "legend": "Christopher Columbus"
  },
  { "quote": "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    "legend": "Maya Angelou"
  },
  { "quote": "Either you run the day, or the day runs you.",
    "legend": "Jim Rohn"
  },
  { "quote": "Whether you think you can or you think you can’t, you’re right.",
    "legend": "Henry Ford"
  },
  { "quote": "The two most important days in your life are the day you are born and the day you find out why. ",
    "legend": "Mark Twain"
  },
  { "quote": "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.",
    "legend": "Johann Wolfgang von Goethe"
  },
  { "quote": "The best revenge is massive success.",
    "legend": "Frank Sinatra"
  },
  { "quote": "People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.",
    "legend": "Zig Ziglar"
  },
  { "quote": "Life shrinks or expands in proportion to one's courage.",
    "legend": "Anais Nin"
  },
  { "quote": "Learn the rules like a pro, so you can break them like an artist.",
    "legend": "Pablo Picasso"
  }
  ];


function randomQuotes() {
    var x = Math.floor(Math.random() * (quotes.length - 0));
      $(".quote").html(quotes[x].quote);
      $(".name").html(quotes[x].legend);

      $(".tweet-time").click(function () {
        $(this).attr("href", "http://twitter.com/intent/tweet?text=" + quotes[x].quote + " -" + quotes[x].legend);
      });
}

function randomBackground() {
    var r = Math.floor(Math.random() * (256 - 0));
    var g = Math.floor(Math.random() * (256 - 0));
    var b = Math.floor(Math.random() * (256 - 0));
    $("body").css("background-color", "rgb("+r+","+g+","+b);
}

$(document).ready(function(){
randomQuotes();
randomBackground();

$(".new-quote").click(function () {
randomQuotes();
randomBackground();
});


});
