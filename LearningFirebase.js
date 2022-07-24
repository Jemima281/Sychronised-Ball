/*
Firebase will store the value in a JSON format
JSON: JavaScript Object Notation
key: value
restitution: 0.1
*/


  
/*
Read
1. Refer the database: ref()

2. on("value", function(avesta){
    avesta.val();
})

Write
1. ref()

2. two methods

 a. set() - entire database will get deleted and new information will get store there

 b. update() - will not delete the db, but will add information into the db
        
*/

/*var database;

function setup(){
    database = firebase.database();
    readDB();
   // writeDB()
   setDB()
}

function draw(){
    
}

function readDB(){
    var dbRef = database.ref();

    dbRef.on("value", function(data){
        avesta = data.val();
        console.log(avesta)
    })

}

function writeDB(){
    var dbRef = database.ref()
    dbRef.update({
        name:"Def",
        jef: "zed"
    })

}

function setDB(){
    var dbRef = database.ref()
    dbRef.set({
        name:"Def",
        jef: "zed"
    })

}*/