createMessage( channelArrayObj );

function createMessage( channelArrayObj ){
var blocks = document.querySelectorAll(".tv-block");
  for (var j = 0; j < channelArrayObj.length; j++) {
    (function(i) {
    var div = document.createElement("div");
    // div.setAttribute("class", channelArrayObj[i].cls);
    div.setAttribute("class", channelArrayObj[i].className+" modal");
    div.innerHTML = '<div class="tooltips">\
                        <div class="tooltips-img">'+channelArrayObj[i].img+'</div> \
                        <div class="tooltips-title">'+channelArrayObj[i].title+'</div> \
                        <div class="tooltips-caption">'+channelArrayObj[i].caption+'</div> \
                        <div class="tooltips-body">'+channelArrayObj[i].body+'</div>\
                        <button class="tooltips-watch">Хочу посмотреть</button>\
                        <button class="tooltips-reminder">смс напоминание</button>\
                     </div>';
    div.setAttribute("style", "display:none");
    blocks[i].appendChild(div);
    })(j);
  }
}
var spans = document.querySelectorAll(".tv-title");
function isInside(node, target) {
  for (; node != null; node = node.parentNode)
    if (node == target) return true;
}
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
        e.target.style.color = '#000';
    });
}