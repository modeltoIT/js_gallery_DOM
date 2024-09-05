var e=document.querySelector(".gallery__list"),t=document.getElementById("largeImg"),a="";e.addEventListener("click",function(e){var r=e.target;e.preventDefault(),"img"===r.tagName.toLowerCase()&&(a=r.closest("a").href,t.src=a),"a"===r.tagName.toLowerCase()&&(a=r.href,t.src=a)});
//# sourceMappingURL=index.cc9b7e37.js.map
