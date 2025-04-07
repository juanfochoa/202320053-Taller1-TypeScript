import { series } from './data';

document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('series-table-body');
    if(tableBody){
        series.forEach(serie => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${serie.id}</td>
                <td>${serie.name}</td>
                <td>${serie.channel}</td>
                <td>${serie.seasons}</td>
            `;
            tableBody.appendChild(row);
            });
        }

    const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
    const averageSeasons = totalSeasons / series.length;
    const averageSeasonsElement = document.getElementById('average-seasons');
    if (avarageSeasonsElement){
        avarageSeasonsElement.textContent = 'Avarage seasons: ${averageSeasons.toFixed(1)}';
        }
    });