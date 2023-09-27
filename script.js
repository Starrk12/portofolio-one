var testArray = document.querySelectorAll(".languages");
    var totImg = testArray.length;

    var contIterazioni = 0;
    var test = testArray[contIterazioni];
    var bounding = test.getBoundingClientRect();

     var imgsWidths = []
     window.onload = () => {
       for(i = 0; i < testArray.length; i++) {
           imgsWidths[i] = testArray[i].width
       }
    }
     
   function galleryScroll() {
       test = testArray[contIterazioni];
       bounding = test.getBoundingClientRect();
       if (bounding.left == 0) {
        if (test.width > 0) {
          test.width = test.width - 2;
        } else {
          contIterazioni = contIterazioni + 1;
          if (contIterazioni >= totImg - 3){
            for(i = 0; i < testArray.length; i++) {
              testArray[i].width = imgsWidths[i]
            }
            contIterazioni = 0;
          }
        } 
      }
     window.requestAnimationFrame(galleryScroll)
     }

    window.requestAnimationFrame(galleryScroll);