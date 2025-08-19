// Commit 1 – helpers
const $ = s => document.querySelector(s);
const box = $('#box');
const input = $('#color-input');

$('#apply-btn').addEventListener('click', () => {
  box.style.backgroundColor = input.value;
});
