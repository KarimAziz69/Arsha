// loading screen
addEventListener('load', ()=>{
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.classList.add('d-none');
})
// loading screen








// navBar scroll
const navBar = document.querySelector('.navbar');
addEventListener('load', ()=>{
    navBarAppear()
})
addEventListener('scroll', navBarAppear=()=>{
    if(scrollY >= 100) {
        navBar.style.background="rgba(40, 58, 90, 0.9)";
    } else {
        navBar.style.background="";
    };
});

// navBar scroll



// expanded titles
const cardCol = document.querySelectorAll('.cardCol');
console.log(cardCol);
const cardArr = Array(...cardCol);
console.log(cardArr);


cardArr.forEach((card)=>{
    card.addEventListener('click', ()=>{
        card.classList.toggle('active');
    });
});
// expanded titles



// loading logic
const progressSection = document.querySelector('.rightSide04');
const progressBar = document.querySelectorAll('.progressBar');
const progressSectionScroll = 1600
console.log(progressSection);
addEventListener('load', ()=>{
    if(scrollY>=progressSectionScroll){
        loadingFun();
    };
});
addEventListener('scroll', loadingFun=()=>{
    if(window.scrollY>=progressSectionScroll){
        progressBar.forEach(function progressBars(progress) {
            const goal = progress.dataset.level;
            // console.log(goal);
            progress.style.width=goal;
        });
    };
});
// loading logic


// portfolio
let items = document.querySelectorAll('.imgHolder img');
console.log(items);
items.forEach((img=>{
    img.classList.add('img-fluid');
    console.log(img.classList.contains('img-fluid'))
}))
// portfolio