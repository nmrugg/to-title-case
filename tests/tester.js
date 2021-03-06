var titles = [
    {input: "A For By Of", expects: "A for by Of"},
    {input: "follow step-by-step instructions", expects: "Follow Step-by-Step Instructions"},
    {input: "this sub-phrase is nice", expects: "This Sub-Phrase Is Nice"},
    {input: "catchy title: a subtitle", expects: "Catchy Title: A Subtitle"},
    {input: 'catchy title: "a quoted subtitle"', expects: 'Catchy Title: "A Quoted Subtitle"'},
    {input: 'catchy title: “‘a twice quoted subtitle’”', expects: 'Catchy Title: “‘A Twice Quoted Subtitle’”'},
    {input: '"a title inside double quotes"', expects: '"A Title Inside Double Quotes"'},
    {input: "all words capitalized", expects: "All Words Capitalized"},
    {input: "small words the lowercase", expects: "Small Words the Lowercase"},
    {input: "a small word starts", expects: "A Small Word Starts"},
    {input: "do questions work?", expects: "Do Questions Work?"},
    {input: "multiple sentences. more than one.", expects: "Multiple Sentences. More Than One."},
    {input: "Ends with small word of", expects: "Ends With Small Word Of"},
    {input: '"title inside double quotes"', expects: '"Title Inside Double Quotes"'},
    {input: 'double quoted "inner" word', expects: 'Double Quoted "Inner" Word'},
    {input: "single quoted 'inner' word", expects: "Single Quoted 'Inner' Word"},
    {input: "fancy double quoted “inner” word", expects: "Fancy Double Quoted “Inner” Word"},
    {input: "fancy single quoted ‘inner’ word", expects: "Fancy Single Quoted ‘Inner’ Word"},
    {input: "this vs. that", expects: "This vs. That"},
    {input: "this vs that", expects: "This vs That"},
    {input: "this v. that", expects: "This v. That"},
    {input: "this v that", expects: "This v That"},
    {input: "address email@example.com titles", expects: "Address email@example.com Titles"},
    {input: "pass camelCase through", expects: "Pass camelCase Through"},
    {input: "don't break", expects: "Don't Break"},
    {input: "catchy title: substance subtitle", expects: "Catchy Title: Substance Subtitle"},
    {input: "we keep NASA capitalized", expects: "We Keep NASA Capitalized"},
    {input: "leave Q&A unscathed", expects: "Leave Q&A Unscathed"},
    {input: "Scott Moritz and TheStreet.com’s million iPhone la-la land", expects: "Scott Moritz and TheStreet.com’s Million iPhone La-La Land"},
    {input: "you have a http://example.com/foo/ title", expects: "You Have a http://example.com/foo/ Title"},
    {input: "your hair[cut] looks (nice)", expects: "Your Hair[cut] Looks (Nice)"},
    {input: "keep that colo(u)r", expects: "Keep That Colo(u)r"},
    {input: "have you read “The Lottery”?", expects: "Have You Read “The Lottery”?"},
    {input: "Read markdown_rules.txt to find out how _underscores around words_ will be interpretted", expects: "Read markdown_rules.txt to Find Out How _Underscores Around Words_ Will Be Interpretted"},
    {input: "Read markdown_rules.txt to find out how *asterisks around words* will be interpretted", expects: "Read markdown_rules.txt to Find Out How *Asterisks Around Words* Will Be Interpretted"},
    {input: "Notes and observations regarding Apple’s announcements from ‘The Beat Goes On’ special event", expects: "Notes and Observations Regarding Apple’s Announcements From ‘The Beat Goes On’ Special Event"}
];


function runTests(tests)
{
    var testsTotal = tests.length;
    var testsFailed = 0;
    var tab = typeof module === "undefined" ? "&nbsp;&nbsp;&nbsp;&nbsp;" : "    ";

    for (var i=0; i<testsTotal; i++) {
        if (to_title_case(tests[i].input) !== tests[i].expects) {
            print("Test " + (i + 1) + " failure:");
            print(tab + "inputed: " + tests[i].input);
            print(tab + "expects: " + tests[i].expects);
            print(tab + "returns: " + to_title_case(tests[i].input));
    
            testsFailed++;
        }
    }

    if (!testsFailed) {
        print("All tests passed.", true);
        return true;
    }
    return false;
}

if (typeof module !== "undefined") {
    (function ()
    {
        var isTTY = process.stdout.isTTY;
        
        print = function print(str, pass)
        {
            var color = pass ? 2 : 1;
            
            if (isTTY) {
                str = "\u001B[3" + color + "m" + str + "\u001B[0m";
            }
            
            console.log(str);
        }
        
        to_title_case = require("../to-title-case.js");
        
        if (!runTests(titles)) {
            process.exit(1);
        }
    }());
}
