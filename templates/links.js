import { links } from "../settings.json";
import { html } from "lighterhtml";

function renderLink(link) {
  const classes = link.url
    ? link.url.replace(/[^a-z0-9]/gi, "-").toLowerCase()
    : "";
  return html`
    <li class=${classes}>
      <a target="_blank" href=${link.url}>
        ${link.img ? html`<img src=${link.img} alt=${link.altText} />` : ""}
        <span>${link.text}</span>
      </a>
    </li>
  `;
}

export const renderLinks = ({ keyword = "" }) => {
  return html`
    <ul class="link-list">
      ${links.filter(e => e?.text?.toLowerCase().includes(keyword.toLowerCase())).map(renderLink)}
    </ul>
  `
};
