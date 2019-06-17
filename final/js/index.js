$(() => {

    $('.start').click(function() {
            $(this).stop().fadeOut(100)
            $('.user').stop().fadeOut(100)
            $('.titleHit').stop().fadeOut(100)
            $('.countdown').show()
            $('.score').show()
            $('.speed').show()
            time()
            scoring()
            $BGM = "<audio src='../music/mix_32s (audio-joiner.com) (mp3cut.net) (3).mp3' autoplay='autoplay'></audio>"
            $('body').append($BGM)
        })
        // $('.again').click(function() {
        //     $(this).css('cursor', 'pointer')
        //     $(this).stop().fadeOut(100);
        //     $('.holeArea').html('<h1>GAME OVER !' + '<br>' + $('.user').val() + ',' + 'You get ' + score + ' points !</h1>').hide()
        //     $('.again').hide
        //     time()
        //     clearInterval(time)

    //     parseInt($('.score span').html()) = 0
    //     scoring()
    // })


    function time() {
        var randomPic = Math.ceil(Math.random() * 5)
        var hole = "<div class='hole'><img src='../img/image" + randomPic + ".png' alt=''width='130px' / ></div>"
        var holeNum = 18
        for (var i = 0; i < holeNum; i++) {
            $('.holeArea').append(hole)
        }
        $('.holeArea').show()
        $('.hole').show()


        function numbering(m, n) {
            var array = []
            for (var i = m; i <= n; i++) {
                array.push(i);
            }
            return array
        }

        var $speed = 500

        var time = setInterval(function() {
            // $('.add').click(function() {
            //     $speed = +($speed - 100)
            //     console.log("kkkk")
            // })
            // $('.minus').click(function() {
            //     $speed = +($speed + 100)
            //     console.log("lllll")
            // })$speed加不出來.....
            var alienNum = Math.ceil(Math.random() * 4)
            var randomPic = Math.ceil(Math.random() * 5)
            var holeArr = numbering(0, 18)
            for (var i = 0; i < alienNum; i++) {
                var randNum = Math.floor(Math.random() * holeArr.length)
                var alien = $('img').eq(holeArr.splice(randNum, 1)).attr('src', '../img/image' + randomPic + '.png')
                    // splice()函数用於將randNum數組中的一個數字進行剔除並返回該值
                if (alien.is(':hidden')) {
                    alien.fadeIn(100, function() {
                        $(this).delay(1000).fadeOut()
                    })
                }
            }
        }, $speed)
    }

    function scoring() {
        var score = parseInt($('.score span').html())


        $(".hole img").click(function() {
            $('.holeArea').append("<audio src='../music/laser1.mp3' autoplay='autoplay'></audio>")
            var point0 = 'point'
            var points = 'points'

            score++
            if (score <= 1) {
                $('.score span').html(score + '&nbsp' + point0)
            } else {
                $('.score span').html(score + '&nbsp' + points)
            }
            $(this).hide()
        })
        var second = 30
        var seconds = 'seconds'
        var second0 = 'second'
        var time2 = setInterval(function() {
            second -= 1
            if (second > 1) {
                $('.countdown span').html(second + '&nbsp' + seconds)
                $('.holeArea').attr('id', 'cursor')
            } else if (second == 1) {
                $('.countdown span').html('1' + '&nbsp' + second0)
            } else {

                clearInterval(time)

                $('.countdown span').html('0' + '&nbsp' + second0)

                $('.holeArea').html('<h1>GAME OVER !' + '<br>' + $('.user').val() + ',' + 'You get ' + score + ' points !</h1>')
                $('.again').show()



            }

        }, 1000)


        $(".holeArea").css('cursor', 'url("../img/superRocket_resized (3).png"),move')
    }


})