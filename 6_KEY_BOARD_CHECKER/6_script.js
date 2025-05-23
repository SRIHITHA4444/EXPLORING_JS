const keyInsert = document.getElementById('key-insert');

window.addEventListener('keydown', (et) => {
    keyInsert.innerHTML = `
        <div class = 'color'>
            <table>
                <tr>
                  <th>Key</th>
                  <th>KeyCode</th>
                  <th>Code</th>
                </tr>
                <tr>
                  <td>${et.key === " " ?"Space" : et.key}</td>
                  <td>${et.keyCode}</td>
                  <td>${et.code}</td>
                </tr>
            </table>
        </div>
    `
});