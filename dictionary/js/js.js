
let main = document.querySelector("#main")
console.log(main)

let words = [
    {shape: `форма`}, {same: `такой же`}, {purse: "кошелек"}, {pocket: "карман"}, {different: "не похожий/разные"},
    {bright: 'яркий'}, {advice: "совет"}, {kind: "добрый"}, {busy: "занятый"}, {waiter: "оффициант"},
    {unemployed: "безработный"}, {sad: "грустный"}, {retired: "на пенсии"}, {hard_working: "трудолюбивый"}, {part_time: "частичная занятость"},
    {deep: 'глубокий'}, {apply: 'применять'}, {to_the_full_extend: 'в полную силу'}, {including: 'в том числе'}, {affects: 'влиять'},
    {both: 'оба'}
    ];


const shuffle = (arr) => {
    return arr.sort(() => Math.round(Math.random() * 100) - 50);
}
shuffle(words);


let visible = (key, value) =>{
    let div = document.createElement("div")
    let label = document.createElement("label")
    let input = document.createElement("input")
    div.className = "word"
    label.htmlFor = key
    input.id = key
    label.textContent = value
    div.append(label, input)
    main.append(div)
    console.log(label.htmlFor == input.id)
}
words.forEach(w => {
    for (let key in w){
    visible(key, w[key]);
}
}
)


let result = () => {
   /*let word = document.querySelectorAll("label")*/
    let translate = document.querySelectorAll("input")
    /*console.log(word)*/
    translate.forEach(t => {
        if(t.value == t.id){
            t.classList.remove("false")
            t.classList.add("true")
        } else {
            t.classList.add("false")
            let span = document.createElement("span")
            span.style.fontSize = "20px"
            span.style.marginLeft = "10px"
            span.textContent = t.id
            if(t.nextElementSibling){
                return
            } else{
                t.after(span)
            }

        }
    })
}

let button = document.createElement("button")
button.textContent = "result"
button.onclick = result
document.body.append(button)



