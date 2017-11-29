$('body').scrollspy({
			target: '#collapseEx2'
		});

  $(document).ready(function(){
      $('.carousel').carousel();
    });

    function changeImage() {

        if (document.getElementById("profilepic").src == "https://res.cloudinary.com/hveobej5c/image/upload/c_fill,h_300,w_300/v1510074717/nqu8whztp4pdazsbod7x.jpg") 
        {
            document.getElementById("profilepic").src = "https://i.imgur.com/toZLFQ4.png";
        }
        else 
        {
            document.getElementById("profilepic").src = "https://res.cloudinary.com/hveobej5c/image/upload/c_fill,h_300,w_300/v1510074717/nqu8whztp4pdazsbod7x.jpg";
        }
    }