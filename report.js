const newman=require('newman'); 
require('dotenv').config();
newman.run({
    collection:"https://api.postman.com/collections/32547096-c487fdbf-4feb-4a12-9b1e-edf92e5c5101?access_key=$(process.env.Access_key) " ,
    reporters :  'htmlextra',
    iterationCount:1,
    reporter:{
        htmlextra:{
            htmlextra:{
                export:'./Reports/report.html',
            }
        }}

},function(err){
    if(err){throw err;}
    console.log("Collection run complete!");
});