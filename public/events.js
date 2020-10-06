document.addEventListener('DOMContentLoaded', () => {

    const handleClick = async () => {

        try {

            document.querySelector('.loader').innerHTML = "Loading..."
            const res = await fetch('http://localhost:3000/kitten/image')

            if (!res.ok) throw res

            const json = await res.json()
            document.querySelector('.loader').innerHTML = ""
            document.querySelector('.cat-pic').src = json.src


        } catch (err) {
            console.log('error', err)
            alert("Something went wrong! Please try again!");
        }

    }

    /*******EVENT HANDLERS********/
    document
        .getElementById('new-pic')
        .addEventListener('click', handleClick)


    let score = Number(document.querySelector('.score').innerHTML)

    document
        .getElementById('upvote')
        .addEventListener('click', async () => {
            const res = await fetch("/kitten/upvote", {
                method: 'PATCH'
            })
            const json = await res.json()
            document.querySelector('.score').innerHTML = json.score;
        })
    document
        .getElementById('downvote')
        .addEventListener('click', async () => {
            const res = await fetch("/kitten/downvote", {
                method: 'PATCH'
            })
            const json = await res.json()
            document.querySelector('.score').innerHTML = json.score;
        })
    document
        .querySelector('input[value="submit"]')
        .addEventListener('submit', async (e) => {
            e.preventDefault();
            const res = await fetch("/kitten/comments", {
                method: 'POST'
            })
            const json = await res.json()
            console.log(json);
            document.querySelector('.comments')
            .innerHTML = `<ul><li>`
        })


})