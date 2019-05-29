function buildIconHTML(link){
    if(link.icon){
        return `<span class="${link.icon}"></span>`;
    }

    return '';
}

function buildNavHTML(stateLinks){
    return stateLinks
        .map(
            (link) =>
                `<li><a href="/${link.text.toLowerCase()}" data-navigo>${buildIconHTML(
                    link
                )}${link.text}</a></li>`)
        .join(' ');
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
