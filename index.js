
let burgerslist=[];
async function getMenu() {
  const response = await fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json");
  const data = await response.json();
  const menu = document.getElementById("menu");
}

 
function takeOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const order = {
        burgers: [burgerslist[Math.floor(Math.random() * burgerslist.length)], burgerslist[Math.floor(Math.random() * burgerslist.length)], burgerslist[Math.floor(Math.random() * burgerslist.length)]]
        
      };
      console.log(order.burgers);
      resolve(order);
    }, 2500);
  });
}
 
function orderPrep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({order_status: true, paid: false});
    }, 1500);
  });
}
 
function payOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({order_status: true, paid: true});
    }, 1000);
  });
}
 
function thankyouFnc() {
  alert("Thank you!");
}
 

const orderBtn = document.getElementById("orderit");
orderBtn.addEventListener("click", async () => {
  try {
    const order = await takeOrder();
    console.log("Order placed: ", order);
 
    const orderStatus = await orderPrep();
    console.log("Order status: ", orderStatus);
 
    const payment = await payOrder();
    console.log("Payment status: ", payment);
 
    if (payment.paid) {
      thankyouFnc();
    }
  } catch (error) {
    console.error(error);
  }
});
 

