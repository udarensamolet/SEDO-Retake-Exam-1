// Commit 1 – helpers
const $ = s => document.querySelector(s);
const box = $('#box');
const input = $('#color-input');

$('#apply-btn').addEventListener('click', () => {
  box.style.backgroundColor = input.value;
});

function log(msg) {
  console.log('[app]', msg);
}

function shortHex(h) {
  return /^#([0-9a-f]{6})$/i.test(h) && h[1] == h[2] && h[3] == h[4] && h[5] == h[6] ?
    '#' + h[1] + h[3] + h[5] : h;
}
document.addEventListener('DOMContentLoaded', () => log('ready'));
