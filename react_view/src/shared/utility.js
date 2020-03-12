export const checkValidity = ( value, rules ) => {
    
    let isValid = true;
    let errorMessage = null;

    if ( !rules ) {
        return true;
    }

    if ( rules.required ) {
        isValid = value.trim() !== '' && isValid;
        if (!isValid) {
            errorMessage = 'Make sure the required items are all filled out!';
        }
    }

    if ( rules.minLength ) {
        isValid = value.length >= rules.minLength && isValid;
        if (!isValid) {
            errorMessage = `At least ${rules.minLength} characters required!`;
        }
    }

    if ( rules.maxLength ) {
        isValid = value.length <= rules.maxLength && isValid;
        if (!isValid) {
            errorMessage = `Over ${rules.maxLength} characters forbidden!`;
        }
    }

    if ( rules.isEmail ) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test( value ) && isValid;
        if (!isValid) {
            errorMessage = 'Email is invalid';
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