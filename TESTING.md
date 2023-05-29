# THE GAMER QUIZ

![The Gamer Quiz](docs/project.png)

The Gamer Quiz is an interactive front-end web application in quiz format, based on video games.

Visit the live site: [The Gamer Quiz](https://zest-studi-o.github.io/P02-The-Gamer-Quiz/)

## CONTENTS

* [AUTOMATED TESTING](#AUTOMATED-TESTING)
  * [W3C Validator](#W3C-Validator)
  * [JavaScript Validator](#JavaScript-Validator)
  * [Lighthouse](#Lighthouse)
* [MANUAL TESTING](#MANUAL-TESTING)
  * [Testing User Stories](#Testing-User-Stories)
  * [Full Testing](#Full-Testing)
* [BUG TRACKER](#BUG-TRACKER)
  *  [Solved Bugs](#Solved-Bugs)
  *  [Known Bugs](#known-Bugs)

- - -

Manual testing was carried out as soon as the project started using exploratory testing techniques and a list of bugs was identified and placed in a table to tackle.
At the same time as building each page, the site was tested in different screen sizes using developer tools to better adjust the design and make sure that it is responsive in all screen sizes.
Afterwards, formal test cases were developed and executed.
Automated testing was carried out at a later stage using validators and all errors were fixed, it was checked that all user goals are met and after this, a test case table was created to test the website using different devices and screen sizes. To finish, the project was shared in Slack for peer review.

## AUTOMATED TESTING

### W3C Validator

[W3C](https://validator.w3.org/) was used to validate the HTML on all pages of the website. It was also used to validate the CSS.

#### Home - Passed, no errors.
![index.html](docs/testing/w3/w3-home.png) 

#### Game select - Passed, no errors.
![index.html](docs/testing/w3/w3-select.png) 

#### Game - Errors and warnings.
![game.html](docs/testing/w3/w3-game-easy.png)

#### High Scores - Passed, no errors.
![high-scores.html](docs/testing/w3/w3-high-scores.png)

#### End - One warning "Empty heading".
This heading is used to pull the data with JS. 
![end.html](docs/testing/w3/w3-end.png)

#### 404 - Passed, no errors.
![404.html](docs/testing/w3/w3-404.png)

### W3C Validator

No errors were found when passing through the official (Jigsaw) validator.
![Jigsaw Validator](https://jigsaw.w3.org/css-validator/)

#### Style - Passed, no errors.
![style.css](docs/testing/jigsaw/css.png)

- - -

### JavaScript Validator (to complete again and add screenshots)

[jshint](https://jshint.com/) was used to validate the JavaScript.

#### Script - Passed.
No errors found.
![script.js](docs/testing/jshint/jshint-script.png)

#### Game - Passed.
No errors found. 
Warnings about three undefined variables, however, those are being used.
![game.js](docs/testing/jshint/jshint-game.png) 

#### High scores - Passed. 
![high-scores.js](docs/testing/jshint/jshint-highscores.png)

#### End - Passed. 
![end.js](docs/testing/jshint/jshint-highscores.png) - Passed.


### Lighthouse

I used Lighthouse within the Chrome Developer Tools to test the performance, accessibility, best practices and SEO of the website.

#### Desktop Results

![Home Page](docs/testing/lighthouse/lh-home-desktop.png)
![Game Page](docs/testing/lighthouse/lh-home-desktop.png)
![High scores pages](docs/testing/lighthouse/lh-high-scores-desktop.png)
![End Page](docs/testing/lighthouse/lh-end-desktop.png)
![404](docs/testing/lighthouse/lh-404-desktop.png)

#### Mobile Results

![Home Page](docs/testing/lighthouse/lh-home-mobile.png)
![Game Page](docs/testing/lighthouse/lh-home-mobile.png)
![High scores pages](docs/testing/lighthouse/lh-high-scores-mobile.png)
![End Page](docs/testing/lighthouse/lh-end-mobile.png)
![404](docs/testing/lighthouse/lh-404-mobile.png)
---

- - -

## MANUAL TESTING

### Testing User Stories

`First-Time Visitors`
| Goals | How are they achieved? |
| :--- | :--- |
| As a first-time visitor, I want to take part in a gaming quiz so that I can test my knowledge about video games. | The quiz questions are pulled from an API which offer a varied range of questions |
| As a first-time visitor, I want to play the quiz in different devices so that I can use all my devices at my convenience. | The game is fully responsive and can be played in any screen size |
| As a first-time visitor, I want to navigate easily the site so that I can understand quickly the game mechanics. | The game is easy to understand and further instructions are provided in how to play |

`Returning Visitors`
| Goals | How are they achieved? |
| :--- | :--- |
| As a returning visitor, I want to select the level of difficulty so that I can play in different modes and test further my knowledge | There is a feature which enables the user to select this once hitting play |

`Frequent Visitors`
| Goals | How are they achieved? |
| :--- | :--- |
| As a frequent visitor, I want to select the level of difficulty so that I can unlock as many questions as possible to improve. | The game select feature enables the user to select more challenging questions as they progress in knowledge |
| As a frequent visitor, I want to be able to log my scores so I can track my progress and get a high rank in the leader boards. | The game has a feature which enables to load scores and see the top 5 ranking |

### Full Testing
Full testing was performed on the following devices:

- Desktop:
  - Custom Gaming computer (Raven) with 2 screens set up 24 inches and Windows OS
- Laptop:
  - Macbook Pro 2023 14 inches screen and Mac OS
- Android Mobile Devices:
  - Samsung Galaxy S20 
  - Samsung Galaxy A50 

Each device tested the site using the following browsers:

- Google Chrome
- Safari
- Firefox

### Test Cases
`All pages`
| Feature | Expected Result | Testing Performed | Actual Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| The Sites title | Clicking on the logo link directs the user back to the home page | Clicked title | Home page reloads | Pass |

## BUG TRACKER

### Solved Bugs

| ID  | CLASS | FEATURE          | DESCRIPTION                                                                          | STEPS TO REPRODUCE                                                                                                                                                           | ACTUAL RESULT                                                                                                                                  | EXPECTED RESULT                                                            | ACTION                                                                                                        | STATUS |
| --- | ----- | ---------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------ |
| 1   | A     | Location          | Issue                                                   | Steps to reproduce                                                                           | Actual result                                     | Expected result                            | Solution                                                              | FIXED OR NOT FIXED  |
| 1   | A     | Display Questions          | Encoding. Variable displayed in the question section. This variable is shown when fetching data from the database API. ![Bug 1](docs/testing/bugs/1/bug-1-encoding.jpg)   ![Bug 1 - Question](docs/testing/bugs/1/bug-1-encoding-close-up.jpg)                                          | Start the app > select Play > Observe the issue in some of the questions not displaying correctly                                                                           | Some of the questions do not display correctly                                     | The questions display correctly avoiding any code shown                        | Solution: changed innerText for innerHTML                                                          |  FIXED  |
| 2   | C     | Score display          | Button Design. The save button in the score display scores section does not take the other buttons style. ![Bug 2](docs/testing/bugs/2/bug-2-button.jpg)                                                  | Start the app > select Play > Finish the game> Observe the issue in the save button                                                                           | The save button looks different in style                                     | The save button looks as the other buttons in the section                        | Solution: this button was part of the form in html which was preventing it from taking the formatting, the code was moved behind the form html closing tag                                                           | FIXED  |
 3   | A     | Score display          | Game logic. The score returned does not match the latest score. ![Bug 3](docs/testing/bugs/3/bug-3-scores.jpg) ![Bug 3 - gif](docs/testing/bugs/3/bug-3-scores.gif)                                                  | Start the app > select Play > Finish the game> Observe the issue in the incorrect score returned                                                                        | The counter is returning an incorrect result                                     | Ensure that the counter returns the latest result achieved bye the user                            | When working in other areas this was solved as probably it was something interacting with this feature                                                             | FIXED  |
| 4   | B     | Loader          | Loader display. The loader does not display centered in the container. ![Bug 4]( docs/testing/bugs/4/bug-4.jpg) ![Bug 4 - gif]( docs/testing/bugs/4/bug-4.gif)                                                   | Start the app > select Play and reach the questions section > Observe the issue with the loader                                                                           | The loader is not centered                                     | Ensure that the loader is centered                         | Solution: add flex style to the class outer-container, justify, align center and apply media queries to the score-counter section so the buttons will not overflow                                                       | FIXED |
| 5   | A     | General overflow         | The app overflows the container in certain screen sizes and the background image does not display correctly. ![Bug 5](docs/testing/bugs/5/bug-5-overflow.png)                                                   | Start the app > select Small screen sizes in dev tools > Observe the issue with the overflow                                                                           | The app is not totally responsive for certain screen sizes                                     | Ensure that the app is responsive for all screen sizes                        | Solution: after a lot of exploration using the developer console css clamp function was added for the questions, height auto for the outer container, also the intention was removing the background box for small screen sizes to avoid any overlap but it was observed in the dev console that the text reads better and it also improved the app look and vibe without the box, so this was removed for all screen sizes for a more modern look                                               | FIXED |
| 6   | A     | Overflow         | The app overflows the background image. ![Bug 6](docs/testing/bugs/6/bug-6.png)                                                   | Start the app > select dimensions responsive (747x375) screen sizes in dev tools > Observe the issue with the overflow                                                                           | The app is still not responsive for certain screen sizes             | Ensure that the app is responsive for all screen sizes                        | Solution: adjust the images with Photoshop for problematic screen sizes and handle with media queries      | FIXED |

### Known Bugs

There are no remaining known bugs, all of them have been fixed.

---