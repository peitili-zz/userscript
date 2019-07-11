// ==UserScript==
// @name         Local Time on Github Pull Request
// @namespace    http://github.com/peitili
// @version      0.1
// @description  Display the full datetime on pull request pages on Github
// @author       Peiti Li
// @match        https://github.com/pulls?*
// @require      http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==
$(document).ready(function() {
  $('relative-time').each(function() {
    var ele = document.createElement('div');
    ele.innerHTML = $(this).attr('title');
    $(this).replaceWith(ele);
  });
});
