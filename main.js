
function cal(){
//  alert(weight.value)
if (weight.value !== '' && height.value !== '' ) {
    let w=weight.value;
    let h=height.value;
    let meter=h/100;
    let i=w/(meter*meter);
    let bmi=i.toFixed(2);
    document.getElementById('BMI').innerHTML=bmi;

    let BMItype=document.getElementById('typeValue');
    BMItype.innerHTML='';

    let type='';
    if (i< 18.4) {
        type='UNDER-WEIGHT 😔'
    }
    else if(i>=18.5 && i<=24.9){
        type='NORMAL 🥳'
    }
    else if(i>=25.0 && i<=29.9){
        type='OVER-WEIGHT 🥲'
    }else{
        type='OBESE 😨'
    }
    BMItype.innerHTML=type;

}
else{
    document.getElementById('invalid').innerHTML="Enter proper value  to check your BMI";
}
}

