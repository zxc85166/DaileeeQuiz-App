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
          srcimg:
            "https://pbs.twimg.com/media/E5r3d1PVoA4oEzb?format=png&name=small",
          question:
            "1.다음 지문을 읽고 ㄱ-ㄴ-ㄷ 에 들어갈 단어가 올바르게 나열된 것을 고르시오.",
          answers: {
            a: "행복 - 저기를 - 달빛",
            b: "사랑 - 여기를 - 햇빛",
            c: "믿음 - 저곳을 - 구름",
            d: "희망 - 이곳을 - 별빛",
          },
          correctAnswer: "d",
        },
        {
          srcimg:
            "https://pbs.twimg.com/media/E5r4aH0VkAEHWPy?format=png&name=small",
          question: "2.다음 사진에 대한 설명 중 틀린 것을 고르시오.",
          answers: {
            a: "크리스마스에 업로드된 사진이다.",
            b: "멤버의 어린 시절 사진과 같이 업로드 된 사진이다.",
            c: "게시글을 올린 멤버는 '조아'이다.",
            d: "게시글에 '데일리'라는 단어가 들어가 있다.",
          },
          correctAnswer: "c",
        },
        {
          srcimg:
            "https://pbs.twimg.com/media/E5r5b0wVcAIM7sF?format=png&name=120x120",
          question:
            "3.위클리 데뷔일부터 100일째 되는 날은 무슨 요일인지 고르시오.",
          answers: { a: "월요일", b: "수요일", c: "금요일", d: "일요일" },
          correctAnswer: "b",
        },
        {
          srcimg:
            "https://pbs.twimg.com/media/E5r5b0wVcAIM7sF?format=png&name=120x120",
          question:
            "4. 1theK<WE CLEAR> EP.2에서 영화 관람 미션에 성공한 멤버를 고르시오.",
          answers: { a: "지한", b: "신지윤", c: "먼데이", d: "이재희" },
          correctAnswer: "b",
        },
        {
          srcimg:
            "https://pbs.twimg.com/media/E5r5b0wVcAIM7sF?format=png&name=120x120",
          question:
            "5. 1theK<키워드 조작단>에 제시된'소은'의 키워드로 옳지 않은 것을 고르시오.",
          answers: { a: "언니킬러", b: "보조개", c: "만능캐", d: "푹주기관차" },
          correctAnswer: "d",
        },
        {
          srcimg:
            "https://pbs.twimg.com/media/E5r5b0wVcAIM7sF?format=png&name=120x120",
          question:
            "6. 2020년 9월 17일 V LIVE<도전스케치 퀴즈!🖌(출제자:지유니,째희)>에서 '지윤'이 그림의 제시어를 고르시오.",
          answers: { a: "소금", b: "아이디어", c: "얼룩말", d: "포크레인" },
          correctAnswer: "c",
        },
        {
          srcimg:
            "https://pbs.twimg.com/media/E5r5b0wVcAIM7sF?format=png&name=120x120",
          question:
            "7. 다음의 위클리 조합에 공통으로 포함되어 있는 멤버를 고르시오.",
          answers: { a: "강토즈", b: "설탕즈", c: "박소은", d: "조아" },
          correctAnswer: "b",
        },
        {
          srcimg:
            "https://pbs.twimg.com/media/E5r5b0wVcAIM7sF?format=png&name=120x120",
          question:
            "8. 위클리의 긋네이버스<세계 가정의 날> 기념 자선 화보 중 단체 사진 속 풍선에 쓰여 있는 문구를 고르시오.",
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
            "9. 2020년 7월 2일 Mnet<엠카운다운> 'Tag Me(@Me)'데뷔 무대의 이름으로 올바른 것을 고르시오.",
          answers: { a: "이수진", b: "지한", c: "조아", d: "먼데이" },
          correctAnswer: "a",
        },
        {
          srcimg:
            "https://pbs.twimg.com/media/E5r5b0wVcAIM7sF?format=png&name=120x120",
          question:
            "10. 1theK<이번 생은 처음> EP.2 에서'2층 침대'팀이 만난 돌물'라쿤'의 이름으로 올바른 것을 고르시오.",
          answers: { a: "초코", b: "보리", c: "모카", d: "라떼" },
          correctAnswer: "d",
        },
        {
          srcimg:
            "https://pbs.twimg.com/media/E5r4zDkVEAMiBuX?format=png&name=small",
          question:
            "11. 다음<weee:kloud> 장면 속 자막으로 들어갈 단어를 작성하시오.",
          answers: {
            a: "위클라우드",
            b: "보조개",
            c: "만능캐",
            d: "푹주기관차",
          },
          correctAnswer: "a",
        },
        {
          srcimg:
            "https://pbs.twimg.com/media/E5r5AdYVIAkWqxC?format=png&name=small",
          question:
            "12. 다음<주간연습실> 장면 속 가위바위보 게임에서 이긴 멤버의 이름을 작성하시오.",
          answers: { a: "이수진", b: "지한", c: "조아", d: "먼데이" },
          correctAnswer: "b",
        },
        {
          srcimg:
            "https://pbs.twimg.com/media/E5r5b0wVcAIM7sF?format=png&name=120x120",
          question:
            "13. 다음은 각 멤버의 생년월일로, 빈 칸에 들어갈 숫자의 합을 구하시오. ",
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
