let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)

let tabs = $$('.tab-item')
let panes = $$('.tab-pane')



tabs.forEach(function(tab, index) {

    let pane = panes[index]
    tab.onclick = function() {

        $('.tab-item.active')?.classList.remove('active')
        $('.tab-pane.active')?.classList.remove('active')
        

        this.classList.add('active')
        pane.classList.add('active')
    }
})

// let $$$ = document.querySelectorAll.bind(document) 
let x = $$('.tab-mobile')
x.forEach(function(t, i) {
    let paneMobile = panes[i]
    t.onclick = function() {
        $('.tab-mobile.active')?.classList.remove('active')
        $('.tab-pane.active')?.classList.remove('active')


        this.classList.add('active')
        paneMobile.classList.add('active')

    }
})

setTimeout(function () {
    alert('Prj này em làm gấp để nói lên sự hiểu biết cơ bản của em về HTML/CSS/Js. Và qua đó, em mong có thể góp một phần nhỏ trong Prj lần này của KIT Club. ^^');
  }, 10000);