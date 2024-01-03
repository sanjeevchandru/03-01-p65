document.write("29.to check whether three given integer values are in the range 50..99"+"<br>");
function test29(m,n,o){
    if((m>=50 && m<=99) || (n>=50 && n<=99) || (o>=50 && o<=99)){
        return true;
    }
    return false;
}
document.write("The numbers are :20,50,80, Ans:"+test29(20,50,80)+"<br>");
document.write("The numbers are :100,40,10, Ans:"+test29(100,40,10)+"<br><br>");