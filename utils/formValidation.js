export const validateRule = (ruleName, value, name) => {
    switch (ruleName) {
        case "not-empty":
            return {valid: String(value).trim() !== "", msg: `Add your ${name} `};
        case "email-address":
            const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return {valid: emailRegex.test(value), msg: `The ${name} format is not valid`};
        default:
            return {valid: true, msg: ""};
    }
};