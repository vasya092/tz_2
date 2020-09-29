let button = document.getElementById('main-form__button')
let form = document.getElementById('form')
let textResult = document.getElementById('result')
let requiredFields = form.querySelectorAll('.required')


let errors = 0


const ShowWarning = textWarning => {
    let warning = document.createElement('div')
        warning.className="error"
        warning.innerHTML = textWarning 
    return warning;
}

const ValidationPhone = () => {
    let re = /^\d[\d\(\)\ -]{4,14}\d$/
    let phoneField = document.getElementById('phone-field')
    let valid = re.test(phoneField.value)
    if(!valid) {
        errors++
        phoneField.after(ShowWarning("Your phone is not correct"))
    } 
}

const ValidationMail = () => {
    let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i
    let mailField = document.getElementById('mail-field')
    let valid = re.test(mailField.value)
    if(!valid) {
        errors++
        mailField.after(ShowWarning("Your mail is not correct"))
    } 
}


button.addEventListener( "click" , () => {

    let warnings = form.querySelectorAll('.error')

    warnings.forEach(item => {
        item.remove()
    })

    requiredFields.forEach((item,i) => {
        if(item.value === ''){
            let warning = ShowWarning('This field cannot be empty')
            form[i].after(warning)
            errors++
        }
    })
    
    ValidationPhone()
    ValidationMail()

    if(errors == 0) {
        fetch('sendMail.php', {
            method: 'POST',
            body: new FormData(form)
        })
            .then(response => console.log("Resonse: ", response.json))
            .catch(error => console.error(error))

    }
})