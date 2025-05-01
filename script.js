document.addEventListener('DOMContentLoaded', () => {
    const foodList = document.getElementById('foods');

    // 模擬美食資料
    const foods = [
        { name: '壽司', description: '新鮮的生魚片搭配醋飯，口感絕佳。' },
        { name: '拉麵', description: '濃郁的湯頭與彈牙的麵條，令人回味無窮。' },
        { name: '燒肉', description: '炭火烤出的香氣與多汁的肉片，絕對是美食中的經典。' }
    ];

    // 動態生成美食清單
    foods.forEach(food => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${food.name}</strong><p>${food.description}</p>`;
        foodList.appendChild(li);
    });
});