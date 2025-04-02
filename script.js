let prompt = document.querySelector("#prompt")
let chatContainer = document.querySelector(".chat-container")

function createChatBox(html,classes){
    let div = document.createElement("div")
    div.innerHTML = html
    div.classList.add(classes)
    return div

}

const Api_Url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBhPUd22IHeSvRmZltw3g6RiGMiO93HLd4"

async function generateResponse(aiChatBox) {

    let RequestOption = {
        Method: "POST ",
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify({

            "contents": [
      {
        "parts": [
          {
            "text": user.data}]}
]
    }
  )
    }
    let response = fetch(Api_Url,RequestOption)

    
}


let user= {
    data: null,

}


function handelechatResponse(message) {
    user.data= message
    let html = `<img src="user.jpg" alt="" id="UserImage" width="50" height="50">

    <div class="user-chat-area">
    ${user.data}         
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
            generateResponse(aiChatBox)

    },600)
}

prompt.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        handelechatResponse(prompt.value)


    }
})
