// JavaScript Document
function Resolver(operador){
	var f1=new Array(2);
	var f2=new Array(2);
	var r=new Array(2);
	
	f1[0]=document.getElementById('N1').value;
	f2[0]=document.getElementById('N2').value;
	f1[1]=document.getElementById('d1').value;
	f2[1]=document.getElementById('d2').value;
	switch(operador){
	case'+':
		     document.getElementById("operador").src="img/suma.png"
			 r[0]=f1[0]*f2[1]+f1[1]*f2[0];
			 r[1]=f1[1]*f2[1];
			 break;
  case'-':
		     document.getElementById("operador").src="img/resta.png"
			 r[0]=f1[0]*f2[1]-f1[1]*f2[0];
			 r[1]=f1[1]*f2[1];
			 break;
 case'*':
		     document.getElementById("operador").src="img/multi.png"
			 r[0]=f1[0]*f2[0];
			 r[1]=f1[1]*f2[1];
			 break;
   case'/':
		     document.getElementById("operador").src="img/division.png"
			 r[0]=f1[0]*f2[1];
			 r[1]=f1[1]*f2[0];
			 break;
  case'f':
		     document.getElementById("operador").src="img/borra.png"
			 document.getElementById('N1').value="";
			 document.getElementById('N2').value="";
			 document.getElementById('d1').value="";
			 document.getElementById('d2').value="";
			 r[0]="";
			 r[1]="";
			 break;
	}
	document.getElementById('RN').value=r[0];
	document.getElementById('RD').value=r[1];
	
}