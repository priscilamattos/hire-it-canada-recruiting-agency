const app = {};

app.init = () => {
  const queryString = window.location.search;

  const urlParams = new URLSearchParams(queryString);

  const jobid = urlParams.get("jobid");

  const parsedJobId = parseInt(jobid);
  if (isNaN(parsedJobId)) {
    alert("Invalid job");
    return;
  }

  fetch("JavaScript/jobsData.json")
    .then((data) => data.json())
    .then((response) => {
      const job = response.find((item) => item.id === parsedJobId);

      if (!job) {
        alert("Invalid job");
        return;
      }

      const jobTitle = document.createElement("h2");
      jobTitle.innerText = job.title;

      const jobLocation = document.createElement("p");
      jobLocation.innerText = job.location;

      const jobDescription = document.createElement("p");
      jobDescription.innerText = job.longDescription;

      document
        .querySelector(".job-information")
        .append(jobTitle, jobLocation, jobDescription);
    });
};
document.addEventListener("DOMContentLoaded", app.init());
