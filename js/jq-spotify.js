$(document).ready(function() {
  console.log('ding dong!');


  var submitButton = $('#submit-button');
  submitButton.on('click', getMusicData);
  var results = $('#results')


  function getMusicData(event){
    event.preventDefault();
    var keywordInput = $('#keyword').val();
    var searchTypeSelect = $('#search-type').val();
    $.get('https://api.spotify.com/v1/search?q=' + keywordInput + '&type=' + searchTypeSelect, function(response){
        results.empty();
       var added = searchTypeSelect + 's';
       console.log(added)

       console.log(response)

      $.each(response[added].items, function(index, added){

        console.log('response')
        var result = $("<div id = 'results'>" + added.name + "</div>")

        results.append(result);

      })
       
    })
  }

});