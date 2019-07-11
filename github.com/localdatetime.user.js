// ==UserScript==
// @name         Local Time on Github
// @namespace    http://github.com/peitili
// @version      0.1
// @description  Display the full local datetime on Github
// @author       Peiti Li
// @match        https://github.com/*
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
