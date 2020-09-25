const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');




tabItems.forEach( (tabItem)=>{
   tabItem.addEventListener('click',(e)=>{

        // Remove Border From All Tab Using Function removeBorder
        removeBorder();
        removeShow();

        // Add Border to current tab
        tabItem.classList.add('tab-border');
        
        const tabContentItem = document.querySelector(`#${tabItem.id}-content`);

        tabContentItem.classList.add('show');
       
   })
})


// function hideTabContent(){
//     tabContentItems.forEach( (item)=>{
//         console.log(item);
//         item.classList.add('tab-content-hide')
//     })
// }

function removeShow (){
    tabContentItems.forEach(item => item.classList.remove('show'));
}


function removeBorder(){
    tabItems.forEach((tabItem)=>{
        tabItem.classList.remove('tab-border');
    })
}
