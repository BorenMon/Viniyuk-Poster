

function downloadposter() {

    domtoimage.toJpeg(document.getElementById('poster1'), { quality: 1 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'banner.jpeg';
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
});