
// 31

for(i=1;i<=5;i++)
 {
     for(j=1;j<=5;j++)
     {
         if(j>=i){
             process.stdout.write(""+ (j-i+1));
         }else{
             process.stdout.write(" ");
         } 
     }
     console.log()
     }


     
     // 32
     
for(i=1;i<=5;i++)
{
    for(j=1;j<=5;j++)
    {
        if(j>=i){
           process.stdout.write(String.fromCharCode(""+( 70-i))); 
        }else{
            process.stdout.write(" ");
        } 
    }
    console.log()
    }
    

    // 33
     
for(i=1;i<=5;i++)
{
    for(j=1;j<=5;j++)
    {
        if(j>=i){
           process.stdout.write(String.fromCharCode(""+( 65+(j-i)))); 
        }else{
            process.stdout.write(" ");
        } 
    }
    console.log()
    }