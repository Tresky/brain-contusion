function Interpeter(code) {
  var output = '';
  var pointer = 0;
  var ticker = new Array(30000);
  ticker.fill(0);

  var c = '';
  for (var i = 0, len = code.length; i < len; i++) {
    switch(code[i]) {
      case '#':
        while (code[++i] != '\n' && i < len);
        break;
      case ' ':
      case '\n':
      case '\t':
        break;
      case '>':
        pointer += 1;
        break;
      case '<':
        pointer -= 1;
        break;
      case '+':
        ticker[pointer] += 1;
        break;
      case '-':
        ticker[pointer] -= 1;
        break;
      case '.':
        output += String.fromCharCode(ticker[pointer]);
        break;
      case ',':
        output += '\nThe \',\' command not supported.\n';
        // ticker[pointer] = getchar();
        break;
      case '[':
        var nest = 1;
        if (ticker[pointer] == 0) {
          do {
            i += 1;
            if (code[i] == '[')
              nest += 1;
            else if (code[i] == ']')
              nest -= 1;
          } while (nest != 0);
        }
        break;
      case ']':
        var nest = 0;
        do {
          if (code[i] == '[')
            nest += 1;
          else if (code[i] == ']')
            nest -= 1;
          i -= 1;
        } while (nest != 0);
        break;
      default:
        alert('ERROR 200', code[i]);
        break;
    }
  }

  return output;
};

export default Interpeter;
