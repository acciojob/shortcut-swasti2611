function shortcut(s1, s2) {
  // your code here

	for (let i  = 0; i  < s1.length; i ++) {
		if(s1.length>0 && s2.length>0){
              return s1[0].toUpperCase() + s2[0].toUpperCase();
		}else{
			return ' '
		}
	}
	
}

Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
