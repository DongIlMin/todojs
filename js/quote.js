const quotes = [
    {
        quotes: "If you can't find your way, make your way",
        author: "hannibal barca",
    },
    {
        quotes: "There is no paradise where you escape",
        author: "Berserk",
    },
    {
        quotes: "when do you think people die? it's when they are forgotten.",
        author: "Dr.Hiluluk",
    },
    {
        quotes: "If you don't like the hand that fates' dealt with, fighr for a new one",
        author: "Uzumaki Naruto ",
    },
    {
        quotes: "Growth occurs when one goes beyond one's limits. Realizing that is also part of training.",
        author: "Itachi Uchiha",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]; 

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;