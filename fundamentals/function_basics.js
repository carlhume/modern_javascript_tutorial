function min( aNumber, anotherNumber ) {
    // The version we should use to avoid reinventing the wheel:  return Math.min( aNumber, anotherNumber );
    minNumber = aNumber;
    if( anotherNumber < aNumber ) {
        minNumber = anotherNumber;
    }
    return minNumber;
}

function pow( aNumber, anExponent ) {
    // The version we should use to avoid reinventing the wheel:  return Math.pow( aNumber, anExponent );
    answer = 1;
    for( i=0; i<anExponent; i++ ) {
        answer = answer * aNumber;
    }
    return answer;
}

