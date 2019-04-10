// Get the header element.
const gotHeader = document.querySelector("header");

// Get all the section elements.
const gotSections = document.querySelectorAll("section");

// Get the section element with class="current".
const gotCurrent = document.querySelector(".current");

// Get the section that comes after the current section.
const gotNext = gotCurrent.nextElementSibling;

// Get the h2 node from the section before the "current" section.
const gotNode = gotCurrent.previousElementSibling.children;

// Get the div that contains the section that has an h2 with a class of "highlight".
const gotDiv = document.querySelector(".col");

// Using a single statement, get all the sections that contain an h2.
const gotH = Array.from(document.querySelectorAll("section>h2")).map(function(node){return node.parentElement})