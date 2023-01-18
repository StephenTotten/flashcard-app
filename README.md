![sceenshot](./assets/images/Flashstack%20Learning%202.png)


## Flashcard App
For kids, learning through flashcards is a great way to simplify and present information. Our flashcard set teaches the alphabet, numbers, word definitions, and even includes the ability to create custom flashcards.

## Table of contents
* [How it works](#how-it-works)
* [API's](#apis-used)
* [WireFrame](#wireframe)
* [Preview](#preview)
* [Flashcard](#flashcard-page)
* [Functions](#functions)
* [Future Features](#future-features)
* [Collaborators](#collaborators)

## How it Works
Users can click a button that contains the topic they want to learn. This will load the flashcard deck that the user can click through to hear the content of the flashcard and flip to see the answer. This simple functionality keeps users easily engaged and able to learn a mulitutde of topics rather easy.

## APIs Used
>WordsAPI: https://rapidapi.com/dpventures/api/wordsapi/
    - Words API retrieves information about English words, including definitions, synonyms, rhymes, pronunciation, syllables, and frequency of usage. This API serves as our library of teachable concepts.

>GeoDB Cities API: https://rapidapi.com/wirefreethought/api/geodb-cities/
    - GeoDB has an extensive amount of data on global cities, states, countries, and regions. This allouwed us to create our most challenging deck: flashcards on cities and their capitals.

## WireFrame
![original-project-outline](./assets/images/WireFrame1%20copy.png)

Our original wireframe includes a header, aside, and body section. Our aside serves as the menu for topics and custom cards. Our main section displays the current flashcard with the option to flip through its question and answer.
For this Project we will be using these three main front end languages HTML, CSS, JavaScript
- HTML - this is the markup language for our document to be displayed on the web browser
- CSS - this is the language we use to style an HTML document as well as describes how HTML elements should be displayed.
- JavaScript - this  is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else

## Preview
![screenshot](./assets/images/Landing%20page.JPG)

# Flashcard Page

## Functions
- Alphabet - returns a leter either in upper or lower case formatting

![screenshot](./assets/images/Alpha.JPG)
- Numbers - returns a random number 1-100

![screenshot](./assets/images/Numbers.JPG)
- Definitions - returns a word on the front of the card with the definition of the word on the back from the API

![screenshot](./assets/images/Definition%201.JPG)
![screenshot](./assets/images/Definition%202.JPG)
- Cities - returns a random city from the API

![screenshot](./assets/images/Cities.JPG)
- Custom - Ability to generate new cards with questions and answers with the use of the form function

![screenshot](./assets/images/Custom.JPG)


## Latest Development Changes
```
git clone https://github.com/Crothos/flashcard-app/issues
```

## Future Features
With this project we would like to expand our scope beyond the topics we have covered and really set the bar for learning systems for children and young adults.

These are some of our purposed additions:
- Text to speech function with an API call so that the either words, defenitions, letters or numbers will be read out to the user.
- Expand our scope of being able to set up more customizable cards and decks that the users can save to their profile.
- Adding additional catagories to the website ranging from flags, states, math problems, history questions etc. with the use of API's.
- Ability for users to have their custom decks saved and also sharded with the site and users with the ability to score and upvote decks.
- Have functionality to sort custom decks by grade level and skill level for better ease of access as well as a search function for decks.

# Resources
- [RapidAPI](https://rapidapi.com/collection/list-of-free-apis)
- [W3schools](https://www.w3schools.com/)
- [Developer.Mozilla](https://developer.mozilla.org/en-US/)
- [Jeff Cuartas](https://jefferson-cuartas.medium.com/how-to-create-a-flip-card-effect-using-javascript-767dd945210c)
- [Geeksforgeeks](https://www.geeksforgeeks.org/javascript/)

## License
- [MIT](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)

# Collaborators
- Stephen Totten (https://github.com/Crothos)
- Ryan Damron (https://github.com/RyanDamron)
- Jared Gibson (https://github.com/jared-GG747)
- Holden Claus (https://github.com/HoldyClaus)
