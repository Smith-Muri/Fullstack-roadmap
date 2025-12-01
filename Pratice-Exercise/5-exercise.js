/* Create a function that receives two values: totalAmount (number) and isMember (boolean).
Calculate the final price applying the following logic:
If the totalAmount is less than 0, print: "Invalid amount".
If isMember is true, apply:
15% discount if totalAmount is over $200
10% discount if totalAmount is between $100 and $200
5% discount if totalAmount is under $100
If isMember is false, apply:
5% discount ONLY if totalAmount is over $150
After discount, print:
"Final price: $X"*/


let totalAmount = 0;
let isMember = false;


function Precie(totalAmount, isMember) {

    if (totalAmount < 0) {
        console.log("Invalido");
    } else {
        if (isMember === true) {
            if (totalAmount > 200) {
                totalAmount = totalAmount - (totalAmount * 0.15);
            } else if ((totalAmount >= 100) && (totalAmount <= 200)) {
                totalAmount = totalAmount - (totalAmount * 0.10);
            } else if (totalAmount < 100) {
                totalAmount = totalAmount - (totalAmount * 0.05);
            }if(isMember === false){
                if(totalAmount > 150){
                    totalAmount = totalAmount - (totalAmount * 0.05);
                }
            }
        } console.log("Final price: $" + totalAmount);
    }

}