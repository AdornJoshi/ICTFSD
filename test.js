function time(t)
{
    if(t<=11)
    {
    console.log("Good morning");
    }
    else if(t>=13 && t<=15)
    {
        console.log("good afternoon");
    }
    else if(t>=16 && t<=18)
    {
        console.log("good evening");
    }
    else
    {
        console.log("good night");
    }
};
time(20);