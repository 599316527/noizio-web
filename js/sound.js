
if (!window.NOIZIO) {
    window.NOIZIO = {};
}

NOIZIO.SoundComponent = Vue.component('sound', {
    template: '' +
'<div class="sound">' +
    '<div class="icon{{disabled ? \' icon-disabled\' : \'\'}}" ' +
        'v-on="click: enableToggle" ' +
        'style="background-image: url(res/icon/{{id}}.png)"></div>' +
    '<div class="main">' +
        '<div class="name">{{name}}</div>' +
        '<div><input class="volume" type="range" min="0" max="1" ' +
            'step="0.01" value="{{volume}}" ' +
            'v-el="volume" v-on="change: volumeChange" /></div>' +
        '<audio src="res/audio/{{id}}.m4a" loop v-el="audio"></audio>' +
    '</div>' +
'</div>',
    data: function () {
        return {
            disabled: true,
            volume: .8
        }
    },
    methods: {
        enableToggle: function () {
            this.disabled = !this.disabled;
            if (this.disabled) {
                this.pause();
            } else if (this.$parent.isPlaying) {
                this.play();
            }
        },
        volumeChange: function () {
            this.$$.audio.volume = parseFloat(this.$$.volume.value, 10);
        },
        play: function () {
            if (!this.disabled) {
                this.$$.audio.play();
            }
        },
        pause: function () {
            this.$$.audio.pause();
        }
    },
    ready: function () {
        this.$$.audio.volume = this.volume;
    }
});

