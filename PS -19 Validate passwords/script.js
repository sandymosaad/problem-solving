// PS -19 Validate passwords

const passwords = ['password1', 'password2', 'password3', 'password4', '3W8!password5'];
const passwordRegex = /^[a-zA-Z0-9]{8,20}$/;

for (let i = 0; i < passwords.length; i++) {
    const isValid = passwordRegex.test(passwords[i]);
    console.log(`Password ${i + 1} => ${passwords[i]} :  ${isValid ? 'Valid' : 'Invalid'}`);
}