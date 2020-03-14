export const addErrorMessage = (errorMessages, currentMessage, nextMessage) => {
    if (nextMessage) {
        if (errorMessages.includes(nextMessage)) {
            return errorMessages;
        } else {
            errorMessages.push(nextMessage);
            return errorMessages;
        }
    } else {
        errorMessages.splice(errorMessages.indexOf(currentMessage), 1);
        return errorMessages;
    }
}

export const checkValidity = ( value, rules ) => {
    
    let isValid = true;
    let errorMessage = null;

    if ( !rules ) {
        return true;
    }

    if ( rules.required ) {
        isValid = value.trim() !== '' && isValid;
        if (!isValid) {
            errorMessage = '* is required information!';
        }
    }

    if ( rules.minLength ) {
        isValid = value.length >= rules.minLength && isValid;
        if (!isValid) {
            errorMessage = `Password must be ${rules.minLength} characters or more!`;
        }
    }

    if ( rules.maxLength ) {
        isValid = value.length <= rules.maxLength && isValid;
        if (!isValid) {
            errorMessage = `This item must be ${rules.maxLength} characters or less`;
        }
    }

    if ( rules.isEmail ) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test( value ) && isValid;
        if (!isValid) {
            errorMessage = 'Email is invalid!';
        }
    }

    if ( rules.isNumeric ) {
        const pattern = /^\d+$/;
        isValid = pattern.test( value ) && isValid;
        if (!isValid) {
            errorMessage = 'Only numeric is permitted in some item!';
        }
    }

    return {
        isValid: isValid,
        errorMessage: errorMessage
    }

}