document.addEventListener('DOMContentLoaded', () => {
    
   
    const handleClick = async () => {
        const res = await fetch('/kitten/image')
        const json = await res.json()

        document.querySelector('.cat-pic').src = json.src


    }
    
    
    
    document
        .getElementById('new-pic')
        .addEventListener('click', handleClick)

})