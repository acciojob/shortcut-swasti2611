
  // your code here
function shortcut(str1, str2) '
let str=''
  if (str1.length > 0 && str2.length > 0) {
	  
    let s1= str1[0] ;
	  let s2=str2[0];
	  let ans=str1.concat(str2);
	  return ans;
	  
	  
  } else {
    return '';
  }
}

// Do not change the code below.
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
// alert(shortcut(s1, s2));