import { filterSuggestions, matchSuggestionToInputValue, trimString } from './utils';

describe('Filter suggestions', () => {
    const list = [
        '#ABC abc a-b-c',
        '50-560 Example City',
        'abba@gmail.com',
        'amber',
        'amberaanjnkjafa',
        'amberamberkkkajf',
        'ameba',
        'ara',
        'kot',
        'pies',
        'żaba',
        'żółw'
    ];
    test('should be case insensitive', () => {
        const input = 'Kot';
        const filterResult = filterSuggestions(input, list);
        expect(filterResult).toEqual(['kot']);
    });
    test('should return empty array if input is not matched', () => {
        const input = 'kraków';
        const filterResult = filterSuggestions(input, list);
        expect(filterResult).toEqual([]);
    });
    test('should find result for any substring', () => {
        const input = 'city';
        const filterResult = filterSuggestions(input, list);
        expect(filterResult).toEqual(['50-560 Example City']);
    });
    test('should return multiple results if input is matched to more than one', () => {
        const input = 'ber';
        const filterResult = filterSuggestions(input, list);
        expect(filterResult).toEqual([
            'amber',
            'amberaanjnkjafa',
            'amberamberkkkajf'
        ]);
    });
});

describe('Match suggestion to input value', () => {
    test('should be case insensitive', () => {
        const input = 'Kot';
        const suggestionToMatch = 'kot';
        const result = matchSuggestionToInputValue(input, suggestionToMatch);
        expect(result).toEqual(true);
    });
    test('should match substring', () => {
        const input = 'ber';
        const suggestionToMatch = 'amber';
        const result = matchSuggestionToInputValue(input, suggestionToMatch);
        expect(result).toEqual(true);
    });
    test('should return false if input is not matched', () => {
        const input = 'słoń';
        const suggestionToMatch = 'amber';
        const result = matchSuggestionToInputValue(input, suggestionToMatch);
        expect(result).toEqual(false);
    });
});

describe('Trim string', () => {
    test('if its length is more than 15', () => {
        const str = '50-264 Wrocław, ulica Bolesława Krzywoustego 14';
        const result = trimString(str);
        expect(result).toEqual('50-264 Wrocł...');
    });
    test('return the same string when its length is less than or equal to 15', () => {
        const str = 'wilk';
        const result = trimString(str);
        expect(result).toEqual('wilk');
    });
});