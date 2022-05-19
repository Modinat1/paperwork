const url = 'https://newsapi.org/v2/top-headlines?country=ng&category=business&apiKey=e52bbd442160445d83a53113a8324171';

// function fetching news from an api
function fetchNews(){
    fetch(url).then(response => response.json()).then(newsData => renderNews(newsData.articles));
}

// function rendering news to the DOM
function renderNews(newsData){
    // console.log(newsData);
    newsData.forEach((news) =>{
        console.log(news);
        const resultDiv = document.getElementById('result');
        const div = document.createElement('div');
        div.className = 'news';
        div.innerHTML = `<a href='${news.url}'><img class='news-image' src= ${news.urlToImage}/></a>
        <h4><b> Title </b>: ${news.title}</h4>
        <br>
        <h4><b> Description </b>: ${news.description}</h4>
        <br>
        <h4><b> Published At </b>: ${news.publishedAt}</h4>
        `
        resultDiv.appendChild(div)
    })
}
fetchNews();