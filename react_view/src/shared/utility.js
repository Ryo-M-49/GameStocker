export const addErrorMessage = (copiedArray, errorObject) => {
    if (errorObject.nextErrorMessage) {
        if (errorObject.nextErrorMessage === errorObject.currentErrorMessage) {
            return copiedArray;
        } else {
            copiedArray.push({
                message: errorObject.nextErrorMessage,
                isSnackbarOpen: true,
            });
            return copiedArray;
        }
    } else {
        if (errorObject.currentErrorMessage) {
            copiedArray.splice(
                copiedArray.indexOf(errorObject.currentErrorMessage),
                1
            );
            return copiedArray;
        } else {
            return copiedArray;
        }
    }
};

export const checkValidity = (value, rules) => {
    let isValid = true;
    let errorMessage = null;

    if (!rules) {
        return true;
    }

    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
        if (!isValid) {
            errorMessage = '* is required information!';
        }
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;
        if (!isValid) {
            errorMessage = `Password must be ${rules.minLength} characters or more!`;
        }
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid;
        if (!isValid) {
            errorMessage = `This item must be ${rules.maxLength} characters or less`;
        }
    }

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid;
        if (!isValid) {
            errorMessage = 'Email is invalid!';
        }
    }

    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid;
        if (!isValid) {
            errorMessage = 'Only numeric is permitted in some item!';
        }
    }

    return {
        isValid: isValid,
        errorMessage: errorMessage,
    };
};

// Implement the if statement when calling the function to make sure the target string exceeds the limit length. 
export const cutString = (string, maxLength) => {
    let result = '';
    result = string.substr(0, maxLength) + '...';

    return result;
}