//constructed a string to hold values to be entered
let string="";
//selected all buttons that are in the buttons class
let buttons = document.querySelectorAll('.Button');
//to make an array of string that the user is putting in
//and then adding eventListners to it
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (event)=>{
        //if user clicks "=" then it will evaluate the
        //given string to produce the results
        if(event.target.innerHTML == '='){
            string = eval(string)
            document.querySelector('input').value = string;
        }
        //if the user clicks"CLEAR" then it will 
        //clear the inputs given
        else if(event.target.innerHTML == 'CLEAR'){
            string = ""
            document.querySelector('input').value = string;
        }
        else{
        console.log(event.target)
        string = string + event.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})