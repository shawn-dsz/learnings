/**

Correctly Count special ASCII charters

*/
byteCount(text) {
  return encodeURI(text).split(/%(?:u[0-9A-F]{2})?[0-9A-F]{2}|./).length - 1;
}


var count = byteCount('’');

console.log(count); // 3
