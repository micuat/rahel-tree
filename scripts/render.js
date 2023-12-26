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

// Getting a reference to the content div
const contentDivs = document.querySelectorAll("#content > div");

// Define an array of sections to be added
const sections = [renderHeader, renderInput, renderLinks, renderSocialIcons, renderFooter];

const callback = (e) => {
  render(contentDivs[2], renderLinks({ keyword: e.target.value }));
};

// Iterate over sections and append them to contentDiv
sections.forEach((section, i) => render(contentDivs[i], section({ keyword: "", callback })));
