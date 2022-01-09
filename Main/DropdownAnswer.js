
export default class Dropdown {
    constructor(item, answers) {

        this.isOpen = item.classList.contains('hidden')
        this.answers = answers
        
        if (this.isOpen) {
            this.setDropDown(item)
        } else {
            this.disposeDropDown(item)
        }
    }

    setDropDown(item) {
        this.closeOpenTab()
        item.classList.remove('hidden')
    }

    disposeDropDown(item) {
        item.classList.add('hidden')
    }

    closeOpenTab() {
        for (let answer of this.answers) {
            if (!answer.classList.contains('hidden')) {
                answer.classList.add('hidden')
            }
        }
    }
}