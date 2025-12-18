const characters: Array<string> = ["A","B","C","D","E","F","G","H","I",
    "J","K","L","M","N","O","P","Q","R","S","T","U","V",
    "W","X","Y","Z","a","b","c","d","e","f","g","h","i",
    "j","k","l","m","n","o","p","q","r","s","t","u","v",
    "w","x","y","z", "0", "1", "2", "3", "4", "5", "6",
    "7", "8", "9","~","`","!","@","#","$","%","^","&","*",
    "(",")","_","-","+","=","{","[","}","]",",","|",":",
    ";","<",">",".","?","/"];

const password1 = document.getElementById('pass1') as HTMLElement
const password2 = document.getElementById('pass2') as HTMLElement
let passLength = 15

const generatePassword = (): string =>{
    let password: string = ''
    for (let i: number = 0; i<passLength; i++){
        password += characters[Math.floor(Math.random()*characters.length)]
    }
    return password
}


const generatePasswords = (): void => {
    password1!.textContent = generatePassword()
    password2!.textContent = generatePassword()
}
