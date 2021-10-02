// findFirstStringInBracket
const findFirstStringInBracket = (str) => {
    if (str.length === 0) {
        return "";
    }

    let indexFirstBracketFound = str.indexOf("(");
    if (indexFirstBracketFound < 0) {
        return "";
    }

    let wordsAfterFirstBracket = str.substr(indexFirstBracketFound);
    if (!wordsAfterFirstBracket) {
        return "";
    }

    let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");
    if (indexClosingBracketFound < 0) {
        return ''
    }

    return wordsAfterFirstBracket.substring(1, indexClosingBracketFound);
}

// Alternative using regex

const findFirstStringInBracketRegex = (str) => {
    if (str.length === 0) {
        return "";
    }

    const stringWithParentheses = str.match(/\([^)]*\)/).pop();

    return stringWithParentheses.substring(1, --stringWithParentheses.lengh)
}
