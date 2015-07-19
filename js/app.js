
if (!window.NOIZIO) {
    window.NOIZIO = {};
}

NOIZIO.homeView = new Vue({
    el: '#home',
    data: {
        isPlaying: false,
        sounds: NOIZIO.sounds,
    },
    methods: {
        playToggle: function (evt) {
            evt.preventDefault();
            this.isPlaying ? this.pause() : this.play();
            this.isPlaying = !this.isPlaying;
        },
        play: function () {
            this.$children.forEach(function (sound) {
                sound.play();
            });
        },
        pause: function () {
            this.$children.forEach(function (sound) {
                sound.pause();
            });
        }
    }
});
