let app = new Vue({
  el: "#app",
  data: {
    settings: false,
    seconds: 10,
    step: 0,
    cap: 5,
    words: [
      {
        Слово: "to back up (backup)",
        Перевод: "выполнять резервное копирование"
      },
      {
        Слово: "to boot",
        Перевод:
          "загружать, загружаться (например, об устройстве или операционной системе)"
      },
      {
        Слово: "to burn",
        Перевод: "записывать на оптический диск"
      }
    ]
  },
  mounted() {
    this.words = dictWords;
  },
  created() {
    let timerId = setInterval(() => this.nextStep(), this.seconds * 1000);
  },
  computed: {
    showWords() {
      return this.words.slice(
        this.step * this.cap,
        (this.step + 1) * this.cap + 1
      );
    },
    current() {
      return this.step * this.cap;
    }
  },
  methods: {
    nextStep() {
      let length = this.words.length;
      this.step++;
      if (this.current + 1 > length) {
        this.step = 0;
      }
    }
  }
});
