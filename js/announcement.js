if(localStorage.getItem('announcement') === 'hidden'){

} else {
    const navHeight = document.querySelector('nav').offsetHeight;
    document.querySelector('.announcement').computedStyleMap.top = `${navHeight}px` ;
}

const announcement = document.querySelector('.announcement');

function hideAnnouncement() {
    announcement.computedStyleMap.top = '0px' ;
    localStorage.setItem('announcement', 'hidden');
  
}