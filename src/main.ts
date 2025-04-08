import { Serie } from "./Serie.js";
import { series } from "./data.js";

function renderSeries(Series: Serie[]): void {
    const tableBody = document.getElementById('series-table-body');
    if (tableBody) {
        Series.forEach(Serie => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${Serie.id}</td>
                <td><a href="${Serie.webpage}">${Serie.name}</a></td>
                <td>${Serie.channel}</td>
                <td>${Serie.seasons}</td>
            `;
            tableBody.appendChild(row);
        });
        const totalSeasons = Series.reduce((sum, Serie) => sum + Serie.seasons, 0);
        const averageSeasons = totalSeasons / Series.length;

        const summaryRow = document.createElement('tr');
        summaryRow.innerHTML = `
            <td colspan="7"> class="text-start fw-bold">Promedio de temporadas: ${averageSeasons.toFixed(2)}</td>
        `;
        tableBody.appendChild(summaryRow);
    }
}
    
    document.addEventListener("DOMContentLoaded", () => {
        console.log("DOM Content Loaded", ()=>{
            console.log(series);
            renderSeries(series);
        });
});

