/**
 * TODO:
 * 1. 'Select' all of the input fields.
 * 2. 'Select' the submit button.
 * 3. Add event listeners to each input field, such that
 *  upon losing focus (`blur` event) on the input fields, we will
 * show the error. For now, we are not validating the input fields.
 */

const formEls = [
  ...Array.from(document.querySelectorAll("input")),
  document.querySelector("#message"),
];
console.log(formEls);
