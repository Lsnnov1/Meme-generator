const Form = document.querySelector("#form")
const Toptext = document.querySelector("#topTextInput")
const img = document.querySelector("#imgInput")
const Bottomtext = document.querySelector("#bottomTextInput")
const Enter = document.querySelector("#enter")
const memeDiv = document.querySelector("#memeDiv")

// ADD EVENTLISTENER TO SUBMIT BUTTON
Form.addEventListener('submit',function(e){
    e.preventDefault()
    // FOR EVERYTIME BUTTON IS SUBMITTED, CALL THIS FUNCTION
    newMeme(img.value, Toptext.value, Bottomtext.value)

    
})

// GENERATE MEME FUNCTION
function newMeme(image, Ttext, Btxt){
    // CREATE A NEW DIV 
    let meme = document.createElement('div')

    // ADDING CLASS 
    meme.className = "createdMeme";

    let topDiv = document.createElement('div') 
    topDiv.className = "topDiv";

    let bottomDiv = document.createElement("div")
    bottomDiv.className = "bottomDiv";

    // CREATE IMAGE 
    let newImg = document.createElement('img')
    newImg.setAttribute('src', image)
    newImg.className = "newImg";

    // APPENDING TEXTS TO INDIVIDUAL DIVS
    topDiv.append(Ttext)
    bottomDiv.append(Btxt)

    // APPEND IMAGE AND TEXTS TO MEME
    meme.append(topDiv)
    meme.append(newImg)
    meme.append(bottomDiv)

    // APPEND MEME TO DIV
    memeDiv.appendChild(meme)
    

    // ADD LISTENER TO REMOVE MEME WHEN CLICKED
    meme.addEventListener('click', function(e){
        meme.remove()
    })
}; 

// RANDOM IMAGE GEN

// const memePics = [
//     "https://i.pinimg.com/236x/83/cc/c7/83ccc7c0dd14a53fc0380a28f88edf7a.jpg",
    //  EVIL DOG


//     "https://media.istockphoto.com/id/483799085/photo/lazy-fat-cat-sleeping-on-the-couch.jpg?s=2048x2048&w=is&k=20&c=DJpVfzj5Ic77glAzriWJhydK4iasiG7trvch3ztEHyA=", 
    //  FAT CAT

//     "https://media.istockphoto.com/id/1191072534/photo/angry-senior-woman-protecting-her-cat-with-a-gun.jpg?s=612x612&w=0&k=20&c=BrhxTsyp94_PI7WjKAzul_Ui_TlSZi-wRIHbzFebDCI=",
    //  GUN CAT LADY
    
//     "https://media.istockphoto.com/id/1215902550/photo/fashionable-man-stocking-up-toilet-paper-at-home.jpg?s=612x612&w=0&k=20&c=egnXcGaqQBI_47VUcrDplUV04bUkyWpgc0duyS4FGNM="
    // MAN TOILET PAPER FASHION
    
// ]

// const randomImg = Math.floor(Math.random() * memePics.length)
