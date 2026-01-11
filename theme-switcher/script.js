var subContent = document.getElementById("sub-contents")
var body = document.getElementById("body")
function darkMode(){
    subContent.classList.add("sub-contents-dark")
    subContent.classList.remove("sub-contents")
    body.classList.add("dark-mode")
    subContent.classList.remove("sub-contents-blue")
    body.classList.remove("blue-mode")


}
function blueMode(){
    subContent.classList.add("sub-contents-blue")
    subContent.classList.remove("sub-contents")
    body.classList.add("blue-mode")
    subContent.classList.remove("sub-contents-dark")
    body.classList.remove('dark-mode')
}
function lightMode(){
    subContent.classList.remove("sub-contents-blue")
    subContent.classList.add("sub-contents")
    body.classList.remove("blue-mode")
    subContent.classList.remove("sub-contents-dark")
    body.classList.remove('dark-mode')
}