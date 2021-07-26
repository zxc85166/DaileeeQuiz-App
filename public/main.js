const app = Vue.createApp({
  data() {
    return {
      idx: 0,
      selectedAnswer: "",
      correctAnswers: 0,
      wrongAnswers: 0,
      count: 13,

      questions: [
        {
          srcimg: "../src/1.png",
          question: "1. 請閱讀下面文章 選擇正確羅列順序的 ㄅ-ㄆ-ㄇ 單字",
          answers: {
            a: "幸福 - 那裡 - 月光",
            b: "愛 - 這裡 - 陽光",
            c: "信任 - 那地方 - 雲朵",
            d: "希望 - 這地方 - 星光",
          },
          correctAnswer: "d",
        },
        {
          srcimg:
            "https://pbs.twimg.com/media/E5r4aH0VkAEHWPy?format=png&name=small",
          question: "2. 對下圖的說明請挑出錯誤的選項",
          answers: {
            a: "聖誕節上傳的照片",
            b: "和成員小時候的照片一起上傳的照片",
            c: "上傳文章的成員是'Zoa'",
            d: "文章中包含'Daileee'一詞",
          },
          correctAnswer: "c",
        },
        {
          srcimg:
            "https://pbs.twimg.com/media/E5r5b0wVcAIM7sF?format=png&name=120x120",
          question: "3. 請選出從Weeekly出道後第100天是星期幾",
          answers: { a: "週一", b: "週三", c: "週五", d: "週日" },
          correctAnswer: "b",
        },
        {
          srcimg:
            "https://pbs.twimg.com/media/E5r5b0wVcAIM7sF?format=png&name=120x120",
          question: "4. 在1theK<WE CLEAR> EP.2中選出成功完成電影觀看任務的成員",
          answers: { a: "Jihan", b: "申智阭", c: "Monday", d: "李在希" },
          correctAnswer: "b",
        },
        {
          srcimg:
            "https://pbs.twimg.com/media/E5r5b0wVcAIM7sF?format=png&name=120x120",
          question:
            "5. 1theK<關鍵詞操作團>中提示的'昭垠'的關鍵詞，請選擇不對的選項",
          answers: { a: "歐尼killer", b: "酒窩", c: "萬能角", d: "暴走先驅者" },
          correctAnswer: "d",
        },
        {
          srcimg:
            "https://pbs.twimg.com/media/E5r5b0wVcAIM7sF?format=png&name=120x120",
          question:
            "6. 2020年9月17日 V LIVE <挑戰素描問答!🖌(出題者:智阭尼,在希)>中請選擇'智阭'這幅畫的提示語",
          answers: { a: "鹽", b: "創意", c: "斑馬", d: "挖掘機" },
          correctAnswer: "c",
        },
        {
          srcimg:
            "https://pbs.twimg.com/media/E5r5b0wVcAIM7sF?format=png&name=120x120",
          question:
            "7. 請選擇下列Weeekly CP中同時包含的成員:1.강토즈(狗兔s) 2.설탕즈(白糖s) 3.공사장(工地) 4.짠소금(鹹鹽巴)",
          answers: { a: "李在希", b: "Jihan", c: "朴昭垠", d: "Zoa" },
          correctAnswer: "b",
        },
        {
          srcimg:
            "https://pbs.twimg.com/media/E5r5b0wVcAIM7sF?format=png&name=120x120",
          question:
            "8. 請選擇Weeekly的Good Neighbors<世界家庭日>紀念慈善畫報中團體照片中的在氣球上所寫的句子",
          answers: {
            a: "WE ARE WEEEKLY",
            b: "WE ARE FRIEND",
            c: "WE ARE FAMILY",
            d: "WE ARE NEIGHBOR",
          },
          correctAnswer: "c",
        },
        {
          srcimg:
            "https://pbs.twimg.com/media/E5r5b0wVcAIM7sF?format=png&name=120x120",
          question:
            "9. 請選擇誰是 2020年7月2日 以Mnet<M Countdown> 'Tag Me(@Me)出道舞臺的結尾精靈",
          answers: { a: "李受珍", b: "Jihan", c: "Zoa", d: "Monday" },
          correctAnswer: "a",
        },
        {
          srcimg:
            "https://pbs.twimg.com/media/E5r5b0wVcAIM7sF?format=png&name=120x120",
          question:
            "10. 1theK<今生第一次> EP.2 中'2樓'組遇到的動物'浣熊'的名字，請選擇正確的選項",
          answers: { a: "Choco", b: "Bori", c: "Moca", d: "Latte" },
          correctAnswer: "d",
        },
        {
          srcimg:
            "https://pbs.twimg.com/media/E5r4zDkVEAMiBuX?format=png&name=small",
          question: "11. 請選擇下列場景中的字幕中的單字",
          answers: {
            a: "weee:kloud~",
            b: "安妞~",
            c: "WEEEKLY~",
            d: "Daileee~",
          },
          correctAnswer: "a",
        },
        {
          srcimg:
            "https://pbs.twimg.com/media/E5r5AdYVIAkWqxC?format=png&name=small",
          question:
            "12. 請選擇下列<一週練習室> 場面中，猜拳遊戲中獲勝的成員的名字",
          answers: { a: "李受珍", b: "Jihan", c: "朴昭垠", d: "李在希" },
          correctAnswer: "b",
        },
        {
          srcimg:
            "https://pbs.twimg.com/media/E52pxk1VIAQGQ4Z?format=png&name=small",
          question: "13. 以下是各成員的出生年月日，求空格數之和",
          answers: { a: "14056", b: "13182", c: "14176", d: "15716" },
          correctAnswer: "c",
        },
      ],
    };
  },
  methods: {
    answered(e) {
      this.selectedAnswer = e.target.value;
      if (this.selectedAnswer == this.questions[this.idx].correctAnswer) {
        this.correctAnswers++;
      } else {
        this.wrongAnswers++;
      }
    },
    nextQuestion() {
      this.idx++;
      this.selectedAnswer = "";
      document.querySelectorAll("input").forEach((el) => (el.checked = false));
    },
    showResults() {
      this.idx++;
    },
    resetQuiz() {
      this.idx = 0;
      this.selectedAnswer = "";
      this.correctAnswers = 0;
      this.wrongAnswers = 0;
    },
  },
});

app.mount("#app");
