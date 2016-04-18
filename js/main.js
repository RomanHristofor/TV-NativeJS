tooltips( channelArrayObj );
function tooltips( channelArrayObj ){
var blocks = document.querySelectorAll(".tv-block"),
    j;
  for (j = 0; j < channelArrayObj.length; j++) {
    var div = document.createElement("div");
    // div.setAttribute("class", channelArrayObj[i].cls);
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
// var spans = document.querySelectorAll(".tv-title");
showHideTooltips( document.querySelectorAll(".tv-title") );
function isInside(node, target) {
  for (; node !== null; node = node.parentNode)
    if (node == target) return true;
}
function showHideTooltips(spans){
  [].forEach.call(spans, function(span, i){
    var timeout;
    span.addEventListener("mouseover", function(event) {
        if (!isInside(event.relatedTarget, span)){
          clearTimeout(timeout);
          timeout = setTimeout(function() {
            span.nextElementSibling.style.display = "block";
          }, 1000);
        }
    });
    span.addEventListener("mouseout", function(event) {
        if (!isInside(event.relatedTarget, span)){
          clearTimeout(timeout);
          timeout = setTimeout(function() {
            span.nextElementSibling.style.display = "none";
          }, 1000);
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

getChecked( document.querySelector('.btn-sort') );
function getChecked( div ) {
  var input, label, i,
    checkInput = [],
    bgArray = ['#0080ce', '#FFC958', 'green', 'red'],
    classLabelArray = document.querySelectorAll('.check-button');
    // classInputArray = document.querySelectorAll('.checked');
// console.log( div );
    // [].forEach.call(classInputArray, function( currentInput ) {
// console.log(currentInput);
      div.addEventListener("click", function(e){
        e = e || event;
        for ( i = 0; i < div.children.length; i++) {
          input = div.children[i].children[1];
    // console.log(  input );
          label = div.children[i].children[0];
          if( input.checked ) {
      // console.log(e.target.checked );
    
            div.children[i].style.background = '#ffeba0';
            classLabelArray[i].style.background = bgArray[i];
            sortTVProgramm( e.target, e.target.style.background );
          }
          else {
            div.children[i].style.background = '';
            classLabelArray[i].style.background = '';
            sortTVProgramm( e.target );
          }
        }
        // console.log(   checkInput.length   );
      });
    // });
}
// sortTVProgramm( document.querySelectorAll(".tv-block") );
function sortTVProgramm( input, background ) {
  'use strict';
  var arrClassListDiv = [], i, divClassList, time,
      blocksChannells = document.querySelectorAll(".tv-block");
  // console.log(input);

  for (i = 0; i < blocksChannells.length; i++) {

    divClassList = blocksChannells[i].lastChild.classList[0];
    time = blocksChannells[i].children[0]; //tv-time

//console.log(  blocksChannells[i].children[2]  ); //tv-title
    if( input.checked ){
      if( ~input.classList[0].indexOf(divClassList) ){

        time.style.background = background;
        time.style.color = '#333';
// console.log(  background   );
        // arrClassListDiv.push( divClassList );
      }
      else if( time.style.background === '' ){
        time.style.color = '#bfbfbf';
      }
    }
    else {
      
      if( ~input.classList[0].indexOf(divClassList) ){
        
        time.style.background = '';
        time.style.color = '#333';
      }

    }
  }
  // console.log(arrClassListDiv);
}