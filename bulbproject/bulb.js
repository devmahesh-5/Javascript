const switchs=document.getElementById("switch");
switchs.addEventListener('click',()=>{
    const button_on=document.querySelector(".bulb_on");
    const button_off=document.querySelector(".bulb_off");
    button_on.classList.toggle("bon");
    button_off.classList.toggle("boff");
});
// off.addEventListener('click',()=>{
//     const button_off=document.querySelector("#bulboff");
//     button_off.classList.add("bulb_off");
// });

