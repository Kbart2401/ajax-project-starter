document.addEventListener('DOMContentLoaded', () => {


    const handleClick = async () => {
        // debugger;
        document.querySelector('.loader').innerHTML = "Loading..."
        const res = await fetch('http://localhost:3000/kitten/image')
        const json = await res.json()
        document.querySelector('.loader').innerHTML = ""
        document.querySelector('.cat-pic').src = json.src

        if (!res.ok) {
            console.log('Something went wrong! Please try again!')
            alert("Something went wrong! Please try again!");
        }
        // } catch (err) {
        //     console.log('error', err)
        //     alert("Something went wrong! Please try again!");
        // }
    }



    document
        .getElementById('new-pic')
        .addEventListener('click', handleClick)

})