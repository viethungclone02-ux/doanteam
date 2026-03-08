// script.js - JavaScript cho trang giới thiệu bản thân

// Chờ DOM tải xong trước khi thực thi code
document.addEventListener('DOMContentLoaded', function() {
    // Lấy phần tử ảnh đại diện
    const profileImg = document.querySelector('.profile-img');
    // Thêm sự kiện click để hiển thị thông báo
    if (profileImg) {
        profileImg.addEventListener('click', function() {
            alert('Xin chào! Tôi là Lê Văn Huy, sinh viên đam mê công nghệ.');
        });
    }

    // Lấy tất cả các kỹ năng
    const skills = document.querySelectorAll('.skill');
    // Thêm hiệu ứng hover cho mỗi kỹ năng
    skills.forEach(skill => {
        skill.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#667eea'; // Đổi màu nền
            this.style.color = 'white'; // Đổi màu chữ
        });
        skill.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#f0f0f0'; // Trả lại màu gốc
            this.style.color = 'black'; // Trả lại màu chữ gốc
        });
    });

    // Lấy tất cả các section
    const sections = document.querySelectorAll('.section');
    // Thêm hiệu ứng fade-in cho từng section
    sections.forEach((section, index) => {
        section.style.opacity = '0'; // Ẩn ban đầu
        section.style.transform = 'translateY(20px)'; // Dịch xuống
        setTimeout(() => {
            section.style.transition = 'opacity 0.5s ease, transform 0.5s ease'; // Thêm transition
            section.style.opacity = '1'; // Hiện dần
            section.style.transform = 'translateY(0)'; // Trả về vị trí gốc
        }, index * 200); // Độ trễ cho từng section
    });

    // Mảng chứa đường dẫn ảnh cho slideshow
    const images = [
        'images/ABC.jpg',
        'images/DEF.jpg',
        // Thêm ảnh khác nếu có, ví dụ: 'images/photo3.jpg'
    ];
    let currentImageIndex = 0; // Chỉ số ảnh hiện tại

    // Hàm thay đổi ảnh
    function changeImage() {
        if (profileImg) {
            profileImg.style.opacity = '0'; // Fade out
            setTimeout(() => {
                profileImg.src = images[currentImageIndex]; // Thay đổi src
                profileImg.style.opacity = '1'; // Fade in
                currentImageIndex = (currentImageIndex + 1) % images.length; // Tăng chỉ số, lặp lại
            }, 500); // Thời gian fade out
        }
    }

    // Thêm CSS transition cho ảnh nếu chưa có
    if (profileImg) {
        profileImg.style.transition = 'opacity 0.5s ease';
    }

    // Thay đổi ảnh mỗi 2000ms (2 giây)
    setInterval(changeImage, 2000);

    // Toggle audio
    const audioToggle = document.getElementById('audio-toggle');
    const backgroundAudio = document.getElementById('background-audio');
    let isPlaying = false; // Trạng thái audio

    if (audioToggle && backgroundAudio) {
        audioToggle.addEventListener('click', function() {
            if (isPlaying) {
                backgroundAudio.pause(); // Dừng nhạc
                audioToggle.textContent = '🔊 Bật Nhạc'; // Đổi text nút
                isPlaying = false;
            } else {
                backgroundAudio.play(); // Phát nhạc
                audioToggle.textContent = '🔇 Tắt Nhạc'; // Đổi text nút
                isPlaying = true;
            }
        });
    }
});