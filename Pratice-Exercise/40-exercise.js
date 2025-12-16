const transaction = {
  id: "TX99",
  amount: 250,
  currency: "USD",
  status: "completed",
  method: "card"
};

function bancolombia(data){

    transactionDetails = {}

    return data = {

        id: data.id,
        amount: data.amount,
        transactionDetails:{
            currency: data.currency,
            status: data.status,
            method: data.method
        }
    }

}

console.log(bancolombia(transaction))