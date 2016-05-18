< style >
    .sidebar {
        background: rgba(0, 0, 0, .5);
        border: 1 px solid# fff;
        width: 100 % ;
        height: 90 % ;
        box - shadow: 0 10 px 10 px rgba(0, 0, 0, .25);
        transition: all linear.25 s;
        z - index: 1;
    }

.sidebar: hover {
    transition: all linear.75;
    box - shadow: 0 7 px 1 px rgba(0, 0, 0, .25);
}

.affix - top,
    .affix {
        position: static;
    }

.inputBox {
    width: 50 % ;
    height: 40 px;
    color: #000;
        padding: 10px;
        border: solid 1px rgba(0, 0, 0, .25);
        box-shadow: inset 0 0 0 1px # 707070;
    transition: box - shadow 0.3 s,
    border 0.3 s;
    margin - bottom: 10 px;
    vertical - align: middle;
    margin: 0 auto;
    /* margin-top: 120px; */
    display: inline;
    /* float: right; */
}

.inputBox: focus,
    .inputBox input[type = "text"].focus {
        border: solid 1 px rgba(0, 0, 0, .50);
    }

@
media(min - width: 990 px) {
    .container {
        width: 95 % ;
    }
    .sidebar.affix - top {
            position: static;
            /*   margin-top: 30px;  */
            width: 228 px;
        }
        .sidebar.affix {
            position: fixed;
            top: 5 % ;
            width: 228 px;
        }
        .socialDataWrapper {
            position: static;
            margin - top: 0 px;
            z - index: -1;
        }
        .displayFlex {
            display: flex;
            flex - direction: column;
            justify - content: center;
        }
        .searchIconSideBar {
            width: 15 % ;
            margin: 15 px;
        }
        .socialIconSideBar {
            width: 15 % ;
            margin: 10 px;
        }
}

@
media(max - width: 1200 px) {
    .container {
        width: 100 % ;
    }
    .sidebar.affix - top {
            position: relative;
            margin - top: 30 px;
            width: 100 % ;
        }
        .sidebar.affix {
            position: relative;
            top: 5 % ;
            width: 100 % ;
            margin - top: 50 px;
        }
        .custom - dropdown.open {
            margin: 0 auto;
        }
        .socialDataWrapper {
            position: static;
            margin - top: 250 px;
            z - index: -1;
        }
        .displayFlex {
            display: flex;
            flex - direction: row;
            justify - content: center;
        }
        .searchIconSideBar {
            width: 10 % ;
            margin: 15 px;
        }
        .socialIconSideBar {
            width: 10 % ;
            margin: 10 px;
        }
}

.beaker {
    width: 100 % ;
    height: 100 % ;
}

.primaryDropDownText {
    /* display: inline-block; */
    margin: 10 px;
    white - space: nowrap;
}
/*--***** DROPDOWN STYLES *****--*/
/*--***** DROPDOWN STYLES *****--*/
/*--***** DROPDOWN STYLES *****--*/
/*--***** DROPDOWN STYLES *****--*/
/*--***** DROPDOWN STYLES *****--*/

.custom - dropdown {
    width: 100 % ;
    height: auto;
    min - height: auto;
    cursor: pointer;
    line - height: 50 px;
    display: block;
    margin - bottom: 25 px;
    margin - top: 25 px;
    box - shadow: 0 10 px 10 px rgba(0, 0, 0, .25);
    text - shadow: 0 1 px 3 px rgba(0, 0, 0, .25);
    background: rgba(0, 45, 114, .07);
    border: 1 px solid rgba(0, 163, 224, .37);
    /* border-radius: 7px; */
}

.custom - dropdown: hover {
    box - shadow: 0 7 px 1 px rgba(0, 0, 0, .25);
    text - decoration: none;
    color: #fff;
    transition: all linear.50 s;
}

.custom - dropdown a {
    color: rgba(255, 255, 255, .95);
}

.custom - dropdown.active a,
    .custom - dropdown.active a: hover,
    .custom - dropdown.active a: focus {
        color: #ffffff;
        background - color: red;
    }

.custom - dropdown a: hover,
    .custom - dropdown a: focus {
        text - decoration: none;
    }

.custom - dropdown.open a,
    .custom - dropdown.open a: hover,
    .custom - dropdown.open a: focus {
        background - color: transparent;
        text - decoration: none;
    }

.custom - dropdown.icon - bar {
    border: 1 px solid# fff;
}

.custom - dropdown.open li a {
        margin: 0 auto;
        color: #428bca;
    }
    
    .custom-dropdown .open {
        /*
        color: # 428 bca;
        color: #fff;
        background: #428bca;
        */
    }
</style>
<!-- -->
<div class= "container"
        ng - hide = "!hideThisDiv" >

        < div class = "leftCol" >
        < ul class = "nav nav-stacked sidebar"
        id = "sidebar" >
        < div class = "beaker displayFlex" >
        < div class = "col-sm-12 col-lg-12 col-md-12" >

        < div class = "custom-dropdown" >
        < div class = "col-xs-12 col-sm-12 col-lg-12 col-md-12" >
        < img class = "searchIconSideBar"
        src = "../img/svg/search.svg" >
        < input class = "inputBox"
        type = "text"
        placeholder = "#search"
        ng - model = "inputSearchTweetsAndInstagramQuery"
        ng - change = "getIgandTwitterApiData()" >
        < /div>

        < div class = "dropdown" >
        < img class = "socialIconSideBar"
        src = "../img/svg/twitter.svg" >
        < a class = "dropdown-toggle"
        id = "drop1"
        data - toggle = "dropdown"
        href = "#"
        role = "button" >
        < span class = "primaryDropDownText" >
        < span > {
            {
                getTwitterDropDownText(getTwitterDropDownNumber)
            }
        } < /span> < b class = "caret" > < /b> < /span>

        < /a>

        < ul class = "dropdown-menu"
        role = "menu"
        aria - labelledby = "drop1" >
        < li role = "presentation" >
        < a role = "menuitem"
        ng - click = getTwitterDropDownText(1) > < span > user timeline < /span></a >
        < a role = "menuitem"
        ng - click = getTwitterDropDownText(2) > < span > search tweets < /span></a >
        < a role = "menuitem"
        ng - click = getTwitterDropDownText(3) > < span > coming soon < /span></a >
        < /li> < /ul>



        < /div> < /div> < /div>


        < /div> < /ul> < /div> < /div>


        < script >
        $(function () {

            var stickyLine = document.querySelector('.stickyLine');
            var stickyLinePosition = stickyLine.getBoundingClientRect().top;

            // console.log(stickyLinePosition)

            $('.sidebar').affix({
                offset: {
                    top: -10
                }
            });

            var $body = $(document.body);
            var navHeight = $('.navbar').outerHeight(true) + 10;

            $body.scrollspy({
                target: '.leftCol',
                offset: navHeight
            });

            var instaCardWidth = $('.igCard').width();
            var tweetCardWidth = $('.cardImage').width();
            var theWhiteLineWidth = $('.theWhiteLine').width();

            function sidebarResize() {

                instaCardWidth = $('.igCard').width();
                tweetCardWidth = $('.cardImage').width();
                theWhiteLineWidth = $('.theWhiteLine').width();

                if ($('.tweetCardShell').css('padding-right') !== undefined) {

                    var tweetCardShellPaddingRight = parseInt($('.tweetCardShell').css('padding-right').replace('px', '')) || null;
                    var tweetCardShellPaddingLeft = parseInt($('.tweetCardShell').css('padding-left').replace('px', '')) || null;
                }

                var tweetCardShellPaddingRight = parseInt($('.tweetCardShell').css('padding-right').replace('px', '')) || null;
                var tweetCardShellPaddingLeft = parseInt($('.tweetCardShell').css('padding-left').replace('px', '')) || null;


                if (($(window).width() + 17) > 1200) {

                    $('.sidebar').css('position', 'fixed');

                    $('.sidebar').css({
                        transition: 'all linear .25s'
                    });

                    $('.sidebar').css('height', '90%');

                    if (tweetCardWidth <= 101) {
                        $('.sidebar').css('width', 300 - 75);
                    } else {
                        $('.sidebar').css('width', tweetCardWidth - ((tweetCardShellPaddingRight + tweetCardShellPaddingLeft) * 2));
                    }

                } else {

                    $('.sidebar').hover(function () {
                        $('.sidebar').css({
                            transition: 'all linear .25s'
                        });
                    });

                    $('.sidebar').css({
                        transition: 'all linear .007s'
                    });

                    $('.sidebar').css('position', 'fixed');
                    $('.sidebar').css('height', 'auto');
                    $('.sidebar').css('width', theWhiteLineWidth + 'px');



                }

                console.log('\n');
                console.log('WINDA: ' + ($(window).width() + 17));
                console.log('INSTA: ' + instaCardWidth);
                console.log('TWEET: ' + tweetCardWidth);
                console.log('SIDEBAR: ' + $('.sidebar').width());
                console.log('THE DIFF: ' + (tweetCardWidth - instaCardWidth));
                console.log('tweetCardShellMARGIN: ' + (tweetCardShellPaddingRight + tweetCardShellPaddingLeft));
                console.log('\n');

            }


            setTimeout(function () {
                sidebarResize();
            }, 1000);
            setTimeout(function () {
                sidebarResize();
            }, 1500);
            setTimeout(function () {
                sidebarResize();
            }, 2000);

            $(window).resize(function () {
                sidebarResize();
            });

        }); < /script>