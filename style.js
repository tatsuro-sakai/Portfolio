const menu =document.querySelector("#menu");

const lists = [
    "IMG_7249.JPG",
    "2272BDC0-5802-4E1C-8DAE-4A3BEB17A7D3.jpeg",
    "fuji1.JPG"
];
//for(let i=0;i<lists.length;i++){ 　//
    //const{img}=lists[0]; //
    const content=`<div><img src="image/${lists[0]}" alt=""></img></div>
    <div><img src="image/${lists[1]}"alt=""></img></div>
    <div><img src="image/${lists[2]}"alt=""></img></div>
    `;
    menu.insertAdjacentHTML("beforeend",content);



    const btn = document.querySelector("#button1");

    btn.addEventListener("click",  () => {
        document.body.classList.toggle("dark");
        document..getElementById.toggle("oowaku");
    })

