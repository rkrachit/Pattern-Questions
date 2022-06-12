// 34
let n = 5;
for(let i =0;i<n;i++){
    for(let j = -(n - 1);j<= n-1;j++){
        if(-i <= j && j<=i){
            process.stdout.write("*"); 
        }else{
            process.stdout.write(" ");
        }
    }
    console.log();
}



// 35
let s = 5;
for(let i = 0;i<s;i++){
    for(let j = -(s - 1);j<= s-1;j++){
        if(-i <= j && j<=i){
            process.stdout.write(""+(i+1)); 
        }else{
            process.stdout.write(" ");
        }
    }
    console.log();
}



// 36
let t = 5;
for(let i = 0;i<t;i++){
    for(let j = -(t - 1);j<= t-1;j++){
        if(-i<=j && j<=i){
            process.stdout.write(""+((2*i)+1)); 
        }else{
            process.stdout.write(" ");
        }
    }
    console.log();
}




// 37
let v = 5;
for(let i = 0;i<s;i++){
    for(let j = -(v - 1);j<= v-1;j++){
        if(-i <= j && j<=i){
            process.stdout.write(String.fromCharCode(""+(i+65))); 
        }else{
            process.stdout.write(" ");
        }
    }
    console.log();
}



// 38
let u = 5;
for(let i = 0;i<t;i++){
    for(let j = -(u - 1);j<= u-1;j++){
        if(-i<=j && j<=i){
            process.stdout.write(String.fromCharCode(""+((65+(2*i))))); 
        }else{
            process.stdout.write(" ");
        }
    }
    console.log();
}


//39
let k=5;
for(let i=0;i<=k-1;i++)
{
    for(let j=-(k-1);j<=(k-1);j++)
    {
        if(-i<=j && j<=i)
        {
           process.stdout.write("" + (j+i+1));
        }
        else
        {
            process.stdout.write(" ");
        }
    }
    console.log()
}



//40
let l=5;
for(let i=0;i<=l-1;i++)
{
    for(let j=-(n-1);j<=(l-1);j++)
    {
        if(-i<=j && j<=i)
        {
           process.stdout.write("" + (i+(-j)+1));
        }
        else
        {
            process.stdout.write(" ");
        }
    }
    console.log()
}




//41
let m=5;
for(let i=0;i<=m-1;i++)
{
    for(let j=-(m-1);j<=(m-1);j++)
    {
        if(-i<=j && j<=i)
        {
            process.stdout.write(String.fromCharCode(""+(i+j+65))); 
        }
        else
        {
            process.stdout.write(" ");
        }
    }
    console.log()
}


//42
let p=5;
for(let i=0;i<=p-1;i++)
{
    for(let j=-(p-1);j<=(p-1);j++)
    {
        if(-i<=j && j<=i)
        {
           process.stdout.write(String.fromCharCode("" + (i+(-j)+65)));
        }
        else
        {
            process.stdout.write(" ");
        }
    }
    console.log()
}


//43
let r=5;
for(let i=0;i<=r-1;i++)
{
    for(let j=-(r-1);j<=(r-1);j++)
    {
        if(-i<=j && j<=i)
        {
           process.stdout.write((""+ Math.abs(j)));
        }
        else
        {
            process.stdout.write(" ");
        }
    }
    console.log()
}




//44
let w=5;
 for(let i=0;i<=w-1;i++)
 {
     for(let j=-(w-1);j<=(w-1);j++)
     {
         if(-i<=j && j<=i)
         {
            process.stdout.write((""+ String.fromCharCode(Math.abs(j)+65)))
         }
         else
         {
             process.stdout.write(" ");
         }
     }
     console.log()
 }



 //45
let y=4;
for(let i=0;i<=y-1;i++)
{
    for( let j=-(y-1);j<=(y-1);j++)
    {
        if(-i<=j && j<=i)
        {
           process.stdout.write((""+ (1+i-(Math.abs(j)))))
        }
        else
        {
            process.stdout.write(" ");
        }
    }
    console.log()
}





