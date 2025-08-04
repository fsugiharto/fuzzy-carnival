const vm = Vue.createApp({
    data() {
        return {
            givenName: 'Georg',
            surname: 'Doe',
            url: 'https://duckduckgo.com'
        }
    },
    methods: {
        getFullName() {
            return `${this.givenName.charAt(0).toUpperCase()}${this.givenName.slice(1)} ${this.surname.toUpperCase()}`
        }
    }
}).mount('#app')

// setTimeout(() => {
//     vm.firstName = 'Kurt'
// }, 2000)