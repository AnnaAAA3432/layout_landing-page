var e=document.querySelector(".burgerIcon"),t=document.querySelector(".burgerMenu");e.addEventListener("click",function(){t.classList.toggle("open"),e.classList.toggle("close")}),document.querySelector(".burgerMenuBody").addEventListener("click",function(o){o.preventDefault();var c=o.target;if("A"===c.nodeName){t.classList.toggle("open"),e.classList.toggle("close");var n=c.dataset.to,r=document.getElementById(n);r&&r.scrollIntoView({behavior:"smooth"})}});//# sourceMappingURL=index.19970c3f.js.map

//# sourceMappingURL=index.19970c3f.js.map
