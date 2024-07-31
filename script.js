document.getElementById('quadratic-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    const delta = b * b - 4 * a * c;
    let results = '';

    if (delta < 0) {
        results = 'Não há raízes reais';
    } else if (delta === 0) {
        const root = -b / (2 * a);
        results = `Raiz única: ${root}`;
    } else {
        const root1 = (-b + Math.sqrt(delta)) / (2 * a);
        const root2 = (-b - Math.sqrt(delta)) / (2 * a);
        results = `Raízes: ${root1} e ${root2}`;
    }

    document.getElementById('results').innerText = results;

    drawGraph(a, b, c);
});

function drawGraph(a, b, c) {
    const canvas = document.getElementById('graph');
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'red';
    for (let x = -canvas.width / 2; x < canvas.width / 2; x += 0.1) {
        const y = a * (x * x) + b * x + c;
        ctx.lineTo(canvas.width / 2 + x, canvas.height / 2 - y);
    }
    ctx.stroke();
}
