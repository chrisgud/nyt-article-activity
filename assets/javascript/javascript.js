// Reference IDs from index.html
// Article Card Body = articleResults
// Submit Button = submitButton
// Clear Form Button = clearButton
// Search term = searchTerm
// Number of Articles = articleNumber
// Start year = startYear
// End year = endYear

$('#submitButton').on('click', (event) => {
  event.preventDefault();

  var searchTerm = $('#searchTerm').val();
  var articleNumber = $('#articleNumber').val();
  var startYear = $('#startYear').val() + "0101";
  var endYear = $('#endYear').val() + "1231";

  console.log(searchTerm);
  console.log(articleNumber);
  console.log(startYear);
  console.log(endYear);
});

$('#clearButton').on('click', (event) => {
  event.preventDefault();

  $('#searchTerm').val('');
  $('#articleNumber').val('');
  $('#startYear').val('');
  $('#endYear').val('');
});

// Built by LucyBot. www.lucybot.com
// example url for all of the fields we will need to use in our queries
// as far as I can tell, we will need to implement number of records in our JS code
// as limiting the number of records doesn't seem to be a feature in the API
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "4a78c65b3e1e41e58d2f1cafcdd1f4f2",
  'q': "term",
  'begin_date': "18900101",
  'end_date': "20181231"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
    console.log(result.docs[0].web_url);
//   console.log(result);
}).fail(function(err) {
  throw err;
});