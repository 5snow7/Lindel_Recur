let inplind,inplen,inpang;
let par;
function start(){
inplind=createInput("enter string for lind");
inplind.class('inpbdd');inplind.position(950,60);
inplind.changed(chgstr);	

inplen=createInput("enter len");
inplen.class('inpbdd');inplen.position(950,120);
inplen.changed(chglen);	

inpang=createInput("enter angle");
inpang.class('inpbdd');inpang.position(950,170);
inpang.changed(chgang);	
par=createP("enter string, len, angle and hit 'r'");
par.class('inpbdd');par.position(950,-10);
}

function chgstr(){
rule[1]=inplind.value();	
}

function chglen(){
len=inplen.value();	
}

function chgang(){
ang=inpang.value();	
}