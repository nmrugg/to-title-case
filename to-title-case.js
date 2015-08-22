/**
 * Originaly from:
 * To Title Case http://individed.com/code/to-title-case/
 * Copyright © 2008–2013 David Gouch. Licensed under the MIT License. 
 */

function to_title_case(str)
{
    var smallWords = /^(a(?:nd?|s|t)?|b(?:ut|y)|en|(?:f|n)or|i(?:f|n)|o(?:f|n|r)|per|t(?:he|o)|v(?:s?\.?|ia))$/i;
    
    return str.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(match, index, title)
    {
        if (index > 0 && index + match.length !== title.length && match.search(smallWords) > -1 && title.charAt(index - 2) !== ":" && (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') && title.charAt(index - 1).search(/[^\s-]/) < 0) {
            return match.toLowerCase();
        }
    
        if (match.substr(1).search(/[A-Z]|\../) > -1) {
            return match;
        }
    
        return match.charAt(0).toUpperCase() + match.substr(1);
    });
};

if (typeof module !== "undefined") {
    module.exports = to_title_case;
}
