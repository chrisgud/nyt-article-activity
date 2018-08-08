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