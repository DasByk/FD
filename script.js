/*const date = new Date();


function check(x){
    if (x < 10){
        return "0"+x;
    }
    else{
        return x;
    }
}


function time(){
    const date = new Date();



    var hours = check(date.getHours());
    var minuts = check(date.getMinutes());
    var seconds = check(date.getSeconds());
    var mili = check(date.getMilliseconds());


    return hours+":"+minuts+":"+seconds+":"+mili;

}


// document.getElementById("tm").innerHTML = date ;


setInterval(() => document.getElementById("tm").innerHTML = time(), 100);

