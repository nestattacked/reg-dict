//==================== util =====================//

function debounce(idle, action) {
  var last;
  return function(){
    var ctx = this, args = arguments;
    clearTimeout(last);
    last = setTimeout(function(){
      action.apply(ctx, args);
    }, idle);
  };
};

function decodeUnicode(str) {
  return str.replace(/\\u[\dA-Fa-f]{4}/g, function(match){
    return String.fromCharCode(parseInt(match.replace(/\\u/, ''), 16));
  });
}

//==================== render =====================//

function renderSearchResult(result){
  var wordsHtml = JSON.parse(result).map(renderWord).join('');
  if(wordsHtml === '')
    wordsHtml = '<p class="no-result">抱歉，没有找到相关的内容</p>';
  return wordsHtml;
}

function renderWord(word) {
  var playButton;
  if(word.has_audio) {
    playButton = '<button class="result-play-button" data-url="' + word.us_audio + '"><img src="./static/img/play.png"></button>';
  }
  else {
    playButton = '<span class="result-no-play">暂无发音</span>';
  }
  var wordLiteral = '<span class="result-word">' + word.word + '</span>';
  var wordPron = '<span class="result-pron">/ ' + decodeUnicode(word.us_pron) + ' /</span>';
  var wordDefinition = '<span class="result-definition">' + decodeUnicode(word.definition) + '</span>';
  return '<div class="result-item">' + wordLiteral + wordPron + playButton + wordDefinition + '</div>';
}

//==================== action =====================//

function play(url) {
  var audio = $('#audio');
  audio.attr('src', url);
  audio.get(0).play();
}

function search(pattern) {
  $.get('https://api.nestattacked.com/regdict/v1/words?pattern=' + pattern, function(result){
    var wordsHtml = renderSearchResult(result);
    $('#results').html(wordsHtml);
    $('#examples').hide();
    $('#results').show();
  });
}

function showHelp(){
  $('#results').hide();
  $('#examples').show();
}

//==================== initilize =====================//

var debouncedSearch = debounce(200, search);

$('#search-input').keyup(function(){
  debouncedSearch($(this).val());
});

$('#results').on('click', '.result-play-button', function(){
  play($(this).attr('data-url'));
});

$('#help-button').click(showHelp);
