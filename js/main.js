tooltips( channelArrayObj );
function tooltips( channelArrayObj ){
var blocks = document.querySelectorAll(".tv-block"),
    j;
  for (j = 0; j < channelArrayObj.length; j++) {
    var div = document.createElement("div");
    div.setAttribute("class", channelArrayObj[j].className+" modal");
    div.innerHTML = '<div class="tooltips">' +
                        '<div class="tooltips-img">'+channelArrayObj[j].img+'</div>' +
                        '<div class="tooltips-title">'+channelArrayObj[j].title+'</div>' +
                        '<div class="tooltips-caption">'+channelArrayObj[j].caption+'</div>'+
                        '<div class="tooltips-body">'+channelArrayObj[j].body+'</div>' +
                        '<button class="tooltips-watch">Хочу посмотреть</button>' +
                        '<button class="tooltips-reminder">смс напоминание</button>'+
                     '</div>';
    div.setAttribute("style", "display:none");
    blocks[j].appendChild(div);
  }
}

showHideTooltips( document.querySelectorAll(".tv-title") );
function isInside(node, target) {
  for (; node !== null; node = node.parentNode)
    if (node == target) return true;
}
function showHideTooltips(spans){
  [].forEach.call(spans, function(span){
    var timeout;
    span.addEventListener("mouseover", function(event) {
        if (!isInside(event.relatedTarget, span)){
          clearTimeout(timeout);
          timeout = setTimeout(function() {
            span.nextElementSibling.style.display = "block";
          }, 700);
        }
    });
    span.addEventListener("mouseout", function(event) {
        if (!isInside(event.relatedTarget, span)){
          clearTimeout(timeout);
          timeout = setTimeout(function() {
            span.nextElementSibling.style.display = "none";
          }, 700);
        }
    });
  });
}

showHideModal( document.querySelectorAll(".modal") );
function showHideModal(divs){
  [].forEach.call(divs, function(div){
    var timeout;
    div.addEventListener("mouseover", function(event) {
        if (!isInside(event.relatedTarget, div)){
          clearTimeout(timeout);
          timeout = setTimeout(function() {
            div.style.display = "block";
            div.style.cursor = "pointer";
          }, 700);
        }
    });
    div.addEventListener("mouseout", function(event) {
        if (!isInside(event.relatedTarget, div)){
          clearTimeout(timeout);
          timeout = setTimeout(function() {
            div.style.display = "none";
          }, 700);
        }
    });
  });
}

dropDownMenu( document.querySelector('.dropdown') );
function dropDownMenu( ul ) {
    var menu = ul.children;
    [].forEach.call(menu, function( li ) {
        li.addEventListener("click", function(e){
            e = e || event;
            if(e.type === 'click'){
              ul.insertBefore(li, menu[0]);
            }
        });
    });
}

wantToLook( document.querySelector('.look') );
function wantToLook( div ){
    var input = document.querySelector('.btn-look'),
        i = document.createElement('i');

    input.addEventListener("click", function(e) {
        e = e || event;
        div.removeChild(div.children[0]);
        i.setAttribute("class","fa fa-bookmark");
        i.setAttribute("aria-hidden","true");
        div.insertBefore(i, input);
        e.target.style.background = 'yellow';
        e.target.style.border = '#000';
    });
}

showColorBtn();
function showColorBtn() {
  var input;
    input = document.querySelectorAll('.checked');

    [].forEach.call(input, function(elem){
      elem.addEventListener("click", function(e){
          e = e || event;
          if( elem.checked ){
            e.target.parentNode.style.background = '#FFEBA0';
            e.target.previousElementSibling.style.background = elem.style.background;
            sortTVProgramm( e.target, e.target.style.background );
          }
          else {
            e.target.parentNode.style.background = '';
            e.target.previousElementSibling.style.background = '';
            sortTVProgramm( e.target );
          }
      });
    });
}

function sortTVProgramm( input, background ) {
  'use strict';
  var i, j, divClassList, time, title,
      blocksChannells = document.querySelectorAll(".tv-block"),
      inputAllArr = document.querySelectorAll('.checked');

  for(i = 0; i < blocksChannells.length; i++) {
    divClassList = blocksChannells[i].lastChild.classList[0];
    time = blocksChannells[i].children[0]; //tv-time
    title = blocksChannells[i].children[2]; //tv-title

    if( input.checked ){
      if( ~input.classList[0].indexOf(divClassList) ){
        time.style.background = background;
        time.style.color = '#333';
        title.style.color = '#333';
      }
      else if( time.style.background === '' ){
        time.style.color = '#bfbfbf';
        title.style.color = '#bfbfbf';
      }
    }
    else {
      if( ~input.classList[0].indexOf(divClassList) ){
        time.style.background = '';
        time.style.color = '#bfbfbf';
        title.style.color = '#bfbfbf';
      }
      clearColor(inputAllArr, blocksChannells);
    }
  }
}

function clearColor(inputAllArr, blocksChannells) {
  var time, title, i, j, inputOff= [];
  for(j = 0; j < inputAllArr.length; j++) {
    if( !inputAllArr[j].checked ){
      inputOff.push( inputAllArr[j] );
    }
  }
  if( inputOff.length === 4 ){
    for(i = 0; i < blocksChannells.length; i++) {
      time = blocksChannells[i].children[0];
      title = blocksChannells[i].children[2];
      time.style.color = '#333';
      title.style.color = '#333';
    }
  }
}
