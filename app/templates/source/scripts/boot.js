'use strict';

console.log([
'                      ',
'   /     \'      /  / ',
'  /__      ___ (  /   ',
'  \\--`-\'-|`---\\ |  ',
'   |\' _/   ` __/ /   ',
'   \'._  W    ,--\'   ',
'      |_:_._/         ',
'                 ambox',
'~x~x~x~x~x~x~x~x~x~x~x'
].join('\n'));

<% if (includejQuery) { %>
var $ = require('jquery');
window.jQuery = window.$ = $;
// your require plugins here...
<% } %>
