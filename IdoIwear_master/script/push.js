 // "추천.html" 페이지가 열릴 때마다 로컬 스토리지에서 모든 게시물 데이터를 로드
 var posts = JSON.parse(localStorage.getItem("posts")) || [];

 // 게시물 데이터를 화면에 표시
 var recommendedPostsContainer = document.getElementById("recommended-posts");
 posts.forEach(function(post, index) {
     var postDiv = document.createElement("div");
     postDiv.classList.add("post");

     var postContent = `
             <p><strong>이름:</strong> ${post.name}</p>
             <p><strong>그룹:</strong> ${post.group}</p>
             <p><strong>날짜:</strong> ${post.date}</p>
             <img src="${post.image}" alt="게시물 이미지" style="width: 567px; height: 667px;">
             <p><strong>링크:</strong> <a href="${post.link}" target="_blank">${post.link}</a></p>
             <button onclick="deletePost(${index})">삭제</button> <!-- 삭제 버튼 추가 -->

     `;

     postDiv.innerHTML = postContent;
     recommendedPostsContainer.appendChild(postDiv);
 });