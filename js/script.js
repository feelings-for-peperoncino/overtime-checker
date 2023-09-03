document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = document.getElementById("calculateButton");
  const endTimeInput = document.getElementById("endTime");
  const resultElement = document.getElementById("result");

  calculateButton.addEventListener("click", function () {
      const endTimeParts = endTimeInput.value.split(":");
      const endTime = new Date();
      endTime.setHours(parseInt(endTimeParts[0]));
      endTime.setMinutes(parseInt(endTimeParts[1]));

      if (isNaN(endTime.getTime())) {
          resultElement.textContent = "正しい時刻を入力してください。";
          return;
      }

      const now = new Date();
      const diffMilliseconds = now - endTime;
      const diffMinutes = Math.floor(diffMilliseconds / (1000 * 60)); // 小数点以下を切り捨て

      if (diffMinutes < 0) {
          resultElement.textContent = "現在の時刻が業務終了時刻より前です。";
      } else {
          resultElement.textContent = `経過時間: ${diffMinutes} 分`;
      }
  });
});

