module.exports = {

    posts: [
        {
            id: "IDAleatório",
            title: "Teste do Mural",
            description: "Descrição teste"
        }
    ],

    getAll() {
        return this.posts
    },

    newPost(title, description) {
        this.posts.push({ id: this.generateID(), title, description })
    },

    generateID() {
        return Math.random().toString(36).substr(2, 9)
    },

    delete(id) {
        this.posts.forEach((element, index) => {
            if (element.id == id) {
                this.posts.splice(index, 1)
            }
        })
    }
}