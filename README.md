# Landing Page Project

## Table of Contents

* [Project Title](#landing-page-project)
* [Project Description](#project-description)
* [Dependencies](#dependencies)
* [Change in the Code](#change-in-the-code)
* [JS Version](#js-version)

## Project Description

This project start with a number of sections and the user can add many additional sections without limit by clicking on **Add Section** Button to add section and add nav link inside the navbar
When the user click on any link in the navbar the window will scroll smoothly to reach the section which the user clicked on
When the user make a scroll the section which is in the viewport of the screen, the section will make its background color dark and nav link which related to the section will change its background color to tell user where he/she is
if scrollY value is greater than 400 from the top the button name **Up** will show from the top and stay in the bottom, and if the user clicked on it, the window will scroll to the top the button will go back to its position in the top and disapear
the navmenu will disapear after 5 seconds if the user don't make any scroll on the webpage

## Dependencies

None

## Change in the Code

I changed on *HTML* file to add two buttons as **DIV** and Style them in the CSS file which located in the bottom in *CSS* file
*app.js* JS file fully is written by me

Removing CSS property *scroll-behavior: "smooth"* to make it with javascript using *scrollIntoView()*
Using getBoundingClientRect() api to know which section is in the viewport
Adding toggle menu to show menu in full screen to make it more responsive in mobile and tablets

***You can check what is changed from the commit page in this repo***

## JS Version

ES6