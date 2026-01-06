// const input = document.querySelector("#input");
// const form = document.querySelector("#form");
// const div = document.querySelector("#container");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     fetch("https://api.freeapi.app/api/v1/public/randomjokes/joke/random")
//         .then(res => res.json())
//         .then(res => {
//             console.log(res);

//             div.innerHTML = `
//                 <div>
//                     <h1>Today's Joke</h1>
//                     <p>${res.data.content}</p>
//                 </div>
//             `;
//         })
//         .catch(err => {
//             console.log("Error:", err);
//         });
// });

const form = document.querySelector("#form");
const btn = document.querySelector("#btn");
const container = document.querySelector("#container");

const stickers = ["😂", "🤣", "😜", "😆", "😹", "🤪"];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    btn.disabled = true;
    btn.innerText = "Loading...";

    container.innerHTML = `
        <div class="joke-card">
            <div class="sticker">⏳</div>
            <p>Fetching premium humor...</p>
        </div>
    `;

    fetch("https://api.freeapi.app/api/v1/public/randomjokes/joke/random")
        .then(res => res.json())
        .then(res => {
            const randomSticker =
                stickers[Math.floor(Math.random() * stickers.length)];

            container.innerHTML = `
                <div class="joke-card">
                    <div class="sticker">${randomSticker}</div>
                    <h1>Exclusive Joke</h1>
                    <p>${res.data.content}</p>
                </div>
            `;
        })
        .catch(() => {
            container.innerHTML = `
                <div class="joke-card">
                    <div class="sticker">❌</div>
                    <p>Something went wrong. Try again.</p>
                </div>
            `;
        })
        .finally(() => {
            btn.disabled = false;
            btn.innerText = "Generate Joke";
        });
});
