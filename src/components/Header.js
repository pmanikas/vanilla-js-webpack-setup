const menuItems = [
  {
    title: 'Home',
    link: '#'
  },
  {
    title: 'About',
    link: '#'
  },
  {
    title: 'Contact',
    link: '#'
  },
];

const template = `
  <header>  
  <div class="container">
      <nav>
        <ul>
          ${menuItems.map(item => `
            <li><a href="${item.link}">${item.title}</a></li>
          `).join('')}
        </ul>
      </nav>
    </div>
  </header>
`
export default template;