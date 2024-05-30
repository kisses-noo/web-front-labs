function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML += '<br>Россия: ' + today.toLocaleString('ru-RU');
    out.innerHTML += '<br>США: ' + today.toLocaleString('en-US', { timeZone: 'America/New_York' });
    out.innerHTML += '<br>Япония: ' + today.toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });
    out.innerHTML += '<br>Китай: ' + today.toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });
    out.innerHTML += '<br>Бразилия: ' + today.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    out.innerHTML += '<br>Франция: ' + today.toLocaleString('fr-FR', { timeZone: 'Europe/Paris' });

    out.innerHTML += '<br>Текущий год: ' + today.getFullYear();
    out.innerHTML += '<br>Текущий месяц: ' + (today.getMonth() + 1);
    out.innerHTML += '<br>Текущая дата: ' + today.getDate();
    out.innerHTML += '<br>День недели: ' + today.toLocaleString('ru-RU', { weekday: 'long' });

    document.getElementById('submit-button').addEventListener('click', function() {
        let day = document.getElementById('day').value;
        let month = document.getElementById('month').value;
        let year = document.getElementById('year').value;

        let date = new Date(year, month - 1, day);
    
        document.getElementById('result').textContent = 'День недели: ' + date.toLocaleString('ru-RU', { weekday: 'long' });
      });

}

