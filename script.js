let prompt = document.querySelector("#prompt")
let chatContainer = document.querySelector(".chat-container")

function createChatBox(html,classes){
    let div = document.createElement("div")
    div.innerHTML = html
    div.classList.add(classes)
    return div

}

function handelechatResponse(message) {
    let html = `<img src="user.jpg" alt="" id="UserImage" width="50" height="50">

    <div class="user-chat-area">
    ${message}         
    </div>`
    prompt.value = ""
    let userChatBox = createChatBox(html,"user-chat-box")
    chatContainer.appendChild(userChatBox)

    setTimeout(()=>{
        let html = `            <img src="bot.jpg" alt="" id="aiImage" width="50" height="40">

            <div class="ai-chat-area">
                   <img src="loading.gif" alt=""   class ="load" width="50px">
            
        
            </div>`
            let aiChatBox=createChatBox(html,"ai-chat-box")
            chatContainer.appendChild(aiChatBox)

    },600)
}

prompt.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        handelechatResponse(prompt.value)


    }
})
