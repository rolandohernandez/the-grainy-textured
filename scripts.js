(function () {
    // Selection
    let selections = [];

    $('.character').on('click', function () {
        $(this).toggleClass('active');

        if (selections.includes(this)) {
            selections.splice(selections.indexOf(this), 1);
        } else {
            selections.push(this);
            if (selections.length > 5) {
                var remove = selections.shift();
                $(remove).toggleClass('active');
            }
        }
    });

    // Player
    var player = document.querySelector('#player');
    var games = document.querySelectorAll('.game');

    games.forEach(game => {
        game.onclick = function () {
            var dataAudio = this.getAttribute('data-audio');
            if (player.getAttribute('data-playing') != dataAudio) {
                player.setAttribute('data-playing', dataAudio);
                player.src = 'audios/' + dataAudio;
            }

            var activeEl = document.querySelector('.game.is-active');
            if (activeEl) activeEl.classList.remove('is-active');

            if (player.paused) {
                player.play();
                this.classList.add('is-active');
            } else {
                player.pause()
            }
        };
    });
})();