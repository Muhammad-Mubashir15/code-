var arr=[]

function signup(){
    var getemail=document.getElementById('semail')
    var getpass=document.getElementById('spass')

    var obj={
    email:getemail.value,
    pass:getpass.value
}

arr.push(obj)

if(getemail.value == '' || getpass.value == ''){
    alert('please fill the required fields..')
}
else{
    localStorage.setItem('Data',JSON.stringify(arr))
    getemail.value=''
    getpass.value=''

    location.href='login.html'
}
}


function login(){
    
    var getname=document.getElementById('lname')
    var getemail=document.getElementById('lemail')
    var getpass=document.getElementById('lpass')
var filters=arr.filter(function(data){
    return data.email == getemail.value && data.pass == getpass.value
})
if(getemail.value == '' || getpass == ''){
    alert('please fill the required fields..')
}
else if(filters.length){
    alert('user login successful')
    getemail.value=''
    getpass.value=''
    location.href='quiz.html'

    localStorage.setItem('username', getname.value)



}
else('email/password incorrect..')
}



var getuser =localStorage.getItem('Data')
if(getuser !== null ){
    arr=JSON.parse(getuser)
}