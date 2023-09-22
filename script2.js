function createNewURl(name){
    name = document.querySelector('#inputname').value
    let url = 'https://api.github.com/users/'
    let newurl = url.concat('',name)
    // return newurl
    console.log(newurl);

    // fetch start
    fetch(newurl)
        .then( (res) =>{
            if (!res.ok) {
                error('Somethiing went Wrong!')
                return
            }
            return res.json()
        })
        .then( (data) =>{
            clean()
            if (data != '') {
                // console.log(data.name);
            let uname = data.name
            const h5 = document.createElement('h5')
            h5.innerHTML = uname
            document.querySelector('#name').appendChild(h5)
            let uid = data.id
            const id = document.createElement('h3')
            id.innerHTML = uid
            document.querySelector('#id').appendChild(id)
           
            let uimg = data.avatar_url
            const imgtg = document.createElement('img')
            imgtg.src = uimg
            document.querySelector('.circle').appendChild(imgtg)
           
            let uloc = data.location
            const loc = document.createElement('h3')
            loc.innerHTML = uloc
            document.querySelector('#location').appendChild(loc)
            
            let ubio = data.bio
            const bio = document.createElement('h3')
            bio.innerHTML = ubio
            document.querySelector('#bio').appendChild(bio)
            clean()
            } else {
               prompt('Error',"Something went wrong!")
            }
        })
        .catch( (error) =>{
            error('Something went wrong!')
                console.error('Something went wrong!');
        })
}

function clean(){
    document.querySelector('input').value = ''
    document.querySelector('input').setAttribute('disabel','')
}

const  btn = document.querySelector('button')
    btn.addEventListener('click',createNewURl)



