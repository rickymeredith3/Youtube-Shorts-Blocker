
let shorts = document.getElementsByTagName('ytd-rich-section-renderer')
for (let i = 0; i < shorts.length; i++) {
    shorts[i].style.display = "none"
}

let reel = document.getElementsByTagName('ytd-watch-next-secondary-results-renderer')
for (let i = 0; i < 1; i++) {
    reel[i].style.display = "none"
}

let menu = document.getElementsByTagName('ytd-guide-entry-renderer')

for (let n = 0; n < menu.length; n++) {
    if(menu[n].querySelector('a[title="Shorts"]') != null) {
        menu[n].style.display = "none"
    }
}

