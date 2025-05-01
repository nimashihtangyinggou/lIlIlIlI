document.addEventListener('DOMContentLoaded', () => {
    const foodList = document.getElementById('foods');
    const foodDetails = document.getElementById('food-details');
    const foodTitle = document.getElementById('food-title');
    const foodDescription = document.getElementById('food-description');
    const closeDetails = document.getElementById('close-details');

    // 模擬美食資料，按分類組織
    const foods = {
        主食: [
            { name: '壽司', description: '產地：日本。用料：新鮮的生魚片與醋飯。特色：口感清爽，搭配芥末與醬油更添風味。味道：鮮甜中帶有微酸。外觀：色彩繽紛，擺盤精緻。' },
            { name: '拉麵', description: '產地：日本。用料：豚骨湯底、彈牙麵條、叉燒與溏心蛋。特色：湯頭濃郁，麵條吸附湯汁。味道：鹹香濃郁，層次豐富。外觀：湯麵上點綴蔥花與海苔，誘人食慾。' },
            { name: '創意披薩', description: '產地：義大利（創意改良）。用料：多國風味食材如墨西哥辣椒、泰式雞肉。特色：融合多國風味，創新口感。味道：酸甜微辣，層次分明。外觀：餅皮酥脆，色彩豐富。' }
        ],
        沙拉: [
            { name: '水果沙拉', description: '產地：全球。用料：新鮮水果如蘋果、奇異果、草莓，搭配酸奶醬。特色：健康低卡，適合夏日享用。味道：酸甜清新。外觀：色彩繽紛，令人食指大動。' },
            { name: '凱撒沙拉', description: '產地：美國。用料：羅馬生菜、帕瑪森起司、酥脆麵包丁、凱撒醬。特色：經典沙拉，口感豐富。味道：濃郁奶香，微鹹。外觀：綠葉襯托金黃麵包丁，簡約大方。' }
        ],
        甜點: [
            { name: '巧克力熔岩蛋糕', description: '產地：法國。用料：高純度巧克力、雞蛋、奶油。特色：外層鬆軟，內餡濃稠。味道：濃郁巧克力香氣，甜而不膩。外觀：外層微裂，內餡緩緩流出，搭配香草冰淇淋更佳。' },
            { name: '抹茶蛋糕', description: '產地：日本。用料：抹茶粉、奶油、雞蛋。特色：抹茶香氣濃郁，口感綿密。味道：微苦中帶甜，層次豐富。外觀：綠色蛋糕層次分明，清新自然。' }
        ],
        飲料: [
            { name: '抹茶拿鐵', description: '產地：日本。用料：抹茶粉、牛奶、糖。特色：濃郁抹茶香氣，搭配絲滑奶泡。味道：微苦中帶甜，口感順滑。外觀：綠白相間，奶泡細緻。' },
            { name: '手工果汁', description: '產地：全球。用料：新鮮水果如橙子、芒果、鳳梨。特色：現榨果汁，保留水果原味。味道：酸甜適中，清爽解渴。外觀：色彩鮮豔，透明杯中可見果肉纖維。' },
            { name: '冰咖啡', description: '產地：美國。用料：濃縮咖啡、冰塊、牛奶或糖漿。特色：夏日清涼飲品，咖啡香氣濃郁。味道：苦中帶甜，冰涼順口。外觀：咖啡與牛奶漸層分明，吸睛十足。' }
        ]
    };

    // 動態生成美食清單，按分類顯示
    Object.keys(foods).forEach(category => {
        const categoryHeader = document.createElement('h3');
        categoryHeader.textContent = category;
        foodList.appendChild(categoryHeader);

        foods[category].forEach(food => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${food.name}</strong>`;
            li.addEventListener('click', () => {
                foodTitle.textContent = food.name;
                foodDescription.textContent = food.description;
                foodDetails.style.display = 'block';
            });
            foodList.appendChild(li);
        });
    });

    // 關閉詳細視窗
    closeDetails.addEventListener('click', () => {
        foodDetails.style.display = 'none';
    });
});