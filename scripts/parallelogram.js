function calculateParallelogramArea() {
    // console.log("length");
    // get length of the parallelogram
    const lengthInput = document.getElementById("parallelogram-length");
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);
    console.log(length);

    // get width of the parallelogram
    const widthInput = document.getElementById("parallelogram-width")
    const widthText = widthInput.value;
    const width = parseFloat(widthText)
    console.log(width);

    //calculate parallelogram area
    const area = length * width;
    console.log('area of the parallelogram: ', area);

    //display parallelogram area
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = area;

}