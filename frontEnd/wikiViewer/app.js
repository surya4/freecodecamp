$(document).ready(function() {
    $('#query').keyup(function(e) {
        if (e.keyCode == 13) {
            searchJson();
        }
    });
});

function searchJson() {
    console.log("step 2");
    search = $('#query').val();
    $.ajax({
        url: "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrsearch=" + search + "&gsrlimit=25&prop=extracts&exintro&explaintext&exsentences=1&exlimit=max",
        dataType: 'jsonp',
        type: 'POST',
        headers: {
            'Api-User-Agent': 'Example/1.0'
        },
        success: function(data) {
            if (data.query !== undefined) {
                $.each(data.query.pages, function(index, value) {
                  // console.log(key);
                  $('.row').css("margin-top","3%");
                  //  $('#article_row').css("border",".5px solid #ccc");
                  console.log(value);
                  if (value.extract !== undefined) {
                    $('#article_row').append(
              "<a href='" + "https://en.wikipedia.org/?curid="+value.pageid + "' target= '_blank '><div id='new-row' class='rows'><h3>" + value.title + "</h3><p = class='extract'>" + value.extract + "</p></div>");
                  }


                });
            } else {
              $('#article_row').append(
                "<div id='no-value'><p>No data with this key word.Try something different.</p></div>");
                // console.log("No data with this key word");
            }
        }
    });
}
