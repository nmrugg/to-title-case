/* 
 * To Title Case 2.0.1 – http://individed.com/code/to-title-case/
 * Copyright © 2008–2012 David Gouch. Licensed under the MIT License. 
 */

String.prototype.toTitleCase = function ()
{
    var smallWords = /^(a(?:nd?|s|t)?|b(?:ut|y)|en|for|i(?:f|n)|o(?:f|n|r)|t(?:he|o)|v(?:s?\.?|ia))$/i;
    
    return this.replace(/([^\W_]+[^\s-]*) */g, function (match, p1, index, title)
    {
        if (index > 0 && index + p1.length !== title.length && p1.search(smallWords) > -1 && title.charAt(index - 2) !== ":" && title.charAt(index - 1).search(/[^\s-]/) < 0) {
            return match.toLowerCase();
        }
    
        if (p1.substr(1).search(/[A-Z]|\../) > -1) {
            return match;
        }
        
        return match.charAt(0).toUpperCase() + match.substr(1);
    });
};
