document.addEventListener('DOMContentLoaded', function() {

    // --- 评论区功能 ---
    // 只有在文章详情页（有评论表单的页面）才执行
    const commentForm = document.getElementById('comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const nameInput = document.getElementById('comment-name');
            const commentInput = document.getElementById('comment-text');
            const name = nameInput.value.trim();
            const commentText = commentInput.value.trim();

            if (name === '' || commentText === '') {
                alert('名字和评论内容都不能为空！');
                return;
            }

            const commentsList = document.getElementById('comments-list');
            const commentDiv = document.createElement('div');
            commentDiv.className = 'comment';
            const commenterName = document.createElement('strong');
            commenterName.textContent = name;
            const commentContent = document.createElement('p');
            commentContent.textContent = commentText;

            commentDiv.appendChild(commenterName);
            commentDiv.appendChild(commentContent);
            commentsList.prepend(commentDiv);

            nameInput.value = '';
            commentInput.value = '';
        });
    }

    // --- 互动地图功能 ---
    // 只有在主页（有地图容器的页面）才执行
    const mapContainer = document.getElementById('map');
    if (mapContainer) {
        // 1. 初始化地图
        // setView([纬度, 经度], 缩放级别)
        // 我们把地图中心设置在欧亚大陆中间，缩放级别设为2，这样能看到全世界
        const map = L.map('map').setView([34, 70], 2);

        // 2. 添加地图图层 (地图的皮肤)
        // 我们使用免费的OpenStreetMap图层
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // 3. 添加标记 (Marker)
        // 为每个城市创建一个标记，并绑定一个弹出窗口
        L.marker([35.6895, 139.6917]) // 东京的纬度和经度
            .addTo(map)
            .bindPopup('<b>东京</b><br><a href="post-tokyo.html">点击查看游记</a>');

        L.marker([48.8566, 2.3522]) // 巴黎的纬度和经度
            .addTo(map)
            .bindPopup('<b>巴黎</b><br><a href="post-paris.html">点击查看游记</a>');

        L.marker([35.0116, 135.7681]) // 京都的纬度和经度
            .addTo(map)
            .bindPopup('<b>京都</b><br><a href="post-kyoto.html">点击查看游记</a>');
    }
});
