const memePics = [
    "https://i.pinimg.com/236x/83/cc/c7/83ccc7c0dd14a53fc0380a28f88edf7a.jpg", 
    
    "https://media.istockphoto.com/id/483799085/photo/lazy-fat-cat-sleeping-on-the-couch.jpg?s=2048x2048&w=is&k=20&c=DJpVfzj5Ic77glAzriWJhydK4iasiG7trvch3ztEHyA=", 
    
    "https://media.istockphoto.com/id/1191072534/photo/angry-senior-woman-protecting-her-cat-with-a-gun.jpg?s=612x612&w=0&k=20&c=BrhxTsyp94_PI7WjKAzul_Ui_TlSZi-wRIHbzFebDCI=", 
    
    "https://media.istockphoto.com/id/1215902550/photo/fashionable-man-stocking-up-toilet-paper-at-home.jpg?s=612x612&w=0&k=20&c=egnXcGaqQBI_47VUcrDplUV04bUkyWpgc0duyS4FGNM="
]
// loop through array and generate random number from 1 to array.lengh to generate random image
const randomImg = Math.floor(Math.random() * memePics.length)
Enter.addEventListener('click', function(e){
    e.preventDefault()
   section.innerHTML = Toptext.value
   section.innerHTML = Bottomtext.value
    
})

function newMeme(image, Ttxt, Btxt ) {
    let newDiv = document.createElement('div')
    section += newDiv;
    Toptext.innerText = Ttxt;
    Bottomtext.innerText = Btxt;
    img.innerText = image;
    return newDiv;
}
console.log(memePics.length)
console.log(randomImg)
console.log(img)

function sizeMeme(){
    const imgWidth = image.width;
    const imgHeight = image.height;
    newDiv.width = imgWidth;
    newDiv.height = imgHeight;

    const fontSize = Math.floor(width / 10)
    const heightSpacing = height / 25; }