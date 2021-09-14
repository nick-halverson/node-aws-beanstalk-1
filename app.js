const app = require('express')();

app.get('/', (req,res) => {
    res.send('Welcom to the home page baby');
});

app.listen(3999, () => console.log('Wazzapppp, listening on port 3999'));