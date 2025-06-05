const showLogin = () => {
    let str=`
    <div class="container">
        <div class='App-Container'>
            <h1>Login Form</h1>
            <p><input type="text" class="txtEmail"></p>
            <p><input type="password" class="txtPass"></p>
            <p><button onclick="showHome()"class="welcome">Log In</button></p>
            <p><button onclick='showRegister()'>Create Account</button></p>
        </div>
    </div>
    `
    document.querySelector('.root').innerHTML = str
}

const showRegister = () => {
      let str=`
      <div class="container">
      <div class="App-Container">
        <h1>Register Form</h1>
        <p><input type="text" class="txtName"></p>
        <p><input type="text" class="txtEmail"></p>
        <p><input type="password" class="txtPass"></p>
        <button onclick="showLogin()">Register</button>
        <button onclick="showLogin()">Already have an account</button>
    </div>
    </div>
    `
    document.querySelector('.root').innerHTML = str
}

const showHome = ()=>{
    let str= `
    <div>
       <h1>WELCOME </h1>
    </div>

    
    `
    document.querySelector('.root').innerHTML = str
}