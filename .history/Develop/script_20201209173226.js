
 $(document).ready(function() {
    // currentDay
    $("#currentDay").text(dayjs().format('dddd, MMM D'))
    console.log('current hour',dayjs().format('h'))

    function time (){
        var dayjshour = dayjs().format("h")
        if (dayjshour < 5 ) {
        
        }

        $('textarea').each(function(){

            if(dayjshour === $(this).attr('id')){
                //cchange class to current
                $(this).add
            }

  
        }) 


    }

    time();

 })