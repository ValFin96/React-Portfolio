export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function checkPassword(input) {
    const passw = /^[A-Za-z]\w{7,14}$/;
    if (input.match(passw)) {
        return true;
    }
    return false;
}

export function checkMessage(input) {
    const message = /^[A-Za-z]\w{1,100}$/;
    if (input.match(message)) {
        return true;
    }
    return false;
}