let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)

let tabs = $$('.tab-item')
let panes = $$('.tab-pane')



tabs.forEach(function(tab, index) {

    let pane = panes[index]
    tab.onclick = function() {

        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')
        

        this.classList.add('active')
        pane.classList.add('active')
    }
})


/* setTimeout(function () {
    alert('Project này em làm gấp để có thể chứng minh khả năng hiểu biết cơ bản về FE của em, em mong được Apply Job của CLB ạ hihi ^^');
  }, 10000); */