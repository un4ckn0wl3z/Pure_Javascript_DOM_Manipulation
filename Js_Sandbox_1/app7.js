const name = 'Anuwat';
const age = 23;
const job = 'Web developer';
const city = 'Bangkok';
let html;
// With template strings (es5)

html = '<ul><li>Name: ' + name + '</li><li>Age: '+age+'</li><li>City: '+city+'</li></ul>';

// document.body.innerHTML = html;

// With template strings (es6)

function hello(){
  return 'hello';
}

html = `
    <ul>
      <li>Name: ${name}</li>
      <li>Age: ${age}</li>
      <li>City: ${city}</li>
      <li>Hello: ${hello()}</li>
      <li>MathExpr: ${37 + 34}</li>
      <li>CondiExpr: ${age > 30 ? 'over 30':'under 30'}</li>
    </ul>
`;
document.body.innerHTML = html;

