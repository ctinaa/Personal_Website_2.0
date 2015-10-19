 $(document).ready(function () {
        $("#name").keypress(
            function (event) {
                if (event.which == 13) {
                        var usersName = document.getElementById("name");
        				var displayBox = document.getElementById("displayName");
     				    usersName.style.display = "none";
         			  displayBox.innerHTML = usersName.value + ".";
        			  displayBox.style.display = "inline";

                        

                        var response = document.getElementById("respond");
                        $("#respond").hide().fadeIn(3000);
                        response.innerHTML = "I'm Christina.";
                        String.fromCharCode(<8>);

                        // $("span").hide().fadeIn(3000);
                        // response.innerHTML = "Hi, I'm Christina.";
                          $("element").hide();
                    }
               }
            );
        /* Type.js*/

      });

