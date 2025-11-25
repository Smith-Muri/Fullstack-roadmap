/**
 * Write a JavaScript program to create another string by adding "Py" in front of a given string
 * If the given string begins with "Py" return the original string.  
 */


let str = prompt("Ingrese una palabra:");

if (str.startsWith("Py")){
    console.log(str);
}else{
    console.log("Py" + str);
}