a =3;
b=3;
c=1;

if(a>=b>=c){
    X= a*100+b*10+c;
    x= c*100+b*10+a;
}
else if(a>=c>=b){
    X= a*100+c*10+b
    x= b*100+c*10+a
}
else if(b>=a>=c){
    X= b*100+a*10+c
    x= c*100+a*10+b;
}
else if(b>=c>=a){
    X= b*100+c*10+a
    x= a*100+c*10+b;
}

else if(c>=b>=a){
    X= c*100+b*10+a;
    x= a*100+b*10+c;
}

else if(c>=a>=b){
    X= c*100+a*10+b;
    x= b*100+a*10+c;
}

console.log(X, 'the biggest,', x, 'the smallest');
