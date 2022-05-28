// tenth
for(let i=1;i<=5;i++)
{
  for(let j=1;j<=i;j++)
  {
      process.stdout.write("*"); 
}console.log();
  
}

//eleven

for(i=1;i<=5;i++)
{
  for(j=1;j<=i;j++)
  {
    process.stdout.write(" "+ i); 
  }
console.log()
}



// twelve
for(i=1;i<=5;i++)
{
  for(let j=1;j<=i;j++)
  {
    process.stdout.write(" "+j);
}
console.log()
  }
  

  // thirteen

for (let i=1;i<=5;i++)
{
    for(j=1;j<=i;j++)
    {
    
        process.stdout.write(String.fromCharCode(" ", 65+i-1));
    }
    console.log();
}



// fourteen

for (let i=1;i<=5;i++)
{
    for(j=1;j<=i;j++)
    {
    
        process.stdout.write(String.fromCharCode(" ", 65+j-1));
    }
    console.log();
}

// fifteen

for(i=1;i<=5;i++)
{
    for(j=1;j=6-i;j++)
    {
        process.stdout.write("*"); 
  }
  console.log();
}

// 16-18 numbers not in assignment

// 19
for(i=1;i<=5;i++)
{
    for(j=1;j<=6-i;j++)
    {
        process.stdout.write(String.fromCharCode(" ", 64+j));
  }
  console.log();
}


// 20
for(i=1;i<=5;i++)
{
    for(j=1;j<=6-i;j++)
    {
        process.stdout.write(" " +(6-i));
  }
  console.log();
}

// 21
for(i=1;i<=5;i++)
{
    for(j=1;j<=6-i;j++)
    {
        process.stdout.write(" " +(6-j));
  }
  console.log();
}

// 22
for(i=1;i<=5;i++)
{
    for(j=1;j<=6-i;j++)
    {
        process.stdout.write(String.fromCharCode(" ", 70-i));
  }
  console.log();
}