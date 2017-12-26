// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Creating the QUOTES variable as an array of objects
//Each object holds a quote, the source, an optional citation, and an optional year
var quotes = [
    {quote: "HANDICAP to mr me, never told a PARALYZE still here and the WHEEL CHAIR for DISABILITY", source: "Handlez Mcgee", citation:"The Arena Mixtape", year: 2013, tags:"Music"},
    {quote: "Safe sex is great sex, you better wear a latex, 'cause you don't want that late text that...I think I'm late text...so wrap it up", source: "Lil Wayne", citation:"Lollipop Remix", year: 2008, tags:"Music"},
    {quote: "Feel it way down in my CELL all I need is one MICRO-PHONE", source: "Handlez Mcgee", citation:"aMC Mixtape", year: 2014, tags:"Music"},
    {quote: "Revenge is a dish best served cold...", source: "Unknown"},
    {quote: "The elephant in the room is never mentioned...because that room is too full to fit anyone else.", source: "Me", citation:"This Page", year: 2017, tags:"Comedy"},
    {quote: "You cannot shake hands with a clenched fist.", source: "Indira Gandhi", tags: "Inspiration"},
    {quote: "There is nothing permanent except change.", source: "Heraclitus"},
    {quote: "All that we see or seem is but a dream within a dream.", source: "Edgar Allan Poe", year: 1849}
    
];

//Function to pull a quote form the array QUOTES randomly
function getRandomQuote() {
    var randomNum = Math.floor((Math.random() * quotes.length));
    var choice = quotes[randomNum];
    
    return choice;  
}

//Function to change the background to a random color.
function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    var rgbColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';    
    var rgbColorBtn = 'rgb(' + (red - 50) + ', ' + (green- 50) + ', ' + (blue + 30) + ')';
 
    //background of the body
    document.body.style.backgroundColor = rgbColor;
    //background of the button
    document.getElementById("loadQuote").style.backgroundColor = rgbColorBtn;

}

//Function to print the random quote to the page
function printQuote() {
    var newQuote = getRandomQuote();
    var message = '<p class="quote">' + newQuote.quote + '</p><p class="source">' + newQuote.source;
    
    if(newQuote.citation) {
        message += '<span class="citation">' + newQuote.citation + '</span>';
    }
    if (newQuote.year) {
        message += '<span class="year">' + newQuote.year + '</span>';
    }
    
    message += '</p>';
    if (newQuote.tags) {
        message += '<p class="tags">' + newQuote.tags + '</p>';
    }
    
    document.getElementById('quote-box').innerHTML = message;

    //Calls function to change button and body background
    randomColor();
}

//Function to automatically generate quotes and backgrounds if the user does not hit the button
var myVar;

function automaticRandomizer() {
    myVar = setInterval(printQuote, 10000);
}
automaticRandomizer();