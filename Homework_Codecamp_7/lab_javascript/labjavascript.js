class userTemplate {
    constructor(name, password, age, date) {
        this.name = neme
        this.password = password
        this.age = age
        this.connected = false
        this.date = date
    }

    login() {
        this.connected = true
        console.log('your login status :', this.connected)
    }

    logout() {
        this.connected = false
        console.log('your login status :', this.connected)
    }

    checkStatus() {
        if (this.connected == true) {
            console.log('your status : login');
        }
        else {
            console.log('your status : logout');
        }
    }
}