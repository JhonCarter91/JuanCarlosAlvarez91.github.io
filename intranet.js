// --- 1. Simulación de Login ---
// Usuarios permitidos: admin1, admin2, admin3 (Contraseña para todos: 1234)
function simularLogin() {
    const user = document.getElementById('username').value.toLowerCase();
    const pass = document.getElementById('password').value;
    const usuariosValidos = ['admin1', 'admin2', 'admin3'];

    if (usuariosValidos.includes(user) && pass === '1234') {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('dashboard-screen').style.display = 'block';
    } else {
        document.getElementById('login-error').style.display = 'block';
    }
}

function cerrarSesion() {
    document.getElementById('dashboard-screen').style.display = 'none';
    document.getElementById('login-screen').style.display = 'flex';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('login-error').style.display = 'none';
}

// --- 2. Agregar Libro (Simulación en DOM) ---
document.getElementById('add-book-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const titulo = document.getElementById('book-title').value;
    
    // Agregarlo a la lista de "Borrar Libros" visualmente
    const lista = document.getElementById('lista-libros-admin');
    const nuevoLi = document.createElement('li');
    nuevoLi.innerHTML = `${titulo} <button class="btn-danger" onclick="this.parentElement.remove()">Borrar</button>`;
    lista.appendChild(nuevoLi);

    alert(`Libro "${titulo}" agregado exitosamente al catálogo.`);
    this.reset();
});

// --- 3. Simulación de Envío de Mensajes ---
document.getElementById('chat-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const input = document.getElementById('chat-input');
    const texto = input.value;
    
    if (texto.trim() !== '') {
        const chatContainer = document.getElementById('chat-mensajes');
        const nuevoMensaje = document.createElement('div');
        nuevoMensaje.className = 'mensaje enviado';
        nuevoMensaje.innerHTML = `<strong>Tú:</strong> ${texto}`;
        
        chatContainer.appendChild(nuevoMensaje);
        chatContainer.scrollTop = chatContainer.scrollHeight; // Auto-scroll al fondo
        input.value = '';
    }
});