const wrapper =document.querySelector(".sliderWrapper")
const menuItems=document.querySelectorAll(".menuItem")

menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        wrapper.style.transform=`translateX(${-100 * index}vw)`;
    });
});

const select=document.getElementById("size");

 select.addEventListener("click",()=>{
       alert("you have selected size 7");
 
})

const selectA=document.getElementById("sizeA");

 selectA.addEventListener("click",()=>{
       alert("you have selected size 8");
 
})
const selectB=document.getElementById("sizeB");

 selectB.addEventListener("click",()=>{
       alert("you have selected size 9");
 
})
const selectC=document.getElementById("sizeC");

 selectC.addEventListener("click",()=>{
       alert("you have selected size 10");
 
})
const order=document.getElementById("ordd");

 order.addEventListener("click",()=>{
       alert("your order has been sucessfully placed");
 
})
const closex = document.querySelector(".close");
const payment=document.querySelector(".payment");
const buttonBuy=document.querySelector(".but");

buttonBuy.addEventListener("click",()=>{
    payment.style.display="flex"
})


 closex.addEventListener("click",()=>{
     payment.style.display="none";
})
