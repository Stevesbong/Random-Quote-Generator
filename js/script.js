
// ARRAY OF QUOTES OBJECTS
const quotes = [
  {
    quote:"If opportunity doesn’t knock, build a door.",
    source:"Milton Berle",
    citation:"Milton Berle's Private Joke File",
  },
  {
    quote:"I learned a long time ago the wisest thing I can do is be on my own side.",
    source:"Maya angelou",
  },
  {
    quote:"Do what you can, with what you have, where you are.",
    source:"Theodore Roosevelt",
  },
  {
    quote:"If you cannot do great things, do small things in a great way.",
    source:"Napoleon Hill",
    year:2018,
  },
  {
    quote:"Live as if you were to die tomorrow. Learn as if you were to live forever.",
    source:"Mahatma Gandhi",
    tags: ["carpe-diem", "education", "inspirational"],
  },
]

// VARIOUS HEX CODE COLOR
const randomBackgroundColor = [ 
  "#deb2ee", "#7ee6fd", "#88d9a0", "#4da2bb", "#51ddfc", "#5b85b7", "#fd9f85" 
];


// GET RANDOM ONE QUOTE FROM QUOTES ARRAY
function getRandomQuote(quotes) {
  return quotes[ Math.floor( Math.random() * quotes.length ) ];
}


// DISPLAY QUOTE TO APP
function printQuote() {

  const body = document.querySelector('body');

  // GET ONE QUOTE FROM ARRAY
  const oneQuote = getRandomQuote(quotes);

  // QUOTE TEMPLATE STRING LITERAL
  let quoteTemplate = `
    <p class="quote">${oneQuote.quote}</p>
    <p class="source">${oneQuote.source}
  `;

  // RANDOM COLOR GENERATOR
  const color = arr => {
    return arr[ Math.floor( Math.random() * arr.length) ];
  }

  // IT WILL CHANGE BACKGROUND COLOR EVERYTIME USER CLICKED BUTTON
  body.style.backgroundColor = color(randomBackgroundColor);


  // IF QUOTE HAS CITATION, ADD TO QUOTE TEMPLATE
  if(oneQuote.hasOwnProperty('citation')) {
    quoteTemplate += `<span class="citation">${oneQuote.citation}</span>`;
  }
  
  // IF QUOTE HAS YEAR, ADD TO QUOTE TEMPLATE
  if(oneQuote.hasOwnProperty('year')) {
    quoteTemplate += `<span class="year">${oneQuote.year}</span>`;
  }

  
  // CLOSE SECOND P TAG AT THE END OF THE QUOTE TEMPLATE
  quoteTemplate += `</p>`;
  
  // IF QUOTE HAS TAGS, ADD TO QUOTE TEMPLATE
  if(oneQuote.hasOwnProperty('tags')) {
    let tagString = "";
    
    for(let i = 0; i < oneQuote.tags.length; i++) {
      tagString += `<span class="tags">${oneQuote.tags[i]}</span>`;
    }
    quoteTemplate += `<p>Tags: ${tagString}</p>`;
  }

  // ADD QUOTE TEMPLATE TO THE QUOTE-BOX DIV
  document.getElementById('quote-box').innerHTML = quoteTemplate;
}


// ADD BUTTON EVENT LISTENER WHEN USER CLICKED BUTTON
document.getElementById('load-quote').addEventListener("click", printQuote, false);


// AUTO-REFRESHED QUOTES
// AUTOMATICALLY UPDATS QUOTE EVERY 5 SECOND
setInterval( printQuote, 5000);