$(document).ready(function () {

    KEY = grabmykey();
    ID = grabmykey2();




    $.ajax({
        // url: "https://www.googleapis.com/youtube/v3/activities?part=snippet&channelId="+ID+"&key="+KEY,
        url: 'https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=' + ID + '&key=' + KEY,
        method: "GET",
        contentType: 'application/json'
    }).then(function (obj) {

        $("#sub_youtube").attr("data-to", obj.items["0"].statistics.subscriberCount);
        $("#video_youtube").attr("data-to", obj.items["0"].statistics.videoCount);
        $("#views_youtube").attr("data-to", obj.items["0"].statistics.viewCount);

    });


    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://www.melhorterapia.com.br/api/instagram",
        method: "GET"
    }).then(function (obj) {
        console.log(obj.subscriberCount)
        if (obj.subscriberCount * 1 > 0) {
            $("#sub_insta").attr("data-to", obj.subscriberCount * 1);
        }
        else {
            $("#sub_insta").attr("data-to", 1958);
        }
    });


    // $.ajax({
    //     url: "https://cors-anywhere.herokuapp.com/https://www.instagram.com/web/search/topsearch/?query=@melhorterapia",
    //     method: "GET",
    //     contentType: 'application/json'
    // }).then(function (obj) {

    //     // console.log(obj.users);

    //     for (i = 0; i < obj.users.length; i++) {
    //         if (obj.users[i].user.pk == 13597872114 && obj.users[i].user.follower_count * 1 > 0) {
    //             $("#sub_insta").attr("data-to", obj.users[i].user.follower_count * 1);
    //             // console.log(obj.users[i].user.follower_count);
    //         }
    //         else {
    //             $("#sub_insta").attr("data-to", 1959);
    //         }
    //     }
    // });





    $(function () {
        $("nav").prepend('<div class="overlay"></div>');

        $('#dismiss, .overlay').on('click', function () {
            $('#navbar-sidebar').removeClass('active');
            $('.overlay').removeClass('active');
        });

        $('#sidebarCollapse').on('click', function () {
            $('#navbar-sidebar').addClass('active');
            $('.collapse.in').toggleClass('in');
            $('.overlay').addClass('active');
        });
    });



    $(function () {
        var $window = $(window);
        var $targets = $('nav');

        $window.on('scroll', function () {

            var position = 0;
            var windowBottom = position + 1; // trigger at middle of window

            // loop through targets to see if any are in view...
            $targets.each(function (i) {
                var $this = $(this);
                var thisPos = $this.offset().top;

                if (windowBottom > thisPos) {
                    $('nav').removeClass('scrolled');
                }
                else {
                    $('nav').addClass('scrolled');
                }
            });
        });
    });




    $(function () {
        var $window = $(window);
        var $targets = $('#hidden');
        var windowHeight = $window.height();
        var runcheck = false;

        $window.on('scroll', function () {
            var position = $window.scrollTop();
            var windowBottom = position + (windowHeight / 2) + 150; // trigger at middle of window

            // loop through targets to see if any are in view...
            $targets.each(function (i) {
                var $this = $(this);
                var thisPos = $this.offset().top;

                if (windowBottom > thisPos && runcheck == false) {
                    runcheck = true;

                    jQuery(function ($) {
                        // custom formatting example
                        $('.count-number').data('countToOptions', {
                            formatter: function (value, options) {
                                return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
                            }
                        });

                        // start all the timers
                        $('.timer').each(count);

                        function count(options) {
                            var $this = $(this);
                            options = $.extend({}, options || {}, $this.data('countToOptions') || {});
                            $this.countTo(options);
                        }
                    });

                    (function ($) {
                        $.fn.countTo = function (options) {
                            options = options || {};

                            return $(this).each(function () {
                                // set options for current element
                                var settings = $.extend({}, $.fn.countTo.defaults, {
                                    from: $(this).data('from'),
                                    to: $(this).data('to'),
                                    speed: $(this).data('speed'),
                                    refreshInterval: $(this).data('refresh-interval'),
                                    decimals: $(this).data('decimals')
                                }, options);

                                // how many times to update the value, and how much to increment the value on each update
                                var loops = Math.ceil(settings.speed / settings.refreshInterval),
                                    increment = (settings.to - settings.from) / loops;

                                // references & variables that will change with each update
                                var self = this,
                                    $self = $(this),
                                    loopCount = 0,
                                    value = settings.from,
                                    data = $self.data('countTo') || {};

                                $self.data('countTo', data);

                                // if an existing interval can be found, clear it first
                                if (data.interval) {
                                    clearInterval(data.interval);
                                }
                                data.interval = setInterval(updateTimer, settings.refreshInterval);

                                // initialize the element with the starting value
                                render(value);

                                function updateTimer() {
                                    value += increment;
                                    loopCount++;

                                    render(value);

                                    if (typeof (settings.onUpdate) == 'function') {
                                        settings.onUpdate.call(self, value);
                                    }

                                    if (loopCount >= loops) {
                                        // remove the interval
                                        $self.removeData('countTo');
                                        clearInterval(data.interval);
                                        value = settings.to;

                                        if (typeof (settings.onComplete) == 'function') {
                                            settings.onComplete.call(self, value);
                                        }
                                    }
                                }

                                function render(value) {
                                    var formattedValue = settings.formatter.call(self, value, settings);
                                    $self.html(formattedValue);
                                }
                            });
                        };

                        $.fn.countTo.defaults = {
                            from: 0,               // the number the element should start at
                            to: 0,                 // the number the element should end at
                            speed: 1000,           // how long it should take to count between the target numbers
                            refreshInterval: 100,  // how often the element should be updated
                            decimals: 0,           // the number of decimal places to show
                            formatter: formatter,  // handler for formatting the value before rendering
                            onUpdate: null,        // callback method for every time the element is updated
                            onComplete: null       // callback method for when the element finishes updating
                        };

                        function formatter(value, settings) {
                            return value.toFixed(settings.decimals);
                        }
                    }(jQuery));

                }
            });
        });
    });



    function grabmykey() {
        p1 = "KSzaCyN-SQxbXZKB9oB";
        p2 = "7fGQywc7xDRatvDWh1GK";

        p1 = encrypt(p1, -10);
        p2 = encrypt(p2, -10);

        return p1 + "" + p2

    };

    function grabmykey2() {
        p1 = "EMswAwV4AyUp";
        p2 = "59zg2k1mksdA";

        p1 = encrypt(p1, -10);
        p2 = encrypt(p2, -10);

        return p1 + "" + p2

    };

    function encrypt(msg, key) {
        var encMsg = "";

        for (var i = 0; i < msg.length; i++) {
            var code = msg.charCodeAt(i);

            // Encrypt only letters in 'A' ... 'Z' interval
            if (code >= 65 && code <= 65 + 26 - 1) {
                code -= 65;
                code = mod(code + key, 26);
                code += 65;
            }

            encMsg += String.fromCharCode(code);
        }

        return encMsg;
    }

    function mod(n, p) {
        if (n < 0)
            n = p - Math.abs(n) % p;

        return n % p;
    }

});