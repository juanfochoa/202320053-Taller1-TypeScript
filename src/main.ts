import { Series } from './data';

document.addEventListener('DOMContentLoaded', () => {
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
    }

    const totalSeasons = Series.reduce((sum, Serie) => sum + Serie.seasons, 0);
    const averageSeasons = totalSeasons / Series.length;
    const averageSeasonsElement = document.getElementById('average-seasons');
    if (averageSeasonsElement) {
        averageSeasonsElement.textContent = `Seasons avarage: ${averageSeasons.toFixed(2)}`;
    }
});