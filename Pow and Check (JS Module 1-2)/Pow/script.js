var number = prompt('Enter a number:')
var power = prompt('Enter a power:')

function pow(number, power) {

	var result = number;

	if (power > 1) {

		for (i = 1; i < power; i++) {
        
        result *= number;
        
	    }
	    
	    return result;
	}

	else if (power < -1) {

		for (i = 0; i > power; i--) {
        
        result /= number;
        
    	}
    
    	return result;
	}

	else if (power == 0) {

		return 1;
	}

	else if (power == -1) {

		return -number;
	}

	else {

		return number;
	}
}



console.log(pow(number, power))