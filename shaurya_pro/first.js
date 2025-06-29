 const username=[];
 const data_email=[];
 const pass=[]; 

function register(){
    const input1=document.getElementById("num1");
    const name=input1.value;
    const input2=document.getElementById("num2");
    const email=input2.value;
    const input3=document.getElementById("num3");
    const pass1=input3.value;
    const input4=document.getElementById("num4");
    const pass2=input4.value;
    let x=email.length

    for(let k of name){
        if(k==0 || k==1 || k==2 || k==3 || k==4 || k==5 || k==6 || k==7 || k==8 || k==9 ){
            alert("Enter correct Name.\nNote: Numerical value should not contain in name.")
            return
        }
    
    }

    if(email[x-1]!=="m" || email[x-2]!=="o" || email[x-3]!=="c" || email[x-4]!=="." || email[x-5]!=="l" || email[x-6]!=="i" || email[x-7]!=="a" || email[x-8]!=="m" || email[x-9]!=="g" || email[x-10]!=="@"){
        alert("Email format is not correct, check again and enter correct email id. \nNote: email must contain ...@gmail.com at the end.")
        return
    }
    if(name=="" || email=="" || pass1=="" || pass2==""){
        alert("form is incomplete.")
        return
    }
    for(let val of data_email){
        if(val===email){
            alert("account is already exist")
            return
        }
    }
    if(pass1!==pass2){
        alert("password do not match")
        return
    }
    if(pass1.length<6){
        alert("Password is easy, so enter password atleast of 6 digit.")
        return
    }
    username.unshift(name)
    data_email.unshift(email)
    pass.unshift(pass2)

    input1.value="";
    input2.value="";
    input3.value="";
    input4.value="";

   }

function login(){
    const input1=document.getElementById("login_email")
    const email=input1.value
    const input2=document.getElementById("login_pass")
    const pass1=input2.value
    let n;
    let k;
    let posn;
    if(email=="" || pass1==""){
        alert("form is incomplete.")
        return
    }
    for(let val of data_email){
        if(val===email){
            n=1;
            posn=data_email.indexOf(val);
        }
    }
    for(let val of pass){
        if(val===pass1){
            k=1;
            
        }
    }
    if(n==1 && k==1){
        alert("Hello " + username[posn] +"\nWelcome to Shaurya Sports Fest.")
    }
    else{
        alert("account does not exist.")
    }
    input1.value=""
    input2.value=""
}