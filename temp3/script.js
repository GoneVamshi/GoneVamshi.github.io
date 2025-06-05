function loginForm(){
    let str = `
    <h1>Login Form</h1>
    <input class="input1 " type="text">
    <input class="input2" type="email">
    <input class="input3" type="password">
    <button class="js-submit">Submit</button>

    `
    document.querySelector('.result').innerHTML = str
}
loginForm()

function showRegister(){
    let str=`
    <h1>Register form</h1>
    <input class="js-name" type="name">
    <input class="js-email" type="email">
    <input class="js-password" type="password">
    `
}