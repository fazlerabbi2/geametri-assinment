
// triangle-Btn
document.getElementById('triangle-btn').addEventListener('click',function(){ 
const totalInputmultiply =  getInputValue('triangle-b','triangle-h');
const TriangleArea = 0.5 * totalInputmultiply;
if(totalInputmultiply > 0){
    showResult('triangle',TriangleArea)
}
});

// Rectangle-Btn
document.getElementById('Rectangle-btn').addEventListener('click',function(){
    const totalInputmultiply =  getInputValue('rectangle-w','rectangle-i');
    if(totalInputmultiply > 0){
        showResult('rectangle-title',totalInputmultiply)
    }

})

// parallelogram-Btn
document.getElementById('parallelogram-btn').addEventListener('click',function(){
    const parallelogramMultiply = 10 * 12;
    showResult('parallelogram-title',parallelogramMultiply)

})

// rhombus-Btn
document.getElementById('rhombus-btn').addEventListener('click',function(){
    const rhombusMultiply = 0.5 * 16 * 8;
    showResult('rhombus-title',rhombusMultiply)

})

// pentagon-Btn
document.getElementById('pentagon-btn').addEventListener('click',function(){
    const pentagonMultiply = 0.5 * 6 * 10;
    showResult('nentagon-title',pentagonMultiply)

})

// ellipse-Btn
document.getElementById('ellipse-btn').addEventListener('click',function(){
    const ellipseMultiply = 3.14 * 10 * 4;
    const toFixedellipseMultiply = ellipseMultiply.toFixed(2);
    showResult('ellipse-title',toFixedellipseMultiply)

})

// get input value function
function getInputValue(inputValue1,inputValue2){
    const inputValueFirst =  document.getElementById(inputValue1).value;
    const inputValueParse = parseInt(inputValueFirst);
    const inputValueSecond =  document.getElementById(inputValue2).value;
    const triangleHInputParseIng =  parseInt(inputValueSecond);

    if(inputValueParse > 0){
        if(triangleHInputParseIng > 0) {
            const multiply = inputValueParse * triangleHInputParseIng;
            return multiply;
        }else{
            alert('Please input some positive Number')
        }
    }else{
        alert('Please input some positive Number')
    }
    
}

// html Elements create and showResult Function
let counter = 1;
function showResult(title,result){
    const titleText = document.getElementById(title).innerText;
    const containerDiv = document.getElementById('result-div');
    const createNewDiv = document.createElement('div');
    createNewDiv.className = 'result';
    createNewDiv.innerHTML = `
    <span>${counter++}. ${titleText}</span>
    <span>${result}cm<sup>2</sup></span>
    <button class="btn btn-primary">Covert to m<sup>2</sup></button>
    `;
    containerDiv.appendChild(createNewDiv)

}

// random color genarate
let bgColorClasses = document.querySelectorAll('.random-bg-color');
for(const bgColorClass of bgColorClasses){
    bgColorClass.addEventListener('mouseenter',function(){
        function random_bg_color() {
            var x = Math.floor(Math.random() * 256);
            var y = Math.floor(Math.random() * 256);
            var z = Math.floor(Math.random() * 256);
            var bgColor = "rgb(" + x + "," + y + "," + z + ")";
            return bgColor
        }
        bgColorClass.style.backgroundColor = random_bg_color()
    })

}
