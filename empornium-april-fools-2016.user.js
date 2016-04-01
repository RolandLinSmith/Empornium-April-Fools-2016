// ==UserScript==
// @name           Empornium April Fools 2016
// @namespace      https://github.com/RolandLinSmith
// @downloadURL    https://raw.githubusercontent.com/RolandLinSmith/Empornium-April-Fools-2016/master/empornium-april-fools-2016
// @author         Roland Lin Smith
// @description    Fix the april fools 180 deg rotation
// @version        0.1
// @include        *empornium.me/*
// @grant          none
// ==/UserScript==
'use strict';

var head = document.getElementsByTagName('head')[0];
if (!head) { return; }
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML += "tr.torrent.rowa td, tr.torrent.rowb td {-ms-transform: rotate(0deg); /* IE 9 */ -webkit-transform: rotate(0deg); /* Chrome, Safari, Opera */ transform: rotate(0deg); }";
head.appendChild(style);
