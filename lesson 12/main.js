class option {
    constructor(height='500px', width='500px', bg='#fff', fontSize='16px', textAlign='right') {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    makeElemet(text = 'пустой элемент'){
        let div = document.createElement('div');
            div.style.cssText = `height: ${this.height};
                                 width: ${this.width};
                                 background: ${this.bg}; 
                                 font-size: ${this.fontSize};
                                 text-align: ${this.textAlign};`;
            div.innerText = text;
            return div;
    }
}

const element = new option('100px', '300px', '#53b4ff', '30px', 'center');
let ele = document.getElementById('container');
let test = element.makeElemet('Получилось ли с первого раза?');
ele.appendChild(test);