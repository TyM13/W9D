let user_names = [`Jackson`, `noah`, `liam`, `lucas`, `benjamin`, `ethan`, `oliver`, `logan`, `jack`, `james`];  // created variable called user_names and array w/ 10 names
let user_ages = [`10`, `12`, `14`, `16`, `18`, `20`, `22`, `24`, `26`, `28`]; // created variable called user_ages and array w/ 10 ages
let counter = 0;    // create variable called counter that tracks the index(number) and starts at 0
while (counter < user_names.length)     //while loop, if counter is less than user_names length it keeps printing till it isnt
{
    console.log(`name: ${user_names[counter]}`);
    console.log(`age: ${user_ages[counter]}`);
    counter++
}

for (counter = 0; counter < user_names.length; counter++)   // for loop,tracks the index(number) and starts at 0, if counter is less than user_names length it keeps printing till it isnt
{
    console.log(`name: ${user_names[counter]}`);    //prints out name/age depending on what index counter is on // 
    console.log(`age: ${user_ages[counter]}`);
}



