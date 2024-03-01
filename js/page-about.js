$(document).ready(function () {
  let member = [
    {
      title:
        "Kementrian <br /> Koordinator Bidang <br /> Kemaritiman dan <br /> Investasi",
      link: "https://maritim.go.id/",
      image: "1.svg",
    },
    {
      title: "Kementrian <br /> Koordinator Bidang <br/> Perekonomian",
      link: "https://www.ekon.go.id/",
      image: "2.svg",
    },
    {
      title: "Kementrian <br /> ESDM",
      link: "https://www.esdm.go.id/",
      image: "3.svg",
    },
    {
      title: "Kementrian <br/> Keuangan",
      link: "https://www.kemenkeu.go.id/",
      image: "4.svg",
    },
    {
      title: "Kementrian <br /> PPN/Bappenas",
      link: "https://www.bappenas.go.id/",
      image: "5.svg",
    },
    {
      title: "Kementrian <br/> BUMN",
      link: "https://www.bumn.go.id/",
      image: "6.svg",
    },
    {
      title: "Kementrian <br/> LHK",
      link: "https://www.menlhk.go.id/",
      image: "7.svg",
    },
    {
      title: "PLN",
      link: "https://www.pln.co.id/",
      image: "8.svg",
    },
    {
      title: "PT SMI",
      link: "https://ptsmi.co.id/",
      image: "9.svg",
    },
  ];

  function getMember() {
    for (let ir = 0; ir < member.length; ir++) {
      let item = `<div class="col-sm-4 mb-5">
                  <a href="#" target="_blank">
                      <div class="bg-member">
                          <div class="centered">
                              <img src="assets/partner/${member[ir].image}" alt="">
                              <!-- full slide up content here -->
                              <div class="slide-up-cover">
                                  <div class="content">
                                      <h3 class="font-inter-semi text-light title-${ir}">${member[ir].title}</h3>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </a>
              </div>`;
      $(item).appendTo("#listMember");
      if (ir == 2 || ir == 3 || ir == 4 || ir == 5 || ir == 6) {
        $(`.title-${ir}`).css("font-size", "38px");
      } else if (ir == 7 || ir == 8) {
        $(`.title-${ir}`).css("font-size", "52px");
      }
    }
  }

  getMember();

  $(".history-link").click(function () {
    $("#pills-history-tab").tab("show");
  });
});
