// Importing modules and functions
import { html, render } from "lighterhtml";
import { renderMeta } from "../templates/meta.js";
import { renderHeader } from "../templates/header.js";
import { renderInput } from "../templates/input.js";
import { renderLinks } from "../templates/links.js";
import { renderFooter } from "../templates/footer.js";
import { renderSocialIcons } from "../templates/social.js";

const head = document.getElementsByTagName("head")[0];
head.appendChild(renderMeta);

const divHeader = document.querySelector(".content-header");
const divInput = document.querySelector(".content-input");
const divLinks = document.querySelector(".content-links");
const divSocials = document.querySelector(".content-socials");
const divFooter = document.querySelector(".content-footer");

const callback = (e) => {
  render(divLinks, renderLinks({ keyword: e.target.value }));
};

render(divHeader, renderHeader());
// render(divInput, renderInput({ callback }));
render(divLinks, renderLinks({ keyword: "" }));
render(divSocials, renderSocialIcons());
// render(divFooter, renderFooter());
