

 function applyDiscount(){
      const Pricetotal=document.getElementById("originalPrice");
      const discountCode=document.getElementById("discountCode");
      const Price = Pricetotal.value;
      console.log(Price)
      const DiscountPerPrice=10;
      const minPrice=100;
      const maxDiscount=25;
      const discountSteps=3;
    if (Price<(minPrice+DiscountPerPrice)){discountCode.innerHTML=" Sorry your discount is 0%"}
    else{
     const discount=Math.floor((Price-minPrice)/DiscountPerPrice)*discountSteps;
     if(discount>maxDiscount){ discountCode.innerHTML='your discount is '+maxDiscount+"%"}
     else{discountCode.innerHTML='your discount is '+discount+"%"}
 }}