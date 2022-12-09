const btn = document.querySelector('.j-btn-test');

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;


const windowInnerWidthScroll = window.innerWidth;
const windowInnerHeightScroll = window.innerHeight;


const windowInnerWidth = document.documentElement.clientWidth;
const windowInnerHeight = document.documentElement.clientHeight;


const pageWidth = document.documentElement.scrollWidth;
const pageHeight = document.documentElement.scrollHeight;



btn.addEventListener('click', () => {

    alert(`Screen size is: ${screenWidth}px x ${screenHeight}px. 
    The browsers size with scroll bar is: ${windowInnerWidthScroll}px x ${windowInnerHeightScroll}px.
    The browsers size without scroll bar is: ${windowInnerWidth}px x ${windowInnerHeight}px.
    The size of web page is: ${pageWidth}px x ${pageHeight}px.`);

});
