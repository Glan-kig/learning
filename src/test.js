async function afficherData() {
    const content = document.getElementById('data');
    try {
        const response = await fetch('http://localhost:3000/api/data');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        content.innerHTML = '';
        data.forEach(item => {
            const carte = document.createElement('div');
            carte.className = 'user-card';
            carte.innerHTML = `
            <div class="bg-white shadow-md rounded-lg p-6 mb-4 items-center justify-center text-center">
                <h2 class="text-xl font-bold text-gray-800">${item.name}</h2>
                <p class="text-black font-bold text-xl">Email: ${item.email}</p>
                <p class="text-black font-bold text-xl">Age: ${item.age}</p>
            </div>
            `;
            content.appendChild(carte);
        });
    } catch (error) {
        content.innerHTML = `<p class="error">Erreur lors du chargement des données: ${error.message}</p>`;
    }
}

//document.addEventListener('DOMContentLoaded', afficherData);
afficherData();