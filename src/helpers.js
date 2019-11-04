const isNotEmptyString = (string) => {
    if (string && string.trim().length !== 0) {
        return true;
    } else {
        alert("All fields are required. Please try again.");
        return false;
    }
};

const hasCorrectAddressFieldLength = (address) => {
    if (address && address.trim().length >= 3) {
        return true;
    } else {
        alert("Address must be at least 3 characters. Please try again.");
        return false;
    }
};

const hasCorrectNameFieldLength = (name) => {
    if (name && name.trim().length <= 14) {
        return true;
    } else {
        alert("Name cannot be longer than 14 characters. Please try again.");
        return false;
    }
};

const validateNameField = (name) => {
    return isNotEmptyString(name) && hasCorrectNameFieldLength(name);
};

const validateAddressField = (address) => {
    return isNotEmptyString(address) && hasCorrectAddressFieldLength(address);
};

export { validateNameField, validateAddressField };