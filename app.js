// https://goquotes-api.herokuapp.com/api/v1/random?count=10

const express=require("express");
const https=require("https");


const app=express();
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/",function(req,res){
     
    const url = "https://goquotes-api.herokuapp.com/api/v1/random?count=5";
    https.get(url,function(response){
        response.on("data",function(data){
            const fetchedData = JSON.parse(data);
            
          const quote = fetchedData.quotes[0].text;
          const by = fetchedData.quotes[0].author;
          
            
          
          res.render("index",{quotevalue:quote,authorname:by});
        });
    });
});


app.post("/", function (req, res) {
      res.redirect("/");
   });



app.listen(3000,function(){
  console.log("on port 3000");
});