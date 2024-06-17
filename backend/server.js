import express from 'express';

const app= express();

// app.get('/',(req,res)=>{
//     res.send("Server is ready");
// })

//get a list of five jokes

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title:'Joke-1',
            content: "Did you hear about the first restaurant to open on the moon?It had great food, but no atmosphere."
        },
        {
            id:2,
            title:'Joke-2',
            content: "What do dentists call their x-rays?\nTooth pics!"
        },
        {
            id:3,
            title:'Joke-3',
            content: "JWhat did one ocean say to the other ocean?\nNothing, it just waved."
        },
        {
            id:4,
            title:'Joke-4',
            content: "Do you want to hear a construction joke?\nSorry, I’m still working on it."
        },
        {
            id:5,
            title:'Joke-5',
            content: "Why should you never trust stairs?\nThey’re always up to something"
        }
    ];
    res.send(jokes);
})

const port= process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port}`);
});

//suggest 5 jokes