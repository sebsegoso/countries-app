export const validateRule = (ruleName, value) => {
    switch (ruleName) {
        case "not-empty":
            return String(value).trim() !== "";
        case "email-address":
            const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return emailRegex.test(value);
        default:
            return false;
    }
};