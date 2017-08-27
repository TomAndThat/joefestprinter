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
          $('div').append('<img src="'+data.data[x].images.standard_resolution.url+'"></img>');
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
          previewContext.drawImage(outputImg, 20, 20, 1200, 1200);
      });
  },
  error: function(data){
  console.log(data);
  }
  });
