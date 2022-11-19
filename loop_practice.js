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