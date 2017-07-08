//helper

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

//render

function renderWord(word) {
  var playButton;
  if(word.has_audio) {
    playButton = '<button class="result-play-button" data-url="'+word.us_audio+'">+</button>';
  }
  else {
    playButton = '<span class="result-no-play">暂无发音</span>';
  }
  return '<div class="result-item"><span class="result-word">'+word.word+'</span><span class="result-pron">'+JSON.parse('"'+word.us_pron+'"')+'</span>'+playButton+'</div>';
}

//action

function play(url) {
  var audio = $('#audio');
  audio.attr('src', url);
  audio.get(0).play();
}

function search(pattern) {
  $.get('https://api.nestattacked.com/regdict/v1/words?pattern=' + pattern, function(result){
    var wordsHtml = JSON.parse(result).map(renderWord).join('');
    $('#results').html(wordsHtml);
  });
}

//initialize

var debouncedSearch = debounce(200, search);

$('#search-input').keyup(function(){
  debouncedSearch($(this).val());
});

$('#results').on('click', '.play-button', function(){
  play($(this).attr('data-url'));
});
