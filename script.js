// Triangle Area Calculate 
function calculateTriangleArea(){
    // get triangleBase value 
    const triangleBase = document.getElementById('triangle-base');//acces input to use id 
    const triangleBaseValue = triangleBase.value;//get the string value 
    const base = parseFloat(triangleBaseValue);// converted to the float
    // console.log(base);

    //get triangleHeight
    const triangleHeight = document.getElementById('triangle-height');//acces input to use id 
    // input ba textArea value set korar jonno 
    const triangleHeightValue = triangleHeight.value;//get the string value 
    const height = parseFloat(triangleHeightValue);// converted to the float
    console.log(height);

    //calculate triangleArea
    const triangleArea = 0.5 * base * height;
    console.log("Area of triangle is", triangleArea);

    // get display triangleArea 
    const triangleAreaSpan =document.getElementById('triangle-area');
    // p, h1, div tag ar moddhe value set korar jonno 
    triangleAreaSpan.innerText = triangleArea;
}

// Ractangle Area Calculate 
function calculateRactangleArea(){
    const ractangeWeight =document.getElementById('ractange-base');
    const ractangeWeightValue = ractangeWeight.value;
    const weight = parseFloat(ractangeWeightValue);
    console.log(weight);

    const ractangeLength = document.getElementById('ractange-length');
    const ractangeLengthValue = ractangeLength.value;
    const height = parseFloat(ractangeLengthValue);
    console.log(height);

    const ractangleArea = weight * height;
    console.log("Area of Ractangle",ractangleArea );

    const ractangleAreaSpan = document.getElementById('ractangle-area');
    ractangleAreaSpan.innerText =ractangleArea;
}

// Parallelogram Area Calculate

function calculateParallelogram(){
    const parallelogramBase = getInputValue('parallelogram-base');
    console.log("base Value",parallelogramBase);

    const parallelogramHeight = getInputValue('parallelogram-height');
    console.log("Height Value",parallelogramHeight);

    const area = parallelogramBase * parallelogramHeight ;
    console.log("Area of Parallelogram of",area);

    // display area call by function 
    areaGetValue('parallelogram-area',area);
}

//Rombus Area Calculate 
function calculateRombusArea(){
    const rumbosD1 = getInputValue('rombus-d1');
    console.log(rumbosD1);

    const rumbosD2 = getInputValue('rombus-d2');
    console.log(rumbosD2);

    const area = 0.5 * rumbosD1 * rumbosD2;
    console.log('Area of Rumbos is ', area);

    areaGetValue('romus-area', area);
}

//Rombus Area Calculate 
function calculatePentagonArea(){
    const peentagonPerimeter = getInputValue("peentagon-perimeter");
    console.log(peentagonPerimeter);

    const peentagonApothem = getInputValue('peentagon-apothem');
    console.log(peentagonApothem);

    const area = 0.5* peentagonPerimeter * peentagonApothem;
    console.log(area);

    areaGetValue('pentagon-area', area);
}

//Ellipse Area Calculate 
function calculateEllipseArea(){
    const ellipseA = getInputValue('ellipse-a');
    console.log(ellipseA);

    const ellipseB = getInputValue('ellipse-b');
    console.log(ellipseB);

    const area = 3.1416 * ellipseA *  ellipseB;
    console.log(area);

    areaGetValue('ellipse--area', area);
}
// set common value to the function 
function getInputValue(inputValue){
    const inputValue1 = document.getElementById(inputValue);
    const inputValueText = inputValue1.value;
    const inputValueParse = parseFloat(inputValueText);
    return inputValueParse
}

// display area 
function areaGetValue(areaValue, area){
    const areaValueGet = document.getElementById(areaValue);
    areaValueGet.innerText = area;
}


