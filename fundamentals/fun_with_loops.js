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

function alertPrimeNumbersUpTo( ceiling ) {

    alert( `Alert with prime numbers up to ${ceiling}` );
    for( let i = 0; i <= ceiling; i++ ) {
        if( isPrime( i ) ) {
            alert( i );
        }
    } 

}

function isPrime( aNumber ) {
    let aNumberIsPrime = true;
    for( let i=2; i<aNumber; i++ ) {
        if( aNumber % i == 0 ) {
            aNumberIsPrime = false;
        }
    }
    return aNumberIsPrime;
}