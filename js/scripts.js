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