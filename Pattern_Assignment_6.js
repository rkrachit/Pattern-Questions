//47
let a=4;
for(let i=(a-1);i>=0;i--)
{
    for(j=-(a-1);j<=(a-1);j++)
    {
        if(-i<=j && i>=j)
        {
            process.stdout.write("*");
        }
        else
        {
            process.stdout.write(" ");
        }
    }
    console.log();
}


//48 number not in the assignment



//49
let b=4;
for(let i=(b-1);i>=0;i--)
{
   for(j=-(b-1);j<=(b-1);j++)
   {
       if(-i<=j && i>=j)
       {
           process.stdout.write(""+ (2*i+1));
       }
       else
       {
           process.stdout.write(" ");
       }
   }
   console.log();
}


//51

let d=4;
for(let i=(d-1);i>=0;i--)
{
   for(j=-(d-1);j<=(d-1);j++)
   {
       if(-i<=j && i>=j)
       {
           process.stdout.write(String.fromCharCode(""+ (i+65)));
       }
       else
       {
           process.stdout.write(" ");
       }
   }
   console.log();
}



//52
let e=4;
for(let i=(e-1);i>=0;i--)
{
   for(j=-(e-1);j<=(e-1);j++)
   {
       if(-i<=j && i>=j)
       {
           process.stdout.write(String.fromCharCode(""+ (i+i+65)));
       }
       else
       {
           process.stdout.write(" ");
       }
   }
   console.log();
}
