
  var fs=require('fs');
  

/*
fs.readFile('mcp_list1.txt','utf8',function(err,data1){
	var roll =data1.split("\n");
	console.log(roll[i]);
})

*/

fs.readFile('mcp_list1.txt','utf8',function(err,data){
	var string = data.split("\n");

for(var i=0;i<=35;i++){
	var str=string[i].split("  ");

	
	console.log('<li class="namee">'+str[0]+'</li>');
	
	console.log('<li class="position">');
	console.log(str[2]);
	console.log('</li>');
	console.log('<li class="emaill">'+str[1]+'</li>');
	console.log('<hr class="rule">');
	console.log('\n');

	//for(var z=0;z<=1;z++){
	//	console.log(str[z]);
		
	//}
	
}

})



/*
// Importing the Required Modules 
const fs = require('fs'); 
const readline = require('readline'); 
  
// Creating a readable stream from file 
// readline module reads line by line  
// but from a readable stream only. 
const file = readline.createInterface({ 
    input: fs.createReadStream('mcp_list.txt'), 
    output: process.stdout, 
    terminal: false
}); 
  
// Printing the content of file line by 
//  line to console by listening on the 
// line event which will triggered 
// whenever a new line is read from 
// the stream 
file.on('line', (line) => { 

	var arr=line.split("  ");
	for(var i=0;i<arr.length;i++){
		console.log(arr[i]+'\n');
	} 

     
});

*/
