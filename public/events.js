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
    
    document
    .getElementById('new-pic')
    .addEventListener('click', handleClick)
    
    
    let score = Number(document.querySelector('.score').innerHTML)
    console.log(typeof(score))

    document
        .getElementById('upvote')
        .addEventListener('click', () => {
            document.querySelector('.score').innerHTML = ++score
        })
    document
        .getElementById('downvote')
        .addEventListener('click', () => {
            document.querySelector('.score').innerHTML = --score
        })
    

})