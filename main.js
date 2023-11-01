document.addEventListener('click', e =>{
    if (e.target.dataset.link == null) return;
    else{
        let votoStreaming = e.target.dataset.link
        window.location.href= `${votoStreaming}.html`;   
    }
 }
 )