function makeFocusable(element: Element, wordToEmphasize: string) {
  let html = element.innerHTML;
  let tokens = html.toString().split(' ');
  let emphasizables = tokens.map((token)=> {
    if (token == wordToEmphasize) {
      return '<mark>' + token + '</mark>';
    } else {
      return '<span class="demph">' + token + '</span>'
    }
  });
  let innerHTML = emphasizables.join(" ");
  console.log(innerHTML);

}