<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="./css/bootstrap.min.css">

    <link rel="stylesheet" href="css/square_poster.css">

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Poster Generator</title>
</head>

<body>

    <section>
        <div id="poster" style="width: 100vw; height: 100vw;">
            <div style="height: 89.02397%;">
                <img src="./images/house.jpg" alt="House" id="image">
            </div>
            <img src="./images/header.svg" alt="Header" id="header">
            <img src="./images/yiniyuk_logo.svg" alt="Logo" id="logo">
            <div id="house-type">
                
            </div>
            <div id="house-location">
                
            </div>
            <div id="dollar-sign">
                $
            </div>
            <div id="house-cost">
                
            </div>
            <div id="footer">
                <img src="./images/footer.svg" alt="Footer">
                <p id="tel">
                    
                </p>
            </div>
        </div>
        
        <textarea id="house-type-input" placeholder="Enter House Type Here" style="font-family: 'Krasa Medium';"></textarea>
        <textarea id="house-location-input" placeholder="Enter House Location Here" style="font-family: 'Krasa Regular';"></textarea>
        <textarea id="house-cost-input" placeholder="Enter House Cost Here"></textarea>
        <textarea id="tel-input" placeholder="Enter Tel Here"></textarea>
        <button type="button" class="button" onclick="downloadposter()" style="margin-bottom: 17px;">Download</button>

        <div style="position: relative;">
            <div id="poster1">
                <div style="height: 89.02397%;">
                    <img src="./images/house.jpg" alt="House" id="image1">
                </div>
                <img src="./images/header.svg" alt="Header" id="header1">
                <img src="./images/yiniyuk_logo.svg" alt="Logo" id="logo1">
                <div id="house-type1">
                    វីឡាភ្លោះ
                </div>
                <div id="house-location1">
                    បុរីជីបម៉ុង ហ្គ្រេនភ្នំពេញ
                </div>
                <div id="dollar-sign1">
                    $
                </div>
                <div id="house-cost1">
                    715,000
                </div>
                <div id="footer1">
                    <img src="./images/footer.svg" alt="Footer">
                    <p id="tel1">
                        010 530 990
                        011 530 990
                    </p>
                </div>
            </div>
            
            <div style="background-color: white; position: absolute; height: 100%; width: 100%; top: 0; left: 0;"></div>
        </div>

    </section>


    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script type="text/javascript" src="./js/bootstrap.min.js"></script>

    <script src="js/square_poster.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.js"></script>

</body>
</html>