;(function(){

    const menu = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Portfolio',
            path: '/portfolio',
            children: [
                {
                    title: 'Backend',
                    path: '/portfolio/backend'
                },
                {
                    title: 'Frontend',
                    path: '/portfolio/frontend',
                    children: [
                        {
                            title: 'React',
                            path: '/portfolio/frontend/react'
                        },
                        {
                            title: 'Vue',
                            path: '/portfolio/frontend/vue'
                        },
                        {
                            title: 'Angular',
                            path: '/portfolio/frontend/angular'
                        }
                    ]
                },
                {
                    title: 'Design',
                    path: '/portfolio/design',
                    children: [
                        {
                            title: '3D Design',
                            path: '/portfolio/design/3d',
                            children: [
                                {
                                    title: 'Interior',
                                    path: '/portfolio/design/3d/interior'
                                }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            title: 'Services',
            path: '/services'
        },
        {
            title: 'Contacts',
            path: '/contacts'
        },
    ]

    const nav = document.getElementById('menu')
    function renderDropdown(arr) {
        let div = document.createElement('div');
        div.classList.add('dropdown-menu');
        arr.map(item => {
            let a = document.createElement('a');
            a.classList.add('dropdown-item');
            a.textContent = item.title
            a.href = item.path
            div.appendChild(a);
            if(item.children) {
               // div.classList.add( 'dropdown')
                a.classList.add('dropdown-toggle', 'dropdown-submenu');
                //$(ul).attr('role','button')
                a.appendChild(renderDropdown(item.children))
            }
        });
        return div;
    }
    function renderMenu(arr) {
        let ul = document.createElement('ul')
        ul.classList.add('nav', 'dropdown-menu')
        
        arr.map(item => {
            let li = document.createElement('li')
            let a = document.createElement('a')
            a.textContent = item.title
            a.href = item.path
            li.classList.add('nav-item', 'navbar-dark', 'bg-dark', 'dropdown-submenu')
            a.classList.add('nav-link')
            a.setAttribute('href','#');
            a.setAttribute('role','button');
            a.setAttribute('data-toggle','dropdown');
            a.setAttribute('aria-haspopup','true');
            a.setAttribute('aria-expanded','false');
            

            li.appendChild(a)
        


            if(item.children) {
                li.classList.add( 'dropdown')
                a.classList.add('dropdown-toggle');
                //$(ul).attr('role','button')
                li.appendChild(renderDropdown(item.children))
            }

            ul.appendChild(li)
        })
        return ul
    }

    nav.appendChild(renderMenu(menu))

})();