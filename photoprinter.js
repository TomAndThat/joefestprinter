// lOAD IMAGES
var token = 'xxx',
    hashtag='joefest',
    num_photos = 20,
    identifier = 0;


$.ajax({
	url: 'https://api.instagram.com/v1/tags/' + hashtag + '/media/recent',
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: token, count: num_photos},
	success: function(data){
		console.log(data);
		for(x in data.data){
      identifier++;
			$('div').append('<img id="image' + identifier + '" src="'+data.data[x].images.standard_resolution.url+'"></img>');
		}
	},
	error: function(data){
		console.log(data);
	}
});
