$filmes_container = document.querySelector('#page_1');

let myRequest = new XMLHttpRequest();
myRequest.open("GET","https://api.themoviedb.org/3/movie/popular?api_key=221381933449d5d15f7d0b6a6b1f87a1", true)
myRequest.send();
myRequest.onreadystatechange = item => {
    if(myRequest.readyState == 4){
        let _json = Object.values(JSON.parse(myRequest.response))[1]

        function createTweet(tweet){
            return 
        }

        _json.forEach(tweet => {


            let newTweet = document.createElement('div');
            newTweet.setAttribute('class', 'card style_1');
            newTweet.innerHTML = `
                <div class="image">
                <div class="wrapper">
                    <a class="image" href="/movie/${tweet.id}?language=pt-BR"
                    title="Homem-Aranha: Sem Volta Para Casa">
                    <img loading="lazy" class="poster"
                        src="https://www.themoviedb.org/t/p/w220_and_h330_face${tweet.poster_path}"
                        srcset="https://www.themoviedb.org/t/p/w220_and_h330_face${tweet.backdrop_path} 1x, https://www.themoviedb.org/t/p/w220_and_h330_face${tweet.backdrop_path} 2x"
                        alt="">
                    </a>
                </div>
                <div class="options" data-id="634649" data-object-id="5d8e2865221ba60029b568d6"
                    data-media-type="movie" data-role="tooltip">
                    <a class="no_click" href="#">
                    <div class="glyphicons_v2 circle-more white"></div>
                    </a>
                </div>
                </div>
                <div class="content">
                <div class="consensus tight">
                    <div class="outer_ring">
                    <div class="user_score_chart 5d8e2865221ba60029b568d6" data-percent="${tweet.vote_count}"
                        data-track-color="#204529" data-bar-color="#21d07a">
                        <div class="percent"> <span class="icon icon-r${tweet.vote_count}"></span>
                        </div>
                        <canvas height="68" width="68" style="height: 34px; width: 34px;"></canvas>
                    </div>
                    </div>
                </div>
                
                <h2><a href="/movie/634649?language=pt-BR"
                    title="${tweet.title}">${tweet.title}</a></h2>
                <p>${tweet.release_date}</p>
                </div>

                <div class="hover 634649"></div>
            `;


            $filmes_container.insertAdjacentElement('afterbegin', newTweet); 
        });

    }
}