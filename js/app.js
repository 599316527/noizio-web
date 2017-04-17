
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
        },

        openOverlay: function (evt) {
            evt.preventDefault();
            this.$$.overlay.style.display = ''
        },
        closeOverlay: function (evt) {
            evt.preventDefault();
            this.$$.overlay.style.display = 'none'
        }
    }
});



var onResize = function () {
    var doc = document.documentElement;
    doc.className = doc.scrollHeight > doc.clientHeight ? 'fixed-banner' : '';
};
window.addEventListener('resize', onResize, false);
onResize();





