var value = localStorage.getItem('value')


function GoogleCallback (func, data) {
    window[func](data);
   
}

$(function() {

    $('#search').val(value)
    $.getJSON('http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q=' + value + '&callback=GoogleCallback&context=?',
function(data){
    var ul = document.createElement("ul");
    $.each(data.results, function(i, val){
            var li = document.createElement("li");
            li.innerHTML = '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+"</a> - "+"<p>" +val.content+"</p";                            
            ul.appendChild(li);
    });
    $('.wrapper').append(ul);
        
});   
    
   
$('.btn').on('click', function() {

    setValue()
});

$('window').keydown(function(e) {

    e.which = 13;

    setValue()
 
    
})
    
});



