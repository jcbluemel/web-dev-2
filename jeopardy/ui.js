"use strict";

const BASE_API_URL = "http://jservice.io/api/";

// Value of game will become the Game instance populated below
let game;
const $jeopardyBoard = $("#jeopardy");
const $loading = $(".loading");
const $startBtn = $('#start');


/** Fill the HTML table #jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/ game.numCluesPerCat <tr>s,
 *   each with a question for each category in a <td>
 *   (initially, just show a "?" where the question/answer would go.)
 */
function fillTable() {

  // make header with th for each category title
  $jeopardyBoard.append("<thead>", "<tbody>");
  $("thead").append("<tr class='header'></tr>");
  // would be better as <th> I feel
  for (let i = 0; i < game.numCategories; i++) {
    $(".header").append(
      `<td class='${i}'>${game.categories[i].title}</td>`);
  }

  // fill rows and columns with clues for respective category
  for (let i = 0; i < game.numCluesPerCat; i++) {
    const $row = $("<tr scope='row'>");
    for (let j = 0; j < game.numCategories; j++) {
      // id set to 'categoryIndex - clueIndex'. fa '?' icon.
      const $cell = $(
        `<td id='${j}-${i}' class='showing'>
          <span><i class="fa-solid fa-circle-question fa-3x"></i></span>
        </td>`);
      $row.append($cell);
    }
    $("tbody").append($row);
  }
}


/** Handle clicking on a clue: show the question or answer, update clue status.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question
 * - if currently "question", show answer
 * - if currently "answer", ignore click
 *
 * */
function handleClick(evt) {
  const $clueFromTable = $(evt.target);
  // clueId[0] is categoryIndex, clueId[2] is clueIndex
  const clueId = $clueFromTable.attr("id");
  const fullClue = game.categories[clueId[0]].clues[clueId[2]];

  // fill cell with appropriate text
  fullClue.updateShowingStatus();
  if (fullClue.showing === "question") {
    $clueFromTable.html(fullClue.question);
  } else if (fullClue.showing === "answer") {
    $clueFromTable.html(fullClue.answer);
    $clueFromTable.css("background-color", "#28a200");
  }
}

/**
 * Shows loading spinner, hides start button and game board
 */
function showLoadingState() {

  $loading.show();
  // demo has "Loading..." btn instead of hiding?
  $startBtn.html("Loading...");
  $startBtn.css("background-color", "#74119c");
  $jeopardyBoard.empty();
  $jeopardyBoard.show();
}

/**
 * Shows game board, updates start button text and hides loading spinner
 */
function hideLoadingState() {

  $jeopardyBoard.show();
  $startBtn.html("Restart!");
  $startBtn.css("background-color", "#8d2ab5");
  $loading.hide();
}


// DO NOT CHANGE ANY CODE BELOW THIS LINE

/**
 * Generates new game instance and populates game board in DOM
 */
async function startGame() {
  showLoadingState();

  game = new Game(6, 5);
  await game.populateCategoryData();

  fillTable();
  hideLoadingState();
}

$("#start").on("click", startGame);
$("#jeopardy").on("click", "td", handleClick);