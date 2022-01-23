export function filterSuggestions(
    userInput: string,
    predefinedList: Array<string>
): Array<string> {
    return predefinedList.filter((item) =>
        matchSuggestionToInputValue(userInput, item)
    );
}

export function matchSuggestionToInputValue(
    inputValue: string,
    suggestionToMatch: string
): boolean {
    const regex = new RegExp(`^${inputValue}`, `i`);
    const match = regex.test(suggestionToMatch);
    return match;
}

export function trimString(str: string): string {
    if (str.length <= 15) {
        return str;
    }
    return str.replace(/\..*/, '').slice(0, 12).concat('...');
}
