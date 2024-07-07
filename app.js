const API_URL = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftechcrunch.com%2Ffeed%2F";


const getnews = async () =>{
    let response = await fetch(API_URL);
    let data = await response.json();
    delete data.items[9]; // delete opration on item-9
    console.log(data.items);
    
    const newsList = document.getElementById("news-list");
    data.items.forEach(item => {
        const li = document.createElement('li');
        const litle = document.createElement('h2');
        const news = document.createElement('div');
        const content = document.createElement('p');
        const read = document.createElement('a');
        const author = document.createElement('p');

        litle.textContent = item.title;
        read.textContent = 'read more';
        read.href = item.link;
        read.target ='_blank';
        author.textContent = ` ${item.author} : ${item.pubDate}`;

        li.appendChild(litle);
        li.appendChild(news);
        news.appendChild(author).style="font-size:12px; padding:2px";
        news.appendChild(content);
        content.appendChild(document.createTextNode(item.content));
        content.appendChild(read);

        newsList.appendChild(li);
    });
    
}
getnews();

function linkedin(){
    window.open(URL='https://www.linkedin.com/in/synoize')
}

function github(){
    window.open(URL='https://www.github.com/synoize/')
}

function twitter(){
    window.open(URL='https://www.twitter.com/synoize/')
}

function instagram(){
    window.open(URL='https://www.instagram.com/synoize/')
}

function youtube(){
    window.open(URL='https://www.youtube.com/@synoize/')
}