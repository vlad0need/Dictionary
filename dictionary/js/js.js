
let main = document.querySelector("#main")
console.log(main)

let words = [
    {shape: `форма`}, {same: `такой же`}, {purse: "кошелек"}, {pocket: "карман"}, {different: "не похожий/разные"},
    {bright: 'яркий'}, {advice: "совет"}, {kind: "добрый"}, {busy: "занятый"}, {waiter: "оффициант"},
    {unemployed: "безработный"}, {sad: "грустный"}, {retired: "на пенсии"}, {hard_working: "трудолюбивый"}, {part_time: "частичная занятость"},
    {deep: 'глубокий'}, {apply: 'применять'}, {to_the_full_extend: 'в полную силу'}, {including: 'в том числе'}, {influence: 'влиять'},
    {both: 'оба'}, {cheekbones: 'скулы'}, {majority: 'большинство'}, {similar: 'похожий'}, {appearance: 'внешность'},
    {tall: 'высокий'}, {height: 'рост'}, {recently: 'недавно'}, {high_way: 'трасса'}, {cheap: 'дешево'}, {get_on: 'ладить'},
    {hardly_ever: 'почти никогда'}, {shy: 'стестняться'}, {spontaneous: 'спонтанный'}, {decide: 'решать'}, {near: 'около'},
    {revise: 'пересматривать/исправлять'}, {weather_forecast: 'прогноз погоды'}, {except: 'кроме'}, {looking_forward: 'жду с нетерпением'},
    {pleasure: 'удовольствие'}, {shame: 'стыд'}, {necessary: 'необходимо'}, {delicious: 'вкусный'}, {probably: 'наверное'}, {become: 'становиться'},
    {bring: 'приносить'}, {keep: 'хранить'}, {lay: 'класть'}, {lend: 'давать в долг'}, {let: 'позволять'}, {spend: 'проводить'}, {attract: 'привлекать'},
    {simultaneously: 'одновременно'}, {cough: 'кашель'}, {throat: 'горло'}, {provider: 'поставщик'}, {predict: 'предсказывать'},
    {confuse: 'перепутать'}, {habit: 'привычка'}, {sights: 'достопримечательность'}, {distract: 'отвлекать'}, {additionally: 'кроме того'},
    {wise: 'мудрый'}, {declare: 'обьявлять'}, {conventional: 'общепринятый'}, {confident: 'уверенный'}, {embarrassed: 'смущенный'},
    {excited: 'в восторге'}, {proud: 'гордый'}, {disappointed: 'разочарованный'}, {glad: 'рад'}, {ordinary: 'обычный'},
    {advantage: 'преимущество'}, {conditional: 'условный'}, {reason: 'причина'}, {acquaintances: 'знакомые'},
    {take_care_of: "позаботиться о"}, {way_out: "выход из положения"}, {take_into_consideration: "принимать во внимание"},
    {crutches: "костыли"}, {resign: "уйти в отставку"}, {leak: "утечка"},
    {satisfied: "доволен"}, {due: "в связи"}, {complicated: "сложный"}, {empathy: "сочувстие"}, {overdo: "переусердствовать"},
    {decision: "решение"}, {introduce: "представлять"}, {approach: "подход"}, {division: "разделение"}, {run_out_of: "закончиться"},
    {put_away: "убрать"}, {count_on: "расчитывать на.."}, {get_rid_of: "избавиться от.."}, {look_after: "присматривать за.."},
    {put_up_with: "смириться с.."}, {settle_on: "остановиться на (выборе)"}, {run_into: "столкнуться с.."}, {take_after: "унаследовать.."},
    {back_out_of: "увиливать от.."}, {patience: "терпение"}, {prove: "доказывать"}, {overlap: "перекрывать"}, {responsive: "отзывчивый"},
    {"widely-spread": "широко распространенный"}, {artificial: "искусственный"}, {disgusted: "отвращение"}, {additives: "добавки"}, {overtake: "обогнать"},
    {especially: "особенно"}, {intention: "намерение"}, {avoid: "избегать"}, {consequences: "последствия"}, {triggered_by: "вызваны"}, {take_over: "перенимать"},
    {in_vain: "напрасно"}, {expect: "ожидать"}, {accumulate: "накапливать"}, {compare: "сравнивать"}, {persuade: "убеждать"}, {exception: "исключение"},
    {reliable: "надежный"},
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
const changeWords = () => {
    words.forEach(w => {
            for (let key in w){
                visible(w[key], key);
            }
        }
    )
}

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

let button2 = document.createElement("button")
button2.textContent = "change"
button2.onclick = changeWords
document.body.append(button2)



