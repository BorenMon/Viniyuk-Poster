document.getElementById("tel-input").addEventListener("keyup", function(){
    const queryText = document.getElementById("tel");
    const queryText1 = document.getElementById("tel1");
    
    if(this.value !== ""){
        queryText.innerHTML = this.value;
        queryText1.innerHTML = this.value;
    }
    else{
        queryText.innerHTML = "";
        queryText1.innerHTML = "";
    }
});

document.getElementById("house-type-input").addEventListener("keyup", function(){
    const queryText = document.getElementById("house-type");
    const queryText1 = document.getElementById("house-type1");
    
    if(this.value !== ""){
        queryText.innerHTML = this.value;
        queryText1.innerHTML = this.value;
    }
    else{
        queryText.innerHTML = "";
        queryText1.innerHTML = "";
    }
});

document.getElementById("house-location-input").addEventListener("keyup", function(){
    const queryText = document.getElementById("house-location");
    const queryText1 = document.getElementById("house-location1");
    
    if(this.value !== ""){
        queryText.innerHTML = this.value;
        queryText1.innerHTML = this.value;
    }
    else{
        queryText.innerHTML = "";
        queryText1.innerHTML = "";
    }
});

document.getElementById("house-cost-input").addEventListener("keyup", function(){
    const queryText = document.getElementById("house-cost");
    const queryText1 = document.getElementById("house-cost1");
    
    if(this.value !== ""){
        queryText.innerHTML = this.value;
        queryText1.innerHTML = this.value;
    }
    else{
        queryText.innerHTML = "";
        queryText1.innerHTML = "";
    }
});

function downloadposter() {

    var node = document.getElementById('poster1');

    domtoimage.toJpeg(node, { quality: 1 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'poster.jpeg';
        link.href = dataUrl;
        link.click();
    });

}

const inpFile = document.getElementById("inputGroupFile01");
const previewImage1 = document.getElementById("image1");
const previewImage2 = document.getElementById("image2");

inpFile.addEventListener("change", function () {
    const file = this.files[0];

    if(file){
        const reader = new FileReader();

        reader.addEventListener("load", function () {
            previewImage1.setAttribute("src", this.result);
            previewImage2.setAttribute("src", this.result);
        });

        reader.readAsDataURL(file);
    }
    else{
        previewImage1.setAttribute("src", "./images/house.jpg");
        previewImage2.setAttribute("src", "./images/house.jpg");
    }
});

const btnDownload = document.getElementById("btnDownload");
const myCanvas = document.getElementById("poster1");

btnDownload.addEventListener("click", function(){
if(window.navigator.msSaveBlob){
    window.navigator.msSaveBlob(myCanvas.msToBlob(), "canvas-umage.png");
}
else{
    const a = document.createElement("a");

    document.body.appendChild(a);
    a.href = myCanvas.toDataURL("image/jpeg", 0.1);
    a.download = "canvas-image.jpg";
    a.click();
    document.body.removeChild(a);
}
});