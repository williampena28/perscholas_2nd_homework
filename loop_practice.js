//William Peña, Loops Practice

//log 0-15
for(var i = 0; i < 16; i++)
{
    console.log(i);
}

//log 15-0
for(var i = 15; i >= 0; i--)
{
    console.log(i);
}

//log and add 1 to the laps variable. log laps after the loop
let laps = 0;
for(var i = 0; i < 5; i++)
{
    console.log("that's another lap!");
    laps++;
}

console.log(laps);

let age = 20;
//loop through 0-100. Log whether or not the i matches age
for(var i = 0; i < 101; i++)
{
    if(i == age)
    {
        console.log(`Age matches to ${i}!`)
    } else 
    {
        console.log("Age does not match.")
    }
}

//log all even numbers from 0-700
for(var i = 0; i <= 700; i++)
{
    if(i % 2 == 0)
    {
        console.log(i);
    }
}

//log all odd numbers from 0-700
for(var i = 0; i <=700; i++)
{
    if(i % 2 != 0)
    {
        console.log(i);
    }
}

//Early 20th Century Inventions (1900-1949)
for(var i = 1900; i < 1950; i++)
{
    if(i == 1900)
    {
        console.log(`${i} - Zeppelin was invented!`)
    } else if (i == 1902)
    {
        console.log(`${i} - Teddy Bear was invented`)
    } else if (i == 1910)
    {
        console.log(`${i} - Motion Picture 1910`)
    } else if (i == 1913)
    {
        console.log(`${i} - The bra was invented`)
    } else if (i == 1918)
    {
        console.log(`${i} - Fortuen Cookie was invented`)
    } else if (i == 1923)
    {
        console.log(`${i} - Traffic Signal was invented`)
    } else if (i == 1935)
    {
        console.log(`${i} - The radar was invented`)
    } else if (i == 1938)
    {
        console.log(`${i} - Ballpoint pen`)
    } else if (i == 1943)
    {
        console.log(`${i} - Slinky was invented`)
    } else 
    {
        console.log(i)
    }
}