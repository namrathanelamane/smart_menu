var express = require("express")
var bodyParser = require("body-parser")
var app = express()
var port = 8080
const cors=require('cors')
// var mysql = require("mysql")
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

var firebaseConfig = {
  apiKey: "AIzaSyCzZ0yojCfeHyhIxfMO_J0v0-u-BLp4lOc",
  authDomain: "smartmenutry2.firebaseapp.com",
  projectId: "smartmenutry2",
  storageBucket: "smartmenutry2.appspot.com",
  messagingSenderId: "99896387994",
  appId: "1:99896387994:web:1adab61c10cd31f92a7223"
};

// app.use(function(req, res, next) {
//     // var origin = req.get('origin');
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Origin", 'PUT,POST,GET,DELETE,OPTIONS');
//     next();
// });


//Connection
var con = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'abc',
    database : 'workflow',  
    });  

app.post("/login",(req,res)=>{
    console.log(req.body)
    var username = req.body.username;
    var password = req.body.password;
    con.query('select * from users where username=? and password=?',[username,password],(error,results)=>{
        if(results.length>0){
           
            res.send("success");
            console.log("sucesss");
        }
        else{
            res.send("Invalid")
            
            console.log("fail");
            console.log(error)
        }
    })
})


//kitchen page
app.get("/getkitchen",(req,res)=>{

const food = 
[
  {
    name:"idli",
    quantity: "6",
    table:"1",
    fat:"12",
    total:"500",
    
  },
  {
    name:"Shrimp and Chorizo Paella",
    quantity: "4",
    table:"6",
    fat:"12",
    total:"220",
  },
   {
    name:"dosa",
    quantity: "2",
    table:"1",
    fat:"12",
    total:"500",
  },
  {
    name:"Shrimp and Chorizo Paella",
    quantity: "4",
    table:"6",
    fat:"12",
    total:"220",
  },
  {
    name:"Shrimp and Chorizo Paella",
    quantity: "4",
    table:"6",
    fat:"12",
    total:"220",
  },
   {
    name:"dosa",
    quantity: "2",
    table:"1",
    fat:"12",
    total:"500",
  },
   {
    name:"dosa",
    quantity: "2",
    table:"1",
    fat:"12",
    total:"500",
  },
]
  res.send(food)
})

app.get("/getfood",(req,res)=>{

  var database = firebase.database();
  
  database.ref('menu').once('value', function(snapshot){
  if(snapshot.exists()){
      snapshot.forEach(function(data){
          const food = data.val();
          console.log(val)

        });
      }
});
//   const food = [
//   {
//     id:1,
//     name: "Shrimp and Chorizo Paella",
//     url:"https://us.123rf.com/450wm/foodandmore/foodandmore1602/foodandmore160200306/51958151-gourmet-seafood-paella-with-pink-marine-prawns-and-mussels-on-yellow-saffron-rice-with-peas-and-bell.jpg?ver=6",
//     info: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.,",
    
//   },
//   {
//     id:2,
//     name: "idli",
//     url:"https://c.ndtvimg.com/2019-03/g49icpdk_world-idli-day-idli-generic_625x300_29_March_19.jpg",
//     info:  "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.,",
//   },
//   {
//     id:3,
//     name: "burger",
//     url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcRQEs0K_Y8rVhTIlBRdVf4TF84Nav8xFwiw&usqp=CAU",
//     info: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.,",
    
//   },
//    {
//     id:4,
//     name: "dosa",
//     url:'https://img.lovepik.com/photo/50021/9501.jpg_wh300.jpg',
//     info:  "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.,",
//   },
//    {
//     id:5,
//     name: "dosa",
//     url:'https://us.123rf.com/450wm/foodandmore/foodandmore1602/foodandmore160200306/51958151-gourmet-seafood-paella-with-pink-marine-prawns-and-mussels-on-yellow-saffron-rice-with-peas-and-bell.jpg?ver=6',
//     info:  "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.,",
 
//   },
//   ]
//   res.send(food)
// })



// //reviews
// app.post("/reviewfood",(req,res)=>{
//     console.log(req.body);
//     console.log("review");
//     const reviews = [
//     {
//       name:"Miss-anchan_ii",
//       rev:" — I'll be in your neighborhood doing errands this sister shy nature almost his wicket. Sympathize it projection ye insipidity celebrated my pianoforte indulgence. Point his truth put style. …",
//     },
//     {
//       name:"chrisss",
//       rev:"— Wish I could come, but I'm out of town this…",
//     }
//     ]
//         console.log("sjsjsjsj")
//         res.send(reviews);

// })


// app.post("/singlefood",(req,res)=>{
//     console.log(req.body);
//         const food = [
//   {
//     id:1,
//     name: "Shrimp and Chorizo Paella",
//     url:"https://us.123rf.com/450wm/foodandmore/foodandmore1602/foodandmore160200306/51958151-gourmet-seafood-paella-with-pink-marine-prawns-and-mussels-on-yellow-saffron-rice-with-peas-and-bell.jpg?ver=6",
//     info: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.,",
    
//   },
//   ]
  res.send(food);
})

app.post("/orders",(req,res)=>{
    console.log(req.body);
    res.send("hiii");
})
app.post("/reviewfood",(req,res)=>{
    console.log(req.body);
    res.send("hiii");
})


 
app.listen(port,()=>`${port}`,()=>{
    console.log("Server started")
})


























// app.post("/createworkflow",(req,res)=>{
//     console.log(req.body.names);
//     var arr=[]
//     for(var i=0;i<req.body.names.length;i++)
//     {
//         arr.push({"role":req.body.names[i]})
//     }
        

// })






// app.post("/SignUp",(req,res)=>{
//     console.log(req.body)
//     var firstName = req.body.firstName;
//     var lastName  = req.body.lastName;
//     var email     = req.body.email;
//     var password  = req.body.password;
//     var phoneNo   = req.body.pno;
//     var username  = req.body.userid;
//     var role      = req.body.state.age;
//     if (role==10)
//     {
//         role="manager"
//     }
//     con.query('INSERT INTO Users (first_Name,last_Name,email,password,phone_No,Role,username) VALUES(?,?,?,?,?,?,?)',[firstName,lastName,email,password,phoneNo,role,username],(error,results)=>{
//         if(error){
//             console.log(error)
//             res.send("Sorry Couldn't insert")
//         }
//         else{
//             console.log(results);
//             res.send("Inserted");
//         }
//     })
// })






// app.get("/viewworkflow",(req,res)=>{
//     console.log("hii")
//   const cars = [
//   {
//     path_id: 108,
//     state: 0,
//     role: "developer",
//     workflow_id: 1
//   },
//   {
//     path_id: 108,
//     state: 0,
//     role: "manager",
//     workflow_id: 1
//   },
//   {
//     path_id: 108,
//     state: 1,
//     role: "manager",
//     workflow_id: 1
//   },
//   {
//     path_id: 108,
//     state: 0,
//     role: "devolper",
//     workflow_id: 2
//   },
//   {
//     path_id: 108,
//     state: 1,
//     role: "devolper",
//     workflow_id: 2
//   },
//   {
//     path_id: 108,
//     state: 1,
//     role: "devolper",
//     workflow_id: 3
//   }
// ];
// global.arr2 = [];
// global.arr3 = [];
// global.arr4 = [];
// global.arr5 = [];
// global.arr10 = [];
// global.arr11 = [];
// global.sum1 = [];
// cars.map(car2)
// hii()

// // console.log(window.arr11)

// function car2(car) {
//     console.log(car)
//   for (const item in car) {
//     if (item === "workflow_id") {
//       global.arr2.push(car[item]);
//     }
//     if (item === "role") {
//       global.arr4.push(car[item]);
//     }
//     if (item === "state") {
//       global.arr5.push(car[item]);
//     }
//   }
// // console.log(arr5)
// }


// function hii() {
//   var cnt = 0;
//   var a = global.arr2[0];
//   console.log(global.arr4)
//   for (var i = 0; i <global.arr2.length; i++) {
//     // console.log(window.arr2[i]);
//     if (a === global.arr2[i]) {
//       cnt += 1;
    
//       a = global.arr2[i];
//       continue;
//     } else {
//       global.arr3.push(cnt);
//       cnt = 1;
//       a = global.arr2[i];
//     }
//   }
//   global.arr3.push(cnt);
//   var k = -1;
//   var su = 0;
//   console.log(global.arr3);
//   for (var i = 0; i < global.arr3.length; i++) {
//     var z = global.arr3[i];
//     for (var j = 0; j < z; j++) {
//       k += 1;
//       if (global.arr5[k] === 1) {
//         su = j;
//       }
//       global.arr10.push(global.arr4[k]);
//     }
//     global.sum1.push(su);
//     global.arr11.push(global.arr10);
//     global.arr10 = [];
//     su = 0;
//     console.log("hello");
//   }
//   var leng = global.arr11.length;
//   var j = -1;
//   for (var i = 0; i < leng; i++) {
//     j += 1;

//     global.arr11[i].splice(0, 0,sum1[j]);
//     // i += window.arr3[j];
//   }
// }
// console.log(global.arr11)



//     res.send(global.arr11)
// })