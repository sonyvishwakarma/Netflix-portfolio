function slide(direction){
    // actual row containing movie cards 
    const row = document.querySelector('#movieRow');

    // how far you want to scroll
    const totalscrollWidth = row.scrollWidth - row.clientWidth;

    const scrollAmount = totalscrollWidth / 2;
    if(direction === 'right'){
        row.scrollBy({
            left:scrollAmount,
            behavior:'smooth'
        });
    }
     else if(direction==='left'){
        // scroll to left
        row.scrollBy({
            left:-scrollAmount,
            behavior:'smooth'
        });
     }
}
