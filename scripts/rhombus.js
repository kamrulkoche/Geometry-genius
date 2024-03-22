function calculateRhombusArea() {
    // console.log("length");
    // get length of the parallelogram
    const lengthInput = document.getElementById("rhombus-length");
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);
    //console.log(length);

    // get width of the parallelogram
    const widthInput = document.getElementById("rhombus-width")
    const widthText = widthInput.value;
    const width = parseFloat(widthText)
    //console.log(width);

    //calculate parallelogram area
    const area = 0.5 * length * width;
    //console.log('area of the rhombus: ', area);

    //display parallelogram area
    const parallelogramAreaSpan = document.getElementById('rhombus-area');
    parallelogramAreaSpan.innerText = area;

}