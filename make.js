// fetch("https://chatbotai.com/chat")
//     .then((res) => res.text())     //successfully resolves
//     .then(txt => console.log(txt))
//     .catch(() => console.log("api failed"));   //failsf

async function getchatbot() {
    const data = await fetch("https://chatbotai.com/chat");
    //console.log(data);
    await data.json();
    console.log(txt);
}

getchatbot();