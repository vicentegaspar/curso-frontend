
import './style.scss'
import img from './ashes.png'

function rootStyle(){
    const elemRoot = document.getElementById('root')
    elemRoot.classList.add('container')
}

function titleComponent() {
    const elemH1 = document.createElement('h1')
    elemH1.innerHTML = 'Hello World 6'
    elemH1.classList.add('title')

    return elemH1
}

function imageComponent() {
    const elemImg = new Image(400,400)
    elemImg.src = img
    return elemImg
}

rootStyle()
document.body.appendChild(titleComponent())
document.body.appendChild(imageComponent())