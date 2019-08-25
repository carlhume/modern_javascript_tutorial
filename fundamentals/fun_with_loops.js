"use strict"

function alertEvenNumbersTo( ceiling ) {

    alert( `Alert with even numbers up to ${ceiling}` );
    for( let i = 0; i <= ceiling; i = i + 2 ) {
        alert( i );
    } 
    
}

function promptForMoreThan100SupportingCancel() {

    const LARGEST_VALUE_STILL_LOOPING = 100;
    let userNumber = LARGEST_VALUE_STILL_LOOPING;
    while ( userNumber != undefined && userNumber != '' && userNumber <= LARGEST_VALUE_STILL_LOOPING ) {

        userNumber = prompt( 'Enter a number larger than ' + LARGEST_VALUE_STILL_LOOPING, LARGEST_VALUE_STILL_LOOPING + 1 );
        
    }
}
