document.addEventListener(
  "DOMContentLoaded",
  function () {
    fetch("JavaScript/jobsData.json")
      .then((data) => data.json())
      .then((response) => {
        response.forEach((element) => {
          console.log(element);

          const jobAd = document.createElement("div");
          jobAd.classList.add("job-post");

          jobAd.innerHTML = `
                         <div class="job-information">
                           <h3>${element.title}</h3>
                             <p>${element.location}</p>
                            <p>${element.shortDescription}</p>
                       </div>
                        <a href="/jobpage?jobid=${element.id}">APPLY</a>
                        `;

          let jobBoard = document.getElementById("job-board");
          jobBoard.append(jobAd);
        });
      });
  },
  false
);
