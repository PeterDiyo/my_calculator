(function(){

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function(button){
        if (button !== equal) {  // exclude equal button
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        });
       }
    });


    
  equal.addEventListener('click', function()
  {
      if (screen.value === "") {
        screen.value = "Please enter";
      } else {
        try {
          // Use Function constructor for safer parsing
          const result = new Function('return ' + screen.value)();
          screen.value = result;
        } catch (error) {
          screen.value = "Error"; // Handle parsing errors
        }
      }
    });
  
    clear.addEventListener('click', function() {
      screen.value = "";
    });
  })();
  