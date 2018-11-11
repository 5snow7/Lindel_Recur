
function lindel(sent,n){
let newsent="";let ch='';
for(let j=0;j<sent.length;j++){
ch=sent.charAt(j);
switch(ch){
	case 'A':newsent=newsent+rule[n];break;
	case '+':newsent=newsent+"+";break;
	case '-':newsent=newsent+"-";break;
	}}	
return newsent;	
}
