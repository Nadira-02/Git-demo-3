"use strict";

const form = document.querySelector("#search-form");
const resultsDiv = document.querySelector("#results");

form.addEventListener("submit", async function (evt) {
    evt.preventDefault();

    const queryValue = document.querySelector("#query").value;

    try {
        const response = await fetch(
            `https://api.tvmaze.com/search/shows?q=${queryValue}`
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Search result:", data);

        resultsDiv.innerHTML = "";

        for (const tvShow of data) {
            const show = tvShow.show;
            const article = document.createElement("article");

            const title = document.createElement("h2");
            title.textContent = show.name;
            article.appendChild(title);

            if (show.url) {
                const link = document.createElement("a");
                link.href = show.url;
                link.textContent = "More details";
                link.target = "_blank";
                article.appendChild(link);
            }

            const mediumImage = show.image?.medium;
            if (mediumImage) {
                const img = document.createElement("img");
                img.src = mediumImage;
                img.alt = show.name;
                article.appendChild(img);
            }
            if (show.summary) {
                const summaryDiv = document.createElement("div");
                summaryDiv.innerHTML = show.summary;
                article.appendChild(summaryDiv);
            } 

            resultsDiv.appendChild(article);
        }
        
    } catch (error) {
      console.error("Error fetching data:", error);  
    }
    
});
