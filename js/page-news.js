let news = [
  {
    cover: "1.png",
    title: "Lorem Ipsum Dolor Sit Amet, Consectetur",
    link: "#",
    date: "February 26, 2024",
  },
  {
    cover: "2.png",
    title:
      "Discussion Session With UMBRA and INA about The World Bank Negative Pledge",
    link: "#",
    date: "February 23, 2024",
  },
  {
    cover: "3.png",
    title: "Lorem Ipsum Dolor Sit Amet, Consectetur",
    link: "#",
    date: "February 22, 2024",
  },
  {
    cover: "4.png",
    title: "Meeting With Masyarakat Ketenagalistrikan Indonesia",
    link: "#",
    date: "February 20, 2024",
  },
  {
    cover: "5.png",
    title: "Meeting With Masyarakat Ketenagalistrikan Indonesia",
    link: "#",
    date: "February 19, 2024",
  },
];

function getNews() {
  for (let ins = 0; ins < news.length; ins++) {
    let item = `<div class="col mb-5">
                        <img src="../iet/assets/news/${news[ins].cover}" alt="">
                        <a href="#" class="font-inter-semi text-primary title">${news[ins].title}</a>
                        <p class="font-inter-regular mt-2">${news[ins].date}</p>
                    </div>`;
    $(item).appendTo("#listNews");
  }
}

getNews();
