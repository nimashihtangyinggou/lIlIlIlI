document.addEventListener('DOMContentLoaded', () => {
    const foodList = document.getElementById('foods');
    const foodDetails = document.getElementById('food-details');
    const foodTitle = document.getElementById('food-title');
    const foodDescription = document.getElementById('food-description');
    const closeDetails = document.getElementById('close-details');

    // 模擬美食資料
    const foods = [
        { name: '壽司', description: '新鮮的生魚片搭配醋飯，口感絕佳。', image: 'https://via.placeholder.com/300?text=壽司' },
        { name: '拉麵', description: '濃郁的湯頭與彈牙的麵條，令人回味無窮。', image: 'https://via.placeholder.com/300?text=拉麵' },
        { name: '燒肉', description: '炭火烤出的香氣與多汁的肉片，絕對是美食中的經典。', image: 'https://via.placeholder.com/300?text=燒肉' }
    ];

    // 動態生成美食清單
    foods.forEach((food, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<img src="${food.image}" alt="${food.name}"><strong>${food.name}</strong>`;
        li.addEventListener('click', () => {
            foodTitle.textContent = food.name;
            foodDescription.textContent = food.description;
            const foodImage = document.createElement('img');
            foodImage.src = food.image;
            foodImage.alt = food.name;
            foodDetails.insertBefore(foodImage, foodTitle.nextSibling);
            foodDetails.style.display = 'block';
        });
        foodList.appendChild(li);
    });

    // 關閉詳細視窗
    closeDetails.addEventListener('click', () => {
        foodDetails.style.display = 'none';
        const foodImage = foodDetails.querySelector('img');
        if (foodImage) foodImage.remove();
    });
});