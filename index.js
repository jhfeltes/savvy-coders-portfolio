// Create `prompt` to ask for name
// 'name' is here as a GLOBAL VARIABLE that 'anyone' in the <script> can freely access and modify.
let name = prompt('What is your name?');

// This is a FUNCTION DECLARATION
// Normally, we can avoid using the same name for a LOCAL parameter as a GLOBAL VARIABLE.
function checkName(nameStr){
    if(nameStr === ''){
    // IF the name is blank, ask again and be sure to capture/overwrite the value of nameStr
        nameStr = prompt('Really, what is your name?');

        // RECURSION - Fxn. calls itself again
        nameStr = checkName(nameStr);
    }

    return nameStr;
}

// FUNCTION EXPRESSION
// let checkName = function() { // Function code }

// We capture what is RETURNED by checkName and overwrite 'name' with that value;
name = checkName(name);

// Use `alert` to say hello to the user, using the name they put in
alert(`Hello ${name}!`); // "Hello, " + name
