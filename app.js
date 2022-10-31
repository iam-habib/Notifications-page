const markRead = document.querySelector(".mark_read");
const notifications = document.querySelectorAll(".noti_info");
const notifyNumber = document.querySelector(".noti_number");

notifications.forEach((notification) => {
  markRead.addEventListener("click", () => {
    notification.classList.remove("unread");
    notifyNumber.textContent = "0";
  });
});
