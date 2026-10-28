"use client";

import { useActionState } from "react";
import { placeOrder } from "../actions";


export default function Checkout() {

const [state, action, pending] = useActionState(
  placeOrder,
  null
);


return (
<main>

<h1>Checkout</h1>
{state?.success && (
  <p>
    {state.message}
  </p>
)}

{state?.fieldErrors && (
  <div>
    {Object.values(state.fieldErrors).map((error, index) => (
      <p key={index}>
        {error}
      </p>
    ))}
  </div>
)}

<form action={action}>

<input name="name" placeholder="Name"/>

<input name="phone" placeholder="Phone"/>

<input name="address" placeholder="Address"/>


<button disabled={pending}>
{
pending ? "Placing..." : "Place Order"
}
</button>


</form>

</main>
)

}