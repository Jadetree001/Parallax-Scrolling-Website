let text = document.getElementById('text');
/*let treeleft1 = document.getElementById('tree-left1');
let treeleft2 = document.getElementById('tree-left2');
let treeright1 = document.getElementById('tree-right1');
let treeright2 = document.getElementById('tree-right2');*/

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    /*treeleft1.style.right = value * -1.5 + 'px';
    treeleft2.style.left = value * 1.5 + 'px';
    treeright1.style.right = value * 0.5 + 'px';
    treeright2.style.right = value * 0.5 + 'px';*/
});


