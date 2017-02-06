var zdayJS = {
    emailValidationPattern: new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i),

    // Start Custom Checkboxes Script
    styledInputs:{
        container:'.checkbox',
        initStatusClass:'init',
        init:function(){
            var that = this;
            $(that.container).each(function(){
                if(!$(this).hasClass(that.initStatusClass)){
                    var input = $(this).children('input');
                    var label = $(this).find('label');
                    input.css({
                        position: 'absolute',
                        visibility: 'hidden'
                    });
                    if(!label.attr('for') || label.attr('for') != input.attr('id')){
                        label.on('click', function(){
                            input.click();
                        });
                    }
                    $(this).addClass(that.initStatusClass);
                }
            })
        }
    },
    //### End Custom Checkboxes Script

    // Start Countdown Script
    countdown: {
        container: '.countdown',
        init: function(){
            var that = this;
            if(!$(that.container).length) return false;
            var time = $('body').data('time');
            if(time){
                var date = new Date(Date.parse(time));
            } else {
                var date = new Date();
                date = new Date(date.getFullYear() + 1, 1 - 1, 1);
            }
            $(that.container).countdown({
                until: date,
                padZeroes: true
            });
        }
    },
    //### End Countdown Script

    // Start Custom Scrollbars Script for Content Blocks
    customScrollbar:{
        container:'.wrapper',
        scrollBlock: '.scroll-block',
        content: '.scroll-content',
        init:function(){
            var that = this;
            if(!$(that.container).length) return false;

            $(that.container).each(function(){
                var cur = $(this);
                that.sizes(cur);

                cur.find(that.scrollBlock).mCustomScrollbar({
                    theme:"dark",
                    axis:"y",
                    scrollInertia:300,
                    updateOnContentResize:true
                });
                $(window).on('resize', function(){
                    that.sizes(cur);
                })
            })

        },
        sizes: function(container){
            var that = this;
            if(window.innerWidth >= 768){
                var h = container.height();
                var contentH = container.find(that.content).height();
                if(contentH > h){
                    container.find(that.scrollBlock).css('height', h);
                } else {
                    container.find(that.scrollBlock).css('height', contentH);
                }
            } else {
                container.find(that.scrollBlock).removeAttr('style');
            }
        }
    },
    //### End Custom Scrollbars Script for Content Blocks

    // Start Script Of Navigation Between Screens
    navigation: {
        nextStepBtn: '.next-step',
        prevStepBtn: '.close',
        startBtn: '.logo',
        step: 0,
        stepsCount:3,
        animate: false,
        duration: 700,
        init:function(){
            var that = this;

            // set css3 animation duration for smooth scroll between screens
            $('#launch .socials, #launch .wrapper, #about, #feedback').attr('style',
                '-webkit-transition-duration: ' + that.duration + 'ms; ' +
                '-moz-transition-duration: ' + that.duration + 'ms; ' +
                '-ms-transition-duration: ' + that.duration + 'ms; ' +
                '-o-transition-duration: ' + that.duration + 'ms; ' +
                'transition-duration: ' + that.duration + 'ms;'
            )

            // start navigation on buttons click
            $(that.nextStepBtn).on('click', function(e){
                e.preventDefault();
                that.nextStep();
            })
            $(that.prevStepBtn).on('click', function(e){
                e.preventDefault();
                that.prevStep();
            })
            $(that.startBtn).on('click', function(e){
                e.preventDefault();
                that.step = 0;
                $('body').removeClass('show-about show-feedback');
            })

            // start navigation on mousewheel
            $('body').on('mousewheel', function(e){
                if(window.innerWidth >= 768){
                    e.preventDefault();
                    if(e.deltaY < 0){
                        that.nextStep();
                    }
                    if(e.deltaY > 0){
                        that.prevStep();
                    }
                }
            })

            // start navigation on keyboard
            $('body').on('keydown', function(e){
                if(window.innerWidth >= 768){
                    if(e.keyCode == 38){
                        e.preventDefault();
                        that.prevStep();
                    }
                    if(e.keyCode == 40){
                        e.preventDefault();
                        that.nextStep();
                    }
                }
            })

            // fix scrollTop on transition between small and middle screen's resolution
            var changeView = (window.innerWidth >= 768);
            $(window).on('resize', function(){
                if(window.innerWidth >= 768 && !changeView){
                    $(window).scrollTop(0);
                    that.step = 0;
                }
                changeView = (window.innerWidth >= 768);
            })
        },
        prevStep: function(){
            var that = this;
            if(that.step == 0) return false;
            if(!that.animate){
                that.step--;
                if(that.step == 0){
                    $('body').removeClass('show-about');
                }
                if(that.step == 1){
                    $('body').removeClass('show-feedback');
                    setTimeout(function(){
                        if(zdayJS.feedbackForm.send) zdayJS.feedbackForm.clear();
                    }, that.duration)
                }
                that.animate = true;
                setTimeout(function(){
                    that.animate = false;
                }, that.duration)
            }
        },
        nextStep: function(){
            var that = this;
            if(that.step == that.stepsCount - 1) return false;
            if(!that.animate){
                that.step++;
                if(that.step == 1){
                    $('body').addClass('show-about');
                }
                if(that.step == 2){
                    $('body').addClass('show-feedback');
                }
                that.animate = true;
                setTimeout(function(){
                    that.animate = false;
                }, that.duration)
            }
        }
    },
    //### End Script Of Navigation Between Screens

    // Start Settings Panel Script
    settingsPanel: {
        container: '#settings',
        select: '.select',
        customScroll:'.settings-scroll',
        toggleBtn:'.toggle',
        settings: {},
        initialised: false,
        init: function(){
            var that = this;

            that.defaultImageUrl = $('body').data('image-url');
            that.getInlineSettings();

            if($(that.container).length){
                //check cookies for saved settings
                that.getData();

                //calculate height and position of settings panel
                that.containerHeight = $(that.container).outerHeight();
                that.contentHeight = $(that.container).find('.content').outerHeight();
                that.setPanelStyle();

                $(window).on('resize', function(){
                    if(!that.contentHeight) that.contentHeight = $(that.container).find('.content').outerHeight();
                    that.containerHeight = $(that.container).outerHeight();
                    that.setPanelStyle()
                })

                //initialize custom scrollbar for panel
                that.scrollInit();

                // show/hide settings panel
                var click = false;
                $(that.container).find(that.toggleBtn).on('click', function(e){
                    e.preventDefault();
                    $(that.container).toggleClass('active');
                })
                $(that.container).on('click', function(){
                    click = true;
                })
                $('body').on('click', function(){
                    if(!click){
                        $(that.container).removeClass('active');
                    }
                    click = false;
                })

                //init panel's form data
                $(that.container).find('input').each(function(){
                    if($(this).attr('type') == 'checkbox'){
                        that.inputCheckboxChange($(this));
                    } else if($(this).attr('type') == 'text'){
                        that.inputTextChange($(this));
                    }
                })

                //change panel's form data
                $(that.container).find(that.select).each(function(){
                    var input = $(this).find('input');
                    var list = $(this).find('ul');
                    list.customSelect({
                        input: input,
                        onChange:function(data){
                            that.selectChange(data.value);
                            if(that.initialised) that.setData();
                            return true;
                        },
                        maxHeight:300
                    })
                })
                $(that.container).find('.applyBtn').on('click', function(){
                    var input = $(this).closest('.form-element').find('input');
                    that.inputTextChange(input, $(this));
                    that.setData();
                })
                $(that.container).find('input[type="checkbox"]').on('change', function(){
                    that.inputCheckboxChange($(this));
                    that.setData();
                })
                that.initialised = true;
            } else {
                if(that.defaultImageUrl){
                    that.setDefaultImage();
                }
            }
        },
        getInlineSettings:function(){
            var that = this;
            var bodyClasses = $('body').attr('class');
            if(bodyClasses && bodyClasses.length){
                var classesArray = bodyClasses.split(' ');
                for(var i = 0; i < classesArray.length; i++){
                    if(classesArray[i].search('hidden-block') != -1){
                        var name = classesArray[i].replace('hidden-block-', '');
                        if($(that.container).length) {
                            if(name == 'data-1'){
                                $(that.container).find('[data-parameter="' + name + '"]').attr('checked', true);
                            } else {
                                $(that.container).find('[data-parameter="' + name + '"]').attr('checked', false)
                            }
                        } else {
                            console.log(name);
                            if(name != 'data-1') $('.' + name).hide();
                        }
                    } else if(classesArray[i] == 'black-header'){
                        $(that.container).find('[data-parameter="data-0"]').val('black');
                    } else if(classesArray[i] == 'disable-feedback'){
                        $(that.container).find('[data-parameter="data-8"]').attr('checked', false);
                    }
                }
            }
        },
        setPanelStyle:function(){
            var that = this;
            if(window.innerWidth >= 768){
                if(that.contentHeight > that.containerHeight){
                    $(that.container).find('.content').css({
                        'height': that.containerHeight,
                        'margin-top': -that.containerHeight/2
                    });
                } else {
                    $(that.container).find('.content').css({
                        'height': that.contentHeight,
                        'margin-top': -that.contentHeight/2
                    });
                }
            } else {
                $(that.container).find('.content').removeAttr('style');
            }

        },
        scrollInit:function(){
            var that = this;
            $(that.container).find(that.customScroll).mCustomScrollbar({
                theme:"lite",
                axis:"y",
                scrollInertia:300,
                updateOnContentResize:true,
                keyboard: {
                    enable: true
                }
            });
        },
        setData:function(){
            var that = this;
            $(that.container).find('input').each(function(){
                var n = $(this).data('parameter');
                if($(this).is('input[type="checkbox"]')){
                    if($(this).is(":checked")){
                        that.settings[n] = true;
                    } else {
                        that.settings[n] = false;
                    }
                } else {
                    var val = $(this).val();
                    that.settings[n] = val;
                }
            })
            $.cookie('ZDay-Theme', JSON.stringify(that.settings));
        },
        getData: function(){
            var that = this;
            if($.cookie('ZDay-Theme')){
                var settings = $.parseJSON($.cookie('ZDay-Theme'));
                $(that.container).find('input').each(function(){
                    var n = $(this).data('parameter');
                    if($(this).is('input[type="checkbox"]')){
                        $(this).attr('checked', settings[n]);
                    } else {
                        $(this).val(settings[n]);
                    }
                })
                that.settings = settings;
            }
        },
        selectChange:function(val){
            var that = this;
            if(val == 'black'){
                $('body').addClass('black-header');
            } else {
                $('body').removeClass('black-header');
            }
        },
        setDefaultImage:function(){
            var that = this;
            var img = new Image();
            img.src = that.defaultImageUrl;
            img.onload = function(){
                $('#launch .bg .img').css('background-image', 'url(' + that.defaultImageUrl + ')');
            }
        },
        inputTextChange:function(input, applyBtn){
            var that = this;
            var url = input.val();
            var name = input.attr('name');

            if(name == 'bg-image'){
                if(url && url.length){
                    if(applyBtn) applyBtn.addClass('load');
                    var img = new Image();
                    img.src = url;
                    img.onload = function(){
                        $('#launch .bg .img').css('background-image', 'url(' + url + ')');
                        if(applyBtn) applyBtn.removeClass('load');
                    }
                } else if(that.defaultImageUrl){
                    that.setDefaultImage();
                } else {
                    $('#launch .bg .img').removeAttr('style');
                }
            }
            if(name == 'bg-video'){
                if(url && url.length){
                    if(applyBtn) applyBtn.addClass('load');
                    zdayJS.video.setVideo(url);
                } else if(zdayJS.video.defaultUrl) {
                    zdayJS.video.setVideo(zdayJS.video.defaultUrl);
                } else {
                    zdayJS.video.destroy();
                }
            }
        },
        inputCheckboxChange:function(input){
            var that = this;
            var name = input.attr('name');
            var data = input.data('parameter');

            switch (name) {
                case 'bg-video-mute':
                    if(input.is(':checked')){
                        zdayJS.video.muteVideo();
                    } else {
                        zdayJS.video.unmuteVideo();
                    }
                    break
                case 'hidden-block':
                    if(input.is(':checked')){
                        $('body').addClass(name + '-' + data);
                    } else {
                        $('body').removeClass(name + '-' + data);
                    }
                    if(that.initialised) $(window).trigger('resize');
                    break;
                case 'visible-block':
                    if(input.is(':checked')){
                        $('.' + data).fadeIn(300);
                        if(that.initialised) $(window).trigger('resize');
                    } else {
                        $('.' + data).fadeOut(300, function(){
                            if(that.initialised) $(window).trigger('resize');
                        });
                    }
                    break;
                case 'enable-feedback':
                    var nav = zdayJS.navigation;
                    if(input.is(':checked')){
                        $('body').removeClass('disable-feedback');
                        nav.stepsCount = 3;
                    } else {
                        nav.stepsCount = 2;
                        if(nav.step == 2) nav.prevStep();
                        setTimeout(function(){
                            $('body').addClass('disable-feedback');
                        }, nav.duration)
                    }
                    break;
            }
        }
    },
    //### End Settings Panel Script

    // Start Script Of Background Video
    video: {
        container: '#launch .bg .video',
        enable: true,
        mute: false,
        init: function(){
            var that = this;
            if($('body').data('video-url')){
                that.defaultUrl = that.url = $('body').data('video-url');
            }
            if(typeof $('body').data('mute') != 'undefined'){
                that.mute = $('body').data('mute');
                if($(zdayJS.settingsPanel.container).length) $(zdayJS.settingsPanel.container).find('[data-parameter="data-4"]').attr('checked', that.mute);
            }
            that.getVideoThumbnail();
            that.checkSmallScreen();
            $(window).on('resize', function(){
                that.checkSmallScreen();
            })
        },
        checkSmallScreen:function(){
            var that = this;
            if(window.innerWidth < 768){
                that.enable = false;
                $('body').addClass('image-bg no-bg-video').removeClass('video-bg');
                if(that.player) that.player.stopVideo();
            } else {
                that.enable = true;
                $('body').removeClass('image-bg no-bg-video');
                if(that.player) {
                    that.player.playVideo();
                } else {
                    that.setVideo(zdayJS.settingsPanel.settings['data-3'])
                }
            }
        },
        getVideoThumbnail:function(){
            var that = this;
            if(that.url){
                that.videoId = that.parser();
                if(that.videoId){
                    that.videoScreenUrl = 'http://img.youtube.com/vi/' + that.videoId + '/maxresdefault.jpg';
                    $('body').data('imageUrl', that.videoScreenUrl);
                }
            }

        },
        setVideo: function(url){
            var that = this;
            if(!that.enable) return false;
            if(url) that.url = url;
            if(that.url){
                if($(zdayJS.settingsPanel.container).length){
                    that.mute = $(zdayJS.settingsPanel.container).find('[data-parameter="data-4"]').is(':checked');
                }
                that.createVideo();
            } else {
                $('body').addClass('image-bg').removeClass('video-bg');
            }
        },
        createVideo: function(){
            var that = this;
            if(!that.player){
                that.videoWrapper = $('<div class="videoWrapper" />');
                var videoBlock = $('<div id="video" />');
                that.videoWrapper.html(videoBlock);
                $(that.container).html(that.videoWrapper);
                $(window).on('resize', function(){
                    that.calculateSizes();
                })
            }

            that.videoId = that.parser();
            if(that.videoId){
                window.getVideoInfo = function(data){
                    that.videoInfo = data;
                    that.setSizes();
                    that.renderVideo();
                }

                var videoInfoUrl = 'http://gdata.youtube.com/feeds/api/videos/' + that.videoId + '?v=3&alt=jsonc&callback=getVideoInfo';

                $('#videoInfo').remove();
                var script = $('<script src="' + videoInfoUrl + '" id="videoInfo"></script>');
                $('body').append(script);
            }
        },
        setSizes:function(){
            var that = this;
            // var aspectRatio = that.videoInfo.data.aspectRatio;
            // if(aspectRatio == 'widescreen') {
                that.aspectRatio = 16/9;
            // } else {
            //     that.aspectRatio = 4/3;
            // }
            // that.calculateSizes();
            console.log(that.calculateSizes());
        },
        calculateSizes:function(){
            var that = this;
            var containerWidth = $(that.container).width();
            var containerHeight = $(that.container).height();
            var containerAspectRation = containerWidth/containerHeight;

            var style = {
                position: 'absolute',
                left: '50%',
                top: '50%'
            };
            if(containerAspectRation > that.aspectRatio){
                style.width = containerWidth + 20;
                style.height = Math.ceil(style.width/that.aspectRatio);
            } else {
                style.height = containerHeight + 20;
                style.width = Math.ceil(style.height*that.aspectRatio);
            }
            style.marginTop = -style.height/2;
            style.marginLeft = -style.width/2;
            that.videoWrapper.css(style);
        },
        renderVideo:function(){
            var that = this;
            if(!that.player){
                var script = $('<script id="yt-iframe" src="https://www.youtube.com/iframe_api"></script>');
                $('body').append(script);

                window.onYouTubeIframeAPIReady = function() {
                    that.player = new YT.Player('video', {
                        width: '100%',
                        height: '100%',
                        videoId: that.videoId,
                        playerVars: {
                            modestbranding: 1,
                            controls: 0,
                            showinfo: 0,
                            rel:0,
                            wmode: 'transparent',
                            iv_load_policy: 3
                        },
                        events: {
                            'onReady': function(){
                                if(that.mute) that.player.mute();
                                that.player.playVideo();
                            },
                            'onStateChange': function(state){
                                if(state.data === 1){
                                    $('body').addClass('video-bg');
                                    $(zdayJS.settingsPanel.container).find('.applyBtn.load').removeClass('load');
                                }
                                if(state.data === 0){
                                    that.player.playVideo();
                                }
                            }
                        }
                    });
                }
            } else {
                that.player.loadVideoById(that.videoId);
            }

        },
        muteVideo: function(){
            var that = this;
            if(that.player && !that.player.isMuted()) {
                that.player.mute();
            }
        },
        unmuteVideo: function(){
            var that = this;
            if(that.player && that.player.isMuted()) {
                that.player.unMute()
            }
        },
        parser: function(){
            var that = this;
            var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
            var match = that.url.match(regExp);
            if(match && match[7].length == 11){
                return match[7];
            } else {
                return false;
            }
        },
        destroy: function(){
            var that = this;
            if(that.player) {
                if(that.defaultUrl){
                    that.init();
                } else {
                    that.player.destroy();
                    $('body').removeClass('video-bg').addClass('image-bg');
                }
            }
        }
    },
    //### End Script Of Background Video

    // Start Script Of Feedback Form
    feedbackForm: {
        container: '#feedback',
        contentBlock: '.scroll-block',
        successBlock: '.success-block',
        errorBlock: '.error-block',
        send: false,
        init: function(){
            var that = this;
            $(that.container).find('form').on('submit', function(e) {
                e.preventDefault();
                if(!that.isValidForm()) return false;

                $(that.container).find(that.contentBlock).fadeTo(300, 0);
                var data = $(this).serialize();
                $.ajax({
                    url: "send-form-email.php",
                    type: "post",
                    dataType : "json",
                    data: data,
                    success: function() {
                        setTimeout(function(){
                            $(that.container).find(that.successBlock).fadeIn(300);
                            that.formSend();
                        }, 300)
                    },
                    error: function() {
                        setTimeout(function(){
                            $(that.container).find(that.errorBlock).fadeIn(300);
                            that.formSend();
                        }, 300)
                    }
                });
                return false;
            });
        },
        formSend: function(){
            var that = this;
            that.send = true;
            if(window.innerWidth < 768){
                $('body, html').animate({scrollTop: $(that.container).offset().top}, 500);
            }
            setTimeout(function(){
                that.clear();
            }, 10000)
        },
        clear: function(){
            var that = this;
            $(that.container).find('form')[0].reset();
            $(that.container).find(that.successBlock).hide();
            $(that.container).find(that.errorBlock).hide();
            $(that.container).find(that.contentBlock).fadeTo(0, 1);
        },
        isValidEmail: function() {
            var that = this;
            var input = $(that.container).find('[name="email"]');
            input.removeClass('error');
            if(zdayJS.emailValidationPattern.test(input.val())){ // valid
                return true;
            } else { // error
                input.addClass("error");
                return false;
            }
        },
        isValidName: function() {
            var that = this;
            var input = $(that.container).find('[name="name"]');
            input.removeClass('error');
            if(input.val().length > 0){ // valid
                return true
            } else { // error
                input.addClass("error");
                return false;
            }
        },
        isValidComment: function() {
            var that = this;
            var input = $(that.container).find('[name="message"]');
            input.removeClass('error');
            if(input.val().length > 0){ // valid
                return true
            } else { // error
                input.addClass("error");
                return false;
            }
        },
        isValidForm: function() {
            var that = this;
            var result = true;
            if (!that.isValidName()) result = false;
            if (!that.isValidEmail()) result = false;
            if (!that.isValidComment()) result = false;
            return result;
        }
    },
    //### End Script Of Feedback Form

    // Start Script Of Subscribe Form
    subscribeForm: {
        container: '.subscribe',
        successBlock: '.success-block',
        errorBlock: '.error-block',
        init: function(){
            var that = this;
            $(that.container).find('form').on('submit', function(e) {
                e.preventDefault();
                $(that.container).find(that.successBlock).hide();
                $(that.container).find(that.errorBlock).hide();
                if(!that.isValidEmail()) {
                    $(that.container).find(that.errorBlock).fadeIn(300);
                    return false;
                } else {
                    $(that.container).find(that.successBlock).fadeIn(300);
                }
            })
        },
        isValidEmail: function() {
            var that = this;
            var input = $(that.container).find('[name="email"]');
            input.removeClass('error');
            if(zdayJS.emailValidationPattern.test(input.val())){ // valid
                return true;
            } else { // error
                input.addClass("error");
                return false;
            }
        }
    }
    //### End Script Of Subscribe Form
}

// Initialize scripts on document ready
$(function(){
    with(zdayJS){
        video.init();
        settingsPanel.init();
        styledInputs.init();
        countdown.init();
        customScrollbar.init();
        navigation.init();
        feedbackForm.init();
        subscribeForm.init();
    }
})

$(window).on('load', function(){
    setTimeout(function(){

        // Hide preloader
        $('#load').fadeOut(300);

        // Show settings panel
        $(zdayJS.settingsPanel.container).addClass('active');

    }, 1000)
})