fetch("https://jsonplaceholder.typicode.com/photos")
    .then((e) => {
        return e.json();
    })
    .then((response) => {
        console.log(response);
        // console.log(response[500].albumId);
        photos(response);
    })
    .catch((error) => {
        console.log(error);
    });

const moma = document.querySelectorAll(".moma");

const photos = (variable) => {
    for (let index = 0; index < moma.length; index++) {
        moma[index].setAttribute("src", variable[index].thumbnailUrl);
    }
};
const BannerBox = document.querySelectorAll(".BannerBox");
const spanBullet = document.querySelectorAll(".spanBullet");
var no = 0;

const relat = document.getElementById("relat");
const func = () => {
    no++;
    BannerBox.forEach((e, ind) => {
        if (no > BannerBox.length - 1) {
            no = 0;
        }
        if (no < 0) {
            no = BannerBox.length;
        }
        e.style.transform = `translateX(-${no * 100}%)`;
    });
    spanBullet.forEach((e, ind) => {
        e.classList.add("backgroundBlack");
        if (e != spanBullet[no]) {
            e.classList.remove("backgroundBlack");
        }
    });
};

// after hover stops slider
var gugu = setInterval(func, 2000);
relat.addEventListener("mouseover", () => {
    clearInterval(gugu);
});
relat.addEventListener("mouseout", () => {
    gugu = setInterval(func, 2000);
});

const scrollToTop = document.getElementById("scrollToTop");
const scrollToTopLink = document.getElementById("scrollToTopLink");

window.addEventListener("scroll", () => {
    // scrollToTop.style.opacity = "1";
    // scrollToTop.classList.remove("opacity");

    if (window.scrollY > 900) {
        scrollToTop.classList.add("show");
    } else {
        scrollToTop.classList.remove("show");
    }
});
// scrollToTopLink.addEventListener("click", () => {
//     if (window.scrollY > 900) {
//         scrollToTop.classList.add("opacity");
//     } else {
//         scrollToTop.classList.remove("opacity");
//     }
// });

const mobileHamburger = document.getElementById("mobileHamburger");
const mobileMenu = document.querySelector(".mobileMenu");
mobileHamburger.addEventListener("click", () => {
    // mobileHamburger.style.position = "relative";
    // mobileHamburger.style.zIndex = "999";
    mobileMenu.classList.toggle("right");
    document.body.classList.toggle("scrollHide");
});
