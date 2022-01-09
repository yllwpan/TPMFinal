
import Dropdown from './DropdownAnswer.js'

export default class Main {
    constructor() {
        this.icons = document.querySelectorAll('.icon-container')
        this.answers = document.querySelectorAll('.answer-container')

        for (const icon of this.icons) {
            if (icon.classList.contains('faq-icon-container')) {
                icon.addEventListener('click', () => {
                    let iconId = parseInt(icon.id)
                    this.dropdown = new Dropdown(this.answers[iconId], this.answers)
                })
            }
        }
    }
}