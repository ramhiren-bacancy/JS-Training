// 1. JS: Order Processing Pipeline (Promise + async/await + event loop awareness)
// Description : 
// You are given an array of order IDs.
// You must process orders in the following way:

// 1. Fetch order details for all order IDs /orders/{id} (this must happen in
// parallel)

// 2. After all orders are fetched, for each order:
// call /payments/{orderId} to get payment status

// 3. Build a final summary object containing:
// total orders
// total paid orders
// total unpaid orders

// Constraints:
// Fetching orders must be parallel.
// Payment checks must run after all orders are fetched.
// Use async / await
// Use Promise.all for parallel execution
// Do not use callbacks
// Handle partial failures (if one payment API fails, continue others)
// Return a summary object

async function getInfo(orderIds) {
  //  Fetch all orders
  const orders = await Promise.all(
    orderIds.map(id=>
      fetch(`/orders/${id}`).then(res =>res.json())
    )
  )

  //fetch payments 
  const paymentResult = await Promise.allSettled(
    orders.map(order=>
      fetch(`/payments/${order.id}`).then(res =>res.json())
    )
  )

  let paid=0
  let unpaid=0

  paymentResult.forEach(result => {
    if (result.status === "fulfilled" && result.value.status === "paid") {
      paid++
    } else {
      unpaid++
    }
  })

  return {
    totalOrders: orders.length,
    paid,
    unpaid
  }
}