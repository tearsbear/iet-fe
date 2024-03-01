$(document).ready(function () {
  let member = [
    {
      link: "https://maritim.go.id/",
      image: "1.svg",
    },
    {
      link: "https://www.ekon.go.id/",
      image: "2.svg",
    },
    {
      link: "https://www.esdm.go.id/",
      image: "3.svg",
    },
    {
      link: "https://www.kemenkeu.go.id/",
      image: "4.svg",
    },
    {
      link: "https://www.bappenas.go.id/",
      image: "5.svg",
    },
    {
      link: "https://www.bumn.go.id/",
      image: "6.svg",
    },
    {
      link: "https://www.menlhk.go.id/",
      image: "7.svg",
    },
    {
      link: "https://www.pln.co.id/",
      image: "8.svg",
    },
    {
      link: "https://ptsmi.co.id/",
      image: "9.svg",
    },
  ];

  function getMember() {
    for (let ir = 0; ir < member.length; ir++) {
      let item = `<div class="col-sm-4 mb-5">
                        <a href="${member[ir].link}" target="_blank">
                            <div class="bg-member">
                                <div class="centered">
                                    <img src="assets/partner/${member[ir].image}" alt="">
                                </div>
                            </div>
                        </a>
                    </div>`;
      $(item).appendTo("#listMember");
    }
  }

  getMember();

  $(".history-link").click(function () {
    $("#pills-history-tab").tab("show");
  });
});
