const isNotEmptyString = (string) => {
    if (string && string.trim().length !== 0) {
        return true;
    } else {
        alert("All fields are required. Please try again.");
        return false;
    }
};

const hasCorrectFieldLength = (string) => {
    if (string && string.length >= 3) {
        return true;
    } else {
        alert("Address must be at least 3 characters. Please try again.");
        return false;
    }
};

const validateString = (string) => {
    return isNotEmptyString(string) && hasCorrectFieldLength(string);
};

export { isNotEmptyString, validateString };