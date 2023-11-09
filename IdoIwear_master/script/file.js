function addPost() {
    var name = document.getElementById("name").value;
    var group = document.getElementById("group").value;
    var date = document.getElementById("date").value;
    var imageInput = document.getElementById("image");
    var link = document.getElementById("link").value;

    if (name && group && date && imageInput.files.length > 0 && link) {
        var imageFile = imageInput.files[0];
        console.log("imageFile", imageFile);

        // 게시물 데이터를 생성
        const reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.onload = () => {
            // 게시물 데이터를 생성
            var post = {
                name: name,
                group: group,
                date: date,
                image: reader.result,
                link: link
            };

            // 로컬 스토리지에 게시물 데이터 저장
            var posts = JSON.parse(localStorage.getItem("posts")) || [];
            posts.push(post);
            localStorage.setItem("posts", JSON.stringify(posts));
        }

        // 입력 필드 초기화
        document.getElementById("name").value = "";
        document.getElementById("group").value = "";
        document.getElementById("date").value = "";
        imageInput.value = ""; // 이미지 파일 선택란 초기화
        document.getElementById("link").value = "";

        // 이미지 초기화
        // document.getElementById("uploaded-image").src = "upload.png";

        // 게시물 추가 후 "추천 게시물" 페이지로 이동
        window.location.href = "push.html";
    }
}

function deletePost(index) {
    var posts = JSON.parse(localStorage.getItem("posts")) || [];

    if (index >= 0 && index < posts.length) {
        // 선택한 게시물 삭제
        posts.splice(index, 1);

        // 로컬 스토리지에서 업데이트된 게시물 데이터 저장
        localStorage.setItem("posts", JSON.stringify(posts));

        // 페이지 새로고침
        location.reload();
    }
}



// 이미지 파일 업로드 시 이미지 미리보기
document.getElementById("image").addEventListener("change", function() {
    var imageInput = document.getElementById("image");
    var uploadedImage = document.getElementById("uploaded-image");
    if (imageInput.files.length > 0) {
        var imageFile = imageInput.files[0];
        var imageUrl = URL.createObjectURL(imageFile); // 이미지 URL 생성
        uploadedImage.src = imageUrl; // 이미지 URL을 이미지 요소의 src에 할당
    }
});

