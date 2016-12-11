function Interpeter(code) {
  var output = '';
  var pointer = 0;
  var ticker = new Array(3000);
  ticker.fill(0);

  var loop_pointers = new Array();

  var c = '';
  for (var i = 0, len = code.length; i < len; i++) {
    switch(code[i]) {
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
        if (ticker[pointer] != 0)
          loop_pointers.push(i);
        else
        {
          var i;
          var end = i + 1;
          while ((i = code[end]) != ']' && i < len)
            end += 1;

          if (i == ']')
            i = end;
          else
            error(300);
        }
        break;
      case ']':
        if (ticker[pointer] != 0)
          i = loop_pointers[loop_pointers.length - 1];
        else
          loop_pointers.pop();
        break;
      default:
        alert('ERROR 200', c);
        break;
    }
  }

  return output;
};

export default Interpeter;

  // char c;
  // while (input.get(c))
  //   code[code_pointer++] = c;
  // code[code_pointer] = '#';
  //
  // std::stack<short> loop_pointers;
  //
  // code_pointer = 0;
  // while ((c = code[code_pointer]) != '#')
  // {
  //   switch (c)
  //   {
  //     case ' ':
  //     case '\n':
  //     case '\t':
  //       break;
  //     case '>':
  //       ++pointer;
  //       break;
  //     case '<':
  //       --pointer;
  //       break;
  //     case '+':
  //       ++ticker[pointer];
  //       break;
  //     case '-':
  //       --ticker[pointer];
  //       break;
  //     case '.':
  //       std::cout << ticker[pointer];
  //       break;
  //     case ',':
  //       ticker[pointer] = getchar();
  //       break;
  //     case '[':
  //       if (ticker[pointer] != 0)
  //         loop_pointers.push(code_pointer);
  //       else
  //       {
  //         char i;
  //         short end = code_pointer + 1;
  //         while ((i = code[end]) != ']' && i != '#')
  //           ++end;
  //
  //         if (i == ']')
  //           code_pointer = end;
  //         else
  //           error(300);
  //       }
  //       break;
//       case ']':
//         if (ticker[pointer] != 0)
//           code_pointer = loop_pointers.top();
//         else
//           loop_pointers.pop();
//         break;
//       default:
//         error(200, c);
//         break;
//     }
//
//     ++code_pointer;
//   }
// }
//
// void error(int _code, int _detail)
// {
//   std::cout << "Error Code " << _code << ": ";
//   switch (_code)
//   {
//     case 100:
//       std::cout << "No input file specified." << std::endl;
//       break;
//     case 200:
//       std::cout << "Invalid token read: " << char(_detail) << std::endl;
//       break;
//     case 300:
//       std::cout << "Ending bracket not found." << std::endl;
//       break;
//   }
//
//   exit(_code);
// }
