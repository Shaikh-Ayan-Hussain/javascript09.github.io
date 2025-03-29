let user = [];

function registration() {
    const fullName = document.getElementById("fullName").value;
    const userId = document.getElementById("signupUser").value;
    const userPass = document.getElementById("signupPass").value;
    const confirmPass = document.getElementById("confirmPass").value;

    if (!fullName || !userId || !userPass || !confirmPass) {
        alert("Please fill all the fields");
        return;
    }
    let userExist = user.some(user => user.userId === userId)
    if (userExist) {
        alert("User Already Entered");
        return;
    }
    user.push({ fullName, userId, userPass, confirmPass });
    alert("Registration Successful");

    document.getElementById("fullName").value = "";
    document.getElementById("signupUser").value = "";
    document.getElementById("signupPass").value = "";
    document.getElementById("confirmPass").value = "";
}
function loginIn() {
    let enterId = document.getElementById("enterUser").value;
    let enterPass = document.getElementById("enterPass").value;
    let enterconfirmPass = document.getElementById("enterconfirmPass").value;

    let Users = user.find(user => user.userId === enterId && user.userPass === enterPass && user.confirmPass === enterconfirmPass)
    alert("Login Successful");
    document.getElementById("enterUser").value = "";
    document.getElementById("enterPass").value = "";
    document.getElementById("enterconfirmPass").value = "";

}