// how to take input
a = 3
b = 4
c = 5

if(a>b && a>c)
    console.log(`${a} is greater`)
else if(a>b && !(a>c))
    console.log(`${c} is greater`)
else if(b>c)
    console.log(`${b} is greater`)
else
    console.log(`${c} is greater`)
