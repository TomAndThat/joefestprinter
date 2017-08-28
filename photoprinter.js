var hashtag='joefest',
    num_photos = 100;

$.ajax({
    url: 'https://api.instagram.com/v1/tags/' + hashtag + '/media/recent',
    dataType: 'jsonp',
    type: 'GET',
    data: {access_token: token, count: num_photos},
    success: function(data){
        console.log(data);
        for(x in data.data){
            $('#image_feed').append('<img src="'+data.data[x].images.standard_resolution.url+'"></img>');
        }

        // Select and Output Image
        $("div > img").on("click", function(){
            var outputSrc,
                outputImg,
                previewImg = document.getElementById("previewImg"),
                previewContext = previewImg.getContext("2d");

            outputSrc = $(this).attr('src');
            console.log("image source: " + outputSrc);

            outputImg = new Image();
            outputImg.src = outputSrc;
            previewContext.drawImage(outputImg, 40, 40, 1160, 1160);

            // Print Image
            outputImg.onload = function(){
                console.log("Ready to print");
                window.print();
            }
        });
    },
    error: function(data){
    console.log(data);
    }
});
