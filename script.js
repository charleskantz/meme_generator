window.onload = function(){

    // Form JS

    var formSubmit = document.querySelector("input[type=submit]") // prevent submit from refreshing page
    document.querySelector('form').addEventListener("submit", function(e){
        e.preventDefault();
    });

    formSubmit.onclick = function(){ // pull submitted data and send to meme generation
        var formImgLink = document.getElementById('url');
        var formTextTop = document.querySelector("input[name=form-text-top]");
        var formTextBottom = document.querySelector("input[name=form-text-bottom]");
        var topTxt = formTextTop.value;
        var botTxt = formTextBottom.value;
        var imgLink = formImgLink.value;
        makeMeme(imgLink, topTxt, botTxt);
    }

    // Meme generation

    function makeMeme(img, top, bot){
        var memeBox = document.createElement('div'); // create divs
        var memeTop = document.createElement('div');
        var memeBot = document.createElement('div');
        memeBox.className = "meme-submitted";
        memeTop.className = 'meme-text-top';
        memeBot.className = "meme-text-bottom";

        memeBox.style.backgroundImage = 'url(' + img + ')' // set img source on parent div

        var pTop = document.createElement('p'); // set top/bottom paragraphs with imported text
        pTop.innerText = top;
        var pBot = document.createElement('p');
        pBot.innerText = bot;

        var memeClose = document.createElement('button'); // close button
        memeClose.className = "meme-close";
        memeClose.innerText = 'X';

        var memeCloseDiv = document.createElement('div'); // parent div for close button for mouseout events
        memeCloseDiv.className = "meme-close-div";

        memeTop.appendChild(pTop); // append all elements to parent div
        memeBot.appendChild(pBot);
        memeCloseDiv.appendChild(memeClose);
        memeBox.appendChild(memeTop);
        memeBox.appendChild(memeBot);
        memeBox.appendChild(memeCloseDiv);

        var memeList = document.querySelector('.meme-list'); // append new meme to list in 1st position
        if(!memeList.hasChildNodes()){
            memeList.appendChild(memeBox);
            memeBox.classList.add("first-meme");
        } else {
            var firstMeme = document.querySelector('.first-meme')
            memeList.insertBefore(memeBox, firstMeme);
            firstMeme.classList.remove("first-meme");
            memeBox.classList.add("first-meme");
        }

    }

    // Delete meme


    var memeList = document.querySelector('.meme-list'); // EventListener on parent div ensuring all clicks are on the close button before deleting
    memeList.addEventListener("click", function(e){
        if(e.target.className === "meme-close"){
            e.target.parentElement.parentElement.style.display = "none";
        }
    });

    memeList.addEventListener("mouseover", function(e){ // makes close button appear on mouseover
        if(e.target.className === "meme-close-div"){
            e.target.firstChild.style.display = "inline";
        }
        if(e.target.className === "meme-close"){ // makes sure the close button remains visible on mouseout of 'meme-close-div'
            e.target.style.display = "inline";
        }
    });

    memeList.addEventListener("mouseout", function(e){ // makes close button disappear on mouseout
        if(e.target.className === "meme-close-div"){

            e.target.firstChild.style.display = "none";
        }
    });












































}