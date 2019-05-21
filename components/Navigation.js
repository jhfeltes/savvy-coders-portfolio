function buildIconHTML(link){
    if(link.icon){
        return `<span class="${link.icon}"></span>`;
    }

    return '';
}

function buildNavHTML(stateLinks){
    let linksHTML = '';

    stateLinks.forEach((link) => {
        linksHTML += `<li><a href="/${link.text.toLowerCase()}" data-navigo>${buildIconHTML(link)}${link.text}</a></li>`;
    });

    return linksHTML;
}

export default (state) => `<nav>
    <ul class="flex">
      ${buildNavHTML(state.links.primary)}
      <li>
        Portfolio
        <ul id="dropdown">
          ${buildNavHTML(state.links.dropdown)}
        </ul>
      </li>
    </ul>
  </nav>`;
