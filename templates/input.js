import { html } from "lighterhtml";

export const renderInput = ({ callback }) => {
  return html`
    <input oninput="${ callback }" />
  `
};
