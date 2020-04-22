import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";

// let renderedGame;
// let click;
// const MAX_WRONG = 4;

// beforeEach(function() {
//   renderedGame = render(<Snowman maxWrong={MAX_WRONG} words={["apple"]} />);
//   // helper function to assist with clicking on letters
//   click = letter => fireEvent.click(renderedGame.getByText(letter));
// });

it("renders without crashing", function(){
  
  render(<Snowman />);
})

it("matches snapshot", function() {
  const { asFragment } = render(<Snowman />);
  expect(asFragment()).toMatchSnapshot();
});

it("changes image when guess is incorrect", function() {
  const { queryByAltText, getByText } = render(<Snowman />);

  // expect the first image to show
  expect(queryByAltText("6 guesses left")).toBeInTheDocument();

   // click letter
   fireEvent.click(getByText('g'));

   // expect the second image to show
  expect(queryByAltText("5 guesses left")).toBeInTheDocument();
  
});

it("Shows letter when guess is correct", function() {
  const { queryByText, getByText } = render(<Snowman />);

  // click letter
  fireEvent.click(getByText('a'));

  // expect the letter to show up
  expect(queryByText("a____")).toHaveClass("Snowman-word");
  
});