let button1 = document.querySelector('#btn1') //присваиваю значение для кнопки 1
let button2 = document.querySelector('#btn2') //присваиваю значение для кнопки 2

let div1 = document.querySelector('#leftBox') //присваиваю значение для левой колонки
let div2 = document.querySelector('#rightBox') //присваиваю значение для правой колонки

div1.style.overflow = 'scroll'  //добавляю полосу прокрутки для левой колонки
div2.style.overflow = 'scroll' //добавляю полосу прокрутки для правой колонки

    
    /*  создаю ивент на клик кнопки, который делает:
        1) создает два дива в блоках слева и справа
        2) засовывыет значение из левого в правое, транслитерируя его при этом
    */
button1.addEventListener('click', function () { 

    // создал значение.value
    let inputres = input.value 
    
    // объявил внутренний див для оригинального текста
    let orig_div = document.createElement('div') 

        if (input.value.length <= 15) {
            orig_div.innerHTML = input.value
         }  else
        {orig_div.innerHTML = input.value.slice(0,15) + '..'}

        div1.appendChild(orig_div);
        orig_div.title = input.value;

    

    
    
    /*  конец первого блока, где див, который из инпута, брал текст и 
        выдавал его в зависимости от длины: либо полный, либо с обрезкой в виде ".."
    */

    //таблица соответствия латинских букв и кириллицы
    let transliteObj = {   
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
    'е': 'e', 'ё': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i',
    'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
    'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
    'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch',
    'ш': 'sh', 'щ': 'sch', 'ь': '', 'ы': 'y', 'ъ': '',
    'э': 'e', 'ю': 'yu', 'я': 'ya',
    
    'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D',
    'Е': 'E', 'Ё': 'E', 'Ж': 'Zh', 'З': 'Z', 'И': 'I',
    'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N',
    'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T',
    'У': 'U', 'Ф': 'F', 'Х': 'H', 'Ц': 'C', 'Ч': 'Ch',
    'Ш': 'Sh', 'Щ': 'Sch', 'Ь': '', 'Ы': 'Y', 'Ъ': '',
    'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya'
    };
    
          // создал второй див, который берет значение из инпута
    let transl_div = document.createElement('div')  
        if (translit().length <= 15) {
            transl_div.innerHTML = translit()
        } else {
        transl_div.innerHTML = translit().slice(0,15) + '..'}

          div2.appendChild(transl_div) 
          transl_div.title = translit()

        
     
    
    // функция переводит кириллические буквы в латиницу
    function translit () {              
        let transliteStr = inputres.split('').map((elem)=> {
          for (let key in transliteObj) {
            if (elem == key) {
              elem = transliteObj[key]
            } else elem
          } return elem
        }).join('')
        return transliteStr
     };
});

button2.addEventListener('click', function () { 
    
    document.getElementById("#leftBox").value = "";

})