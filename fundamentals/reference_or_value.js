"use strict"
let originMessage = 'I am the original message';
let messageInAnotherVariable = originMessage;
alert(originMessage);
alert(messageInAnotherVariable);
originMessage = 'I am the original message modified';
alert(originMessage);
alert(messageInAnotherVariable);
