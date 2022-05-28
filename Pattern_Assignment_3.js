// 23
for(i=1;i<=5;i++)
{
    for(j=1;j<=6-i;j++)
    {
        process.stdout.write(String.fromCharCode(" ", 70-j));
  }
  console.log();
}

// 24

for(i=1;i<=5;i++){
  for(j=1;j<=5;j++){
      if(j<=5-i){
          process.stdout.write(" ");
      }else{
          process.stdout.write("*");
      } 
  }
  console.log()
  }


 // 25
 for(let i=1;i<=5;i++)
 {
   for (let j=1;j<=5;j++)
   {
     if(j<=5-i)
     {
       process.stdout.write(" ");
     }
else
{
 process.stdout.write(""+i);
}
   }
   console.log()
 }




      // 26
      for(let i=1;i<=5;i++)
      {
               for(let j=1;j<=5;j++)
              {
               if(j<=5-i)
               {
                   process.stdout.write(" "); 
               }
               else
               {
                   process.stdout.write(""+( i+j-5)); 
               }
           }
           console.log()
           }  



           
           
           // 27
  for(let i=1;i<=5;i++)
 {
          for(let j=1;j<=5;j++)
         {
          if(j<=5-i)
          {
              process.stdout.write(" "); 
          }
          else
          {
              process.stdout.write(String.fromCharCode("",(64+i)));
          }
      }
      console.log()
       }  



     // 28
for(let i=1;i<=5;i++)
{
         for(let j=1;j<=5;j++)
        {
         if(j<=5-i)
         {
             process.stdout.write(" "); 
         }
         else
         {
             process.stdout.write(String.fromCharCode(""+( 64+i+j-5))); 
         }
     }
     console.log()
     }  




     // 29
for(i=1;i<=5;i++)
{
    for(j=1;j<=5;j++)
    {
        if(j>=i){
            process.stdout.write("*");
        }else{
            process.stdout.write(" ");
        } 
    }
    console.log()
    }



    // 30


for(i=1;i<=5;i++)
{
    for(j=1;j<=5;j++)
    {
        if(j>=i){
            process.stdout.write(""+ (6-i));
        }else{
            process.stdout.write(" ");
        } 
    }
    console.log()
    }