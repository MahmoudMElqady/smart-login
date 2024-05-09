var upName = document.getElementById('upName')
var upEmail = document.getElementById('upEmail')
var upPass = document.getElementById('upPass')
var inEmail = document.getElementById('inEmail')
var inPass = document.getElementById('inPass')
var users = []
if (localStorage.getItem('userData') != null) {
    users = JSON.parse(localStorage.getItem('userData'))
}
var signUpLink = document.getElementById('signUpLink')
var signInLink = document.getElementById('signInLink')
var signUpBtn = document.getElementById('signUpBtn')
var loginBtn = document.getElementById('loginBtn')
var home = document.getElementById('home')
var logOutBtn = document.getElementById('logOutBtn')

signUpLink.addEventListener('click', function () {
    document.getElementById('signInDiv').style.display = 'none'
    document.getElementById('signUpDiv').style.display = 'block'
})
signInLink.addEventListener('click', function () {
    document.getElementById('signUpDiv').style.display = 'none'
    document.getElementById('signInDiv').style.display = 'block'
})
signUpBtn.addEventListener('click', function () {
    if (upName.value == `` || upEmail.value == `` || upPass.value == ``) {
        document.getElementById('alertUp').innerHTML = `<p class="text-danger">All inputs are required</p>`
    } else if (exists() == true) {
        document.getElementById('alertUp').innerHTML = `<p class="text-danger">User already exists</p>`
    }
    else {
        adduser()
    }
})
function exists() {
    for (var i = 0; i < users.length; i++) {
        if (upEmail.value == users[i].email) {
            return true
            // document.getElementById('alertUp').innerHTML = `<p class="text-danger">User already exists</p>`
            // clr()
        }
    }
    return false
}
loginBtn.addEventListener('click', function () {
    if (inEmail.value == `` || inPass.value == ``) {
        document.getElementById('alertIn').innerHTML = `<p class="text-danger">All inputs are required</p>`
    } else {
        users = JSON.parse(localStorage.getItem('userData'))
        for (var i = 0; i < users.length; i++) {
            if (inEmail.value == users[i].email && inPass.value == users[i].password) {
                document.getElementById('signInDiv').style.display = 'none'
                document.getElementById('home').style.display = 'block'
                document.getElementById('userName').innerHTML = `<h2  class="my-4 fw-bold main-color ">Welcome ${users[i].name}</h2>`
                clrIn()
            } else {
                document.getElementById('alertIn').innerHTML = `<p class="text-danger">wrong email or passowrd</p>`
            }
        }
    }
})
logOutBtn.addEventListener('click', function () {
    document.getElementById('signInDiv').style.display = 'block'
    document.getElementById('home').style.display = 'none'
})
function adduser() {
    var user = {
        name: upName.value,
        email: upEmail.value,
        password: upPass.value
    }
    users.push(user);
    localStorage.setItem('userData', JSON.stringify(users));
    document.getElementById('alertUp').innerHTML = `<p class="text-success">success</p>`
    clr()
}
function clr() {
    upName.value = ``
    upEmail.value = ``
    upPass.value = ``
}
function clrIn() {
    inEmail.value = ``
    inPass.value = ``
}