const timer=()=>{
    let s=0,h=0,m=0;
    return function timerChild(){
        let interval=setInterval(()=>{
            s++;
            if(s==60){
                m++;
                s=0;
            }
            if(m==60){
                h++;
                m=0;
            }
            console.log(`${h}:${m}:${s}`);
            
        },1000)
    }
}
const timerchild=timer();
timerchild();