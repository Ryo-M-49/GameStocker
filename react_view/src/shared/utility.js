/**
 * Update "errorMessages" based on the following conditions:
 *      IF ("nextErrorMessage" is different from the exisiting one)
 *          Push the new error message to "errorMessages" and return it.
 *      IF ("nextErrorMessage" is same as the exisiting one )
 *          return "errorMessages" as it is.
 *      IF ("nextErrorMessage" is null )
 *          return "errorMessages" after deleting the existing error message in it.
 * @param {array}  errorMessages - The current error message(s) for all input(email, password, etc.).
 * @param {object} currentErrorMessage - The current error message of a specific input.
 * @param {object} nextErrorMessage - The next error message of a specific input.
 */
export const updateErrorMessages = (
    errorMessages,
    currentErrorMessage,
    nextErrorMessage
) => {
    if (nextErrorMessage) {
        if (nextErrorMessage === currentErrorMessage) {
            return errorMessages;
        } else {
            errorMessages.push({
                message: nextErrorMessage,
                isSnackbarOpen: true,
            });
            return errorMessages;
        }
    } else {
        if (currentErrorMessage) {
            errorMessages.splice(errorMessages.indexOf(currentErrorMessage), 1);
            return errorMessages;
        } else {
            return errorMessages;
        }
    }
};

/**
 * Check the validity of "value" based on "rules", then return the validity and the corresponding error message as an object.
 * @param {string/integer} value - Input value for various forms (email, password, etc.).
 * @param {object}         rules - Rules with which you want to check the validity of "value".
 */
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

/**
 * Cut "string" by "maxLength".
 * @param {string}  string    - String you want to cut.
 * @param {integer} maxLength - Length by which you want to cut "string".
 */
export const cutString = (string, maxLength) => {
    let result = '';
    result = string.substr(0, maxLength) + '...';

    return result;
};
