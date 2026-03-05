async function afficherData() {
    const content = document.getElementById('data');
    try {
        const response = await fetch('http:://localhost:3000/data');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        content.innerHTML = '';
        data.forEach(item => {
            const carte = document.createElement('div');
            carte.className = 'user-card';
            carte.innerHTML = `
                <h2>${item.name}</h2>
                <p>Email: ${item.email}</p>
                <p>Age: ${item.age}</p>
            `;
            content.appendChild(carte);
        });
    } catch (error) {
        content.innerHTML = `<p class="error">Erreur lors du chargement des données: ${error.message}</p>`;
    }
}

//document.addEventListener('DOMContentLoaded', afficherData);
afficherData();