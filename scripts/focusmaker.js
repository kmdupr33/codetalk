function makeFocusable(element, wordToEmphasize) {
    var html = element.innerHTML;
    var tokens = html.toString().split(' ');
    var emphasizables = tokens.map(function (token) {
        if (token == wordToEmphasize) {
            return '<mark>' + token + '</mark>';
        }
        else {
            return '<span class="demph">' + token + '</span>';
        }
    });
    var innerHTML = emphasizables.join(" ");
    console.log(innerHTML);
}
