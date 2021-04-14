let value=+prompt("Nhap tu ban phim")
let number=[-3, 5, 1, 3, 2, 10];
for (let i=0;i<number.length;i++){
    if(value===number[i]){
        alert(value+ number[i] +"found at" + i)
    }
}