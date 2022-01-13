
export default class UploadFile {
    constructor() {
        this.identity = document.getElementById('identity')
        this.cv = document.getElementById('cv')

        this.labelCV = document.getElementById('label-cv')
        this.labelIdentity = document.getElementById('label-identity')
        
        if (this.identity) {
            this.identity.addEventListener('change', () => {
                this.textContext(this.identity, this.labelIdentity)
            })
        }

        if (this.cv) {
            this.cv.addEventListener('change', () => {
                this.textContext(this.cv, this.labelCV)
            })
        }
    }

    textContext(item, text) {
        text.textContent = item.files[0].name
    }
}