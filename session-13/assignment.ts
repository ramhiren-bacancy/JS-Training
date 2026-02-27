// Create a PaymentState discriminated union.
// Add exhaustive checking to handle all states.


type PaymentState=
  |{status:"pending"}
  |{status:"processing"}
  |{status:"completed"; transactionId:string; amount:number}
  |{status:"failed";error:string};

function handlePayment(state:PaymentState):string{
  switch (state.status){
    case "pending":
      return "Payment is pending"

    case "processing":
      return "Payment is being processed"

    case "completed":
      return `Payment completed. Transaction:${state.transactionId}`

    case "failed":
      return `Payment failed:${state.error}`

    default: {
      const defaultCheck: never = state;
      return defaultCheck;
    }
  }
}

// Create a generic ApiResponse<T> for products.
// Write a type guard to check if response is success.
type Product = {
  id: string;
  name: string;
  price: number;
};

type ApiResponse<T> =
  |{success:true;data:T}
  |{success: false;error:string};




const response:ApiResponse<Product>={
  success: true,
  data: {id:"1",name:"Laptop",price: 1200}
};



const err_msg:string = "API not working"
const err_response:ApiResponse<string>={
    success : false,
    error : "API Not working"  
}

function isSuccess<T>(response: ApiResponse<T>):response is {success:true; data:T}{
  return response.success == true;
}

function isError<T>(response: ApiResponse<T>):response is {success:false; error:string}{
  return response.success == false;
}

if (isSuccess(response)) {
  console.log(response.data.name);
}
if (isError(err_response)) {
  console.error(err_response.error);
}

/* extra */
  function check<T extends {name: string}>(x : ApiResponse<T>){
    if(x.success){
        console.log(x.data.name)
    }
    else{
        console.log(x.error);
        
    }
  }

