
export default class Check {
    constructor() {
        this.input = document.querySelectorAll('.input')
        this.iconWarning = document.querySelectorAll('.warning')
        this.warningText = document.querySelectorAll('.warning-text')
        this.line = document.querySelectorAll('.warning-line')

        console.log(this.input);
        // console.log(this.iconWarning);
        // console.log(this.warningText);
        // console.log(this.line);

        for (let i = 0; i < this.input.length; i++) {
            if (i == 2) {
                this.input[i].addEventListener('change', () => {
                    this.checkSelectedInput(this.input[i].value, i)
                })
            } else if (i == 5) {
                this.input[i].addEventListener('change', () => {
                    this.checkAge(this.input[i].value, i)
                })
            } else {
                this.input[i].addEventListener('keyup', () => {
                    if (i == 1) {
                        this.checkPasswordInput(this.input[i].value, i)
                    } else if (i == 6) {
                        this.checkEmail(this.input[i].value, i)
                    } else if (i == 7) {
                        this.checkNumber(this.input[i].value, i)
                    } else {
                        this.checkEmptyInput(this.input[i].value, i)
                    }
                })
            }
        }
    }

    checkEmptyInput(item, index) {
        if (item) {
            this.setHTMLPage(true, index)
        } else {
            this.setHTMLPage(false, index)
        }
    }

    checkPasswordInput(item, index) {
        let tmp = []
        tmp.push(item)
        const tmpString = tmp.join ( )
        const pattern = new RegExp("^(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?])(?=^.{8,20}$).+$")
        
        if (pattern.test(tmpString)) {
            this.setHTMLPage(true, index)
        } else {
            this.setHTMLPage(false, index)
        }
    }

    checkNumber(item, index) {
        const pattern = new RegExp("^(?=.*\\d)(?=^.{9,13}$).+$")

        if (pattern.test(item)) {
            this.setHTMLPage(true, index)
        } else {
            this.setHTMLPage(false, index)
        }
    }

    checkEmail(item, index) {
        const pattern = new RegExp("^(?=.*[@])(?=.*[.]).+$")

        if (pattern.test(item)) {
            this.setHTMLPage(true, index)
        } else {
            this.setHTMLPage(false, index)
        }        
    }

    checkSelectedInput(item, index) {
        if (item != 'null') {
            this.setHTMLPage(true, index)
        } else {
            this.setHTMLPage(false, index)
        }
    }

    checkAge(item, index) {
        const birthDate = new Date(item)
        const todayDate = new Date()

        // above 17 in millisecond
        if (todayDate - birthDate >= 5.3611E+11) {
            this.setHTMLPage(true, index)
        } else {
            this.setHTMLPage(false, index)
        }
    }

    setHTMLPage(bool, index) {
        if (bool) {
            this.iconWarning[index].classList.add('hidden')
            this.iconWarning[index].classList.add('success')
            this.warningText[index].classList.add('hidden')
            this.line[index].classList.remove('background-red')
        } else {
            this.iconWarning[index].classList.remove('hidden')
            this.iconWarning[index].classList.remove('success')
            this.warningText[index].classList.remove('hidden')
            this.line[index].classList.add('background-red')
        }
    }
}