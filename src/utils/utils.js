// export const decodeEntities = function( str ) {
//   // this prevents any overhead from creating the object each time
//   var element = document.createElement('div');
//   if(str && typeof str === 'string') {
//     // strip script/html tags
//     str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
//     str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
//     element.innerHTML = str;
//     str = element.textContent;
//     element.textContent = '';
//   }
//
//   return str;
// }
