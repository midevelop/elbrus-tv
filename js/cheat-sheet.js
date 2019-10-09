let app = new Vue({
  el: "#app",
  data: {
    step: 0,
    seconds: 120,
    pages: [{}],
    nextUrl: "tv.html"
  },
  mounted() {
    this.pages = linksCheatScheets;
  },
  created() {
    let timerId = setInterval(() => this.nextStep(), this.seconds * 1000);
  },
  computed: {
    currentPage() {
      return this.pages[this.step];
    }
  },
  methods: {
    nextStep() {
      this.step++;
      console.log();
      if (this.step + 1 > this.pages.length) {
        this.changePage();
        this.step = 0;
      }
    },
    changePage() {
      document.location.href = this.nextUrl;
    }
  }
});
