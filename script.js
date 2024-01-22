function shortcut(s1, s2) {
  // your code here
if(s1==" " )return s1;
if(s2==" ")return s2;	
			let	str=''
	for (let i  = 0; i  < s1.length; i ++) {
		if(s1!=' ' && s2!= " "){
               str+=s1.charAt(0).toUpperCase();
			   str+=s2.charAt(0).toUpperCase();
		}
	}
	return str;
}

// Do not change the code below.
//const s1 = prompt("Enter s1:");
//const s2 = prompt("Enter s2:");
//alert(shortcut(s1, s2));
