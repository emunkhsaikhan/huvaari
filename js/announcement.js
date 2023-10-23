
const warning = document.getElementById('announcement');
const closeBtn = document.getElementById('announcement_Button');

Announcement_button.addEventListener('click', function () {
    Announcement.style.display = 'none';
});

function showAnnouncement() {
    Announcement.style.display = 'block';
}
setTimeout(showAnnouncement, 2000);