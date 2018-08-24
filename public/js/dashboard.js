//Date 
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById('dashDate').innerHTML = m + "/" + d + "/" + y ;
