# WEB102 Project#2 - Flashcards - Part 1 & 2

Submitted by: Ariel Sosa

Part 1:
This website will display flashcaards of 10 different fish species. User must identify each.

Time spent: 3 hours spent in total

Part 2:
The Second part of this project will include a feature to allow the user to guess the anser before flipping the card. A submit button, a Shuffle Cards button, and a streak counter. 

## Required Features Part 1:

The app displays the title of the card set, a short description, and the total number of cards

    - Title of card set is displayed

    - A short description of the card set is displayed

    - A list of card pairs is created
        - Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)

    - The total number of cards in the set is displayed

A single card at a time is displayed

    - A single card is displayed at a time

    - Only one half of the information pair is displayed at a time

Clicking on the card flips the card over, showing the corresponding component of the information pair

    - Clicking on a card flips it over, showing the back with corresponding information

    - Clicking on a flipped card again flips it back, showing the front

Clicking the next button displays a random new card

    -(Note: proceeding through cards in sequential order will not receive credit for this feature — the next card must be selected at random)

## Required Features Part 2: 

The user can submit a guess into an input box before seeing the flipside of a card

    - Application features a clearly labeled input box with a submit button where users can type in a guess

    - Clicking on the submit button with an incorrect answer shows visual feedback that it is wrong

    - Clicking on the submit button with a correct answer shows visual feedback that it is correct

The user can navigate through an ordered list of cards

    - A forward/next button displayed on the card navigates to the next card in a set sequence when clicked

    - A previous/back button displayed on the card returns to the previous card in the set sequence when clicked

    - Both the next and back buttons should have some visual indication that the user is at the beginning or end of the list (for example, graying out and no longer being available to click), not allowing for wrap-around navigation

## Stretch Features for Part 2

Users can use a shuffle button to randomize the order of the cards
    - Cards should remain in the same sequence (NOT randomized) unless the shuffle button is clicked

    - Cards should change to a random sequence once the shuffle button is clicked

A user’s answer may be counted as correct even when it is slightly different from the target answer

    - Examples: ignoring uppercase/lowercase discrepancies, ignoring punctuation discrepancies, matching only for a particular part of the answer rather than the whole answer

A counter displays the user’s current and longest streak of correct responses

    - A current counter increments when a user guesses an answer correctly

    - The current counter resets to 0 when a user guesses an answer incorrectly

    - A separate counter tracks the longest streak, updating if the value of the current streak counter exceeds the value of the longest streak counter

A user can mark a card that they have mastered and have it removed from the pool of displayed cards

    - The user can mark a card to indicate that it has been mastered
    
    - Mastered cards are removed from the pool of displayed cards and added to a list of mastered cards

## The following required functionality is completed:

- [X] **The user can enter their guess into an input box *before* seeing the flipside of the card**
  - Application features a clearly labeled input box with a submit button where users can type in a guess
  - Clicking on the submit button with an **incorrect** answer shows visual feedback that it is wrong 
  -  Clicking on the submit button with a **correct** answer shows visual feedback that it is correct
- [X] **The user can navigate through an ordered list of cardss**
  - A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  - A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  - Both the next and back buttons should have some visual indication that the user is at the beginning or end of the list (for example, graying out and no longer being available to click), not allowing for wrap-around navigation

## The following optional features are implemented:


- [X] Users can use a shuffle button to randomize the order of the cards
  - Cards should remain in the same sequence (**NOT** randomized) unless the shuffle button is clicked 
  - Cards should change to a random sequence once the shuffle button is clicked
- [X] A user’s answer may be counted as correct even when it is slightly different from the target answer
  - Answers are considered correct even if they only partially match the answer on the card 
  - Examples: ignoring uppercase/lowercase discrepancies, ignoring punctuation discrepancies, matching only for a particular part of the answer rather than the whole answer
- [X] A counter displays the user’s current and longest streak of correct responses
  - The current counter increments when a user guesses an answer correctly
  - The current counter resets to 0 when a user guesses an answer incorrectly
  - A separate counter tracks the longest streak, updating if the value of the current streak counter exceeds the value of the longest streak counter 
- [ ] A user can mark a card that they have mastered and have it removed from the pool of displayed cards
  - The user can mark a card to indicate that it has been mastered
  - Mastered cards are removed from the pool of displayed cards and added to a list of mastered cards

## Video Walkthrough

Part 1:

Here's a walkthrough of implemented features for Part 1:

<img src='Animation.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ScreenToGif.com
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

Part 2:

Here's a walkthrough of implemented features for Part 2:

<img src='Animation2.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

## Notes

Describe any challenges encountered while building the app.
Part 1:

    Organizing my thoughts and implementing slowly.

Part 2:

    I have not worked with Forms and taking input in awhile. This was a bit of a challenge to overcome. As well as still getting acustomed to using this enviroment and organizing my code properly.

## License

    Copyright 2026 Ariel Sosa

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
