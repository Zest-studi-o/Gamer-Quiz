# THE GAMER QUIZ

What the site is about, mockup and live link.

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

## AUTOMATED TESTING

### W3C Validator

[W3C](https://validator.w3.org/) was used to validate the HTML on all pages of the website. It was also used to validate the CSS.

* [index.html](testing/w3/w3-index.png) - Passed.
* [game.html](testing/w3/w3-game.png) - No errors, 1 Warning. The warning is for an empty H2 tag. This is where the question is inserted using jQuery.
* [highscores.html](testing/w3/w3-highscores.png) - Passed.
* [404.html](testing/w3/w3-404.png) - Passed.
* [style.css](testing/w3/w3-css.png) - Passed, no errors found.

- - -

### JavaScript Validator

### Lighthouse

I used Lighthouse within the Chrome Developer Tools to test the performance, accessibility, best practices and SEO of the website.

### Desktop Results


### Mobile Results

- - -

## MANUAL TESTING

### Testing User Stories

### Full Testing

## BUG TRACKER

### Solved Bugs

| ID  | CLASS | FEATURE          | DESCRIPTION                                                                          | STEPS TO REPRODUCE                                                                                                                                                           | ACTUAL RESULT                                                                                                                                  | EXPECTED RESULT                                                            | ACTION                                                                                                        | STATUS |
| --- | ----- | ---------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------ |
| 1   | A     | Location          | Issue                                                   | Steps to reproduce                                                                           | Actual result                                     | Expected result                            | Solution                                                              | FIXED OR NOT FIXED  |
| 1   | A     | Display Questions          | Encoding. Variable displayed in the question section. This variable is shown when fetching data from the database API. ![Bug 1](docs/testing/bugs/1/bug-1-encoding.jpg)   ![Bug 1 - Question](docs/testing/bugs/1/bug-1-encoding-close-up.jpg)                                          | Start the app > select Play > Observe the issue in some of the questions not displaying correctly                                                                           | Some of the questions do not display correctly                                     | The questions display correctly avoiding any code shown                        | Solution: changed innerText for innerHTML                                                          |  FIXED  |
| 2   | C     | Score display          | Button Design. The save button in the score display scores section does not take the other buttons style. ![Bug 2](docs/testing/bugs/2/bug-2-button.jpg)                                                  | Start the app > select Play > Finish the game> Observe the issue in the save button                                                                           | The save button looks different in style                                     | The save button looks as the other buttons in the section                        | Solution not found                                                             | NOT FIXED  |
 3   | A     | Score display          | Game logic. The score returned does not match the latest score. ![Bug 3](docs/testing/bugs/3/bug_3_scores.jpg) ![Bug 3 - gif](docs/testing/bugs/3/bug-3-scores.gif)                                                  | Start the app > select Play > Finish the game> Observe the issue in the incorrect score returned                                                                        | The counter is returning an incorrect result                                     | Ensure that the counter returns the latest result achieved bye the user                            | When working in other areas this was solved as probably it was something interacting with this feature                                                             | FIXED  |
| 4   | B     | Loader          | Loader display. The loader does not display centered in the container. ![Bug 4]( docs/testing/bugs/4/Bug-4.jpg) ![Bug 4 - gif]( docs/testing/bugs/4/bug-4.gif)                                                   | Start the app > select Play and reach the questions section > Observe the issue with the loader                                                                           | The loader is not centered                                     | Ensure that the loader is centered in the container                         | Solution: add flex style to the class outer-container, justify, align center and apply media queries to the hud section so the buttons will not overflow                                                       | FIXED |

### Known Bugs

There are no remaining known bugs, all of them have been fixed.

---