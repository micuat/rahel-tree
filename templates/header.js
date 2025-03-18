import { html } from "lighterhtml";
import settings from "../settings.json";

    // <img src='${settings.avatarImage}' class='avatar' alt='${settings.name}' />
export const renderHeader = () => html`<div>
  <div class='avatar-container'>
  </div>
  <h1>${settings.name}</h1>
  <h2>${settings.metaDescription}</h2>
</div>`;
