'use strict';
document.addEventListener('DOMContentLoaded', () => {
    updatePosts()
})

const mural = document.querySelector("#posts")


function updatePosts() {

    fetch("http://localhost:3000/api/all").then(res => res.json()).then(json => {
        let postElements = ''
        let posts = JSON.parse(json)

        posts.forEach((post) => {
            let postElement = ` <div id="${post.id}" class="card mb-4">
                                    <div class="card-header">
                                        <h5 class="card-title">${post.title}</h5>
                                    </div>
                                    <div class="card-body">
                                        <div class="card-text">${post.description}</div>
                                    </div>
                                </div>`
            postElements += postElement
            mural.innerHTML = postElements
        })
    })
}

function newPost() {
    let title = document.getElementById('title').value
    let description = document.getElementById('description').value
    let post = { title, description }
    const options = {
        method: "POST",
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify(post)
    }

    console.log(post)

    fetch("http://localhost:3000/api/new", options).then(res => {
        updatePosts()
        document.getElementById('title').value = ''
        document.getElementById('description').value = ''
    })
}

function del() {
    let id = document.querySelector('#id').value
    const options = {
        method: 'delete',
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify({ id })
    }

    fetch("http://localhost:3000/api/delete", options).then(res => {
        document.querySelector("#id").value = ''
        updatePosts()
    })
}