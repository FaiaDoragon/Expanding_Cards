import { cards } from "./sources.js";

export const card = cards.map(function (cards) {
    return `
    <div class="panel" style="background-image: url('${cards.link}')">
        <h3>${cards.nombre}</h3>
    </div>`;
})