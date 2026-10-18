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