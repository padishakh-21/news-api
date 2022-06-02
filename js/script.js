let elForm = $(".news-form");
let elInput = $(".news-form-input", elForm);
let elSelect = $(".news-form-select", elForm);
let elListNews = $(".js-news-list");
let elTemplateNews = $("#news-item-template").content;

let elMovieInfoModal = $(".movie-info-modal");



let renderNews = function() {
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2022-05-02&sortBy=publishedAt&apiKey=40351ed0f84c4aecb6bfbe7770692140")
        .then((response) => { return response.json() })
        .then((data) => {


            let fragment = document.createDocumentFragment();
            data.articles.forEach((news) => {
                let elTemplateNewsClone = elTemplateNews.cloneNode(true);

                $(".card-name", elTemplateNewsClone).textContent = news.source.name;
                $(".card-title", elTemplateNewsClone).textContent = news.title;
                $(".card-description", elTemplateNewsClone).textContent = news.description;
                $(".card-content", elTemplateNewsClone).textContent = news.content;
                $(".card-img", elTemplateNewsClone).src = news.urlToImage;
                $(".card-url", elTemplateNewsClone).href = news.url;

                fragment.append(elTemplateNewsClone);

            })
            elListNews.append(fragment);
        })


}

renderNews()



// let updateMovieModalContent = function(movie) {
//     $(".movie-info-modal__title", elMovieInfoModal).textContent = movie.title;
//     $(".modal-body", elMovieInfoModal).textContent = movie.summary;
// }




// https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=0afdb1d1b7ed4974be58124c47d306a4