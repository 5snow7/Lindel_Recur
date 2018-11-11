
function sir(t,len,lev){
	if(lev==0){t.fd(len);}
	else{
		sir(t,len/3,lev-1);t.lt(60);
		sir(t,len/3,lev-1);t.rt(120);
		sir(t,len/3,lev-1);t.lt(60);
		sir(t,len/3,lev-1);
		
		}
}