
<html>
<head>
    <title>ZDay Documentation</title>

![2017-02-02 17 54 12](https://cloud.githubusercontent.com/assets/24479453/22586603/51bd49c4-ea06-11e6-8f9f-a7548485d4e6.png)
</head>

<body>

<div class="container">
    <div class="header">
        <a href="#" class="logo">
            <img src="assets/logo.png" alt="" />
        </a>
    </div>
    <div class="wrapper">
        <h1>Zday “Coming soon” page</h1>
        <div class="block">
            <p>
                <strong>Name: ZDAY</strong><br/>
                <strong>Version: 1.0</strong><br/>
                <strong>Created: October 2014</strong><br/>
                <strong>By: <a href="http://themeforest.net/user/roling">RonDesign</a></strong>
            </p>

            <p>
                Fully adaptive theme with the possibility to insert a full screen video or a picture.<br/>
                The simplicity  of settings and customization runs high.<br/>
                Smooth animations and excellent usability makes the page easy and simple to use.<br/>
                The code of the theme is logical and structured, provides a considerable amount of commentaries.  The structure of the pages is initially clear.<br/>
                All the styles and scripts are minimized, the pictures are optimized, which allows your visiters download the page in a split second.
            </p>
            <p>Thank you for purchasing our template. If you need support or have any questions, you can contact us via our ThemeForest <a href="http://themeforest.net/user/roling">profile page</a>.</p>
        </div>
        <div class="block">
            <h2>Main differences from the other themes</h2>
            <ol>
                <li>
                    <p><strong>Has no navigation problems</strong></p>
                    <p>The navigation throughout the page is possible by any means available:</p>
                    <ul>
                        <li>with the help of scroll</li>
                        <li>with the help of arrow buttons on the keyboard</li>
                        <li>with the help of the arrows on the page</li>
                    </ul>
                    <p>In comparison with the other similar themes, with this theme you won't need to worry that a part of your information on the page appears to be unavailable for some visiters.</p>
                </li>
                <li>
                    <p><strong>Has no background video problems</strong></p>
                    <p>In the given theme the problem of the black lines on the background video is solved. And for the mobile devices instead of the video an image from the video comes out, which makes the page easy and fast even for the users of mobile internet.</p>
                </li>
                <li>All the theme pages passed the w3c validation</li>
            </ol>

        </div>
        <div class="block">
            <h2>Technologies</h2>
            <p>HTML5, CSS3 + LESS и jQuery 2.1.1</p>
        </div>
        <div class="block">
            <h2>Browsers support</h2>
            <ul>
                <li>latest Chrome versions</li>
                <li>latest Safari versions</li>
                <li>Opera 13+</li>
                <li>Mozilla Firefox 4+</li>
                <li>Internet Explorer 9+</li>
            </ul>
            <p>In the older browser versions the theme can be displayed incorrectly.</p>
        </div>
        <div class="block">
            <h2>The Settings panel</h2>
            <p>The settings panel is provided only in the demonstrational aims. If publishing your website with this theme it is recommended to delete the panel.</p>
            <p>For this you should delete all code between the comments <code>&lt;!-- Start Settings Panel --&gt;</code> and <code>&lt;!--=== End Settings Panel --&gt;</code>.</p>
        </div>
        <div class="block">
            <h2>Appearance Settings</h2>
            <p>It is quite simple to customize the theme. To do that you only need to find the opening body tag in code and do the following:</p>
            <table>
                <tr>
                    <th>Settings</th>
                    <th>Steps</th>
                    <th>Actions Examples</th>
                    <th>Notes</th>
                </tr>
                <tr>
                    <td>Hide the header</td>
                    <td>Add class <code>hidden-block-data-1</code></td>
                    <td>
                        <code>&lt;body class=”hidden-block-data-1”&gt;</code>
                    </td>
                    <td rowspan="5">The following actions hide the corresponding elements of the theme only for the user. However these elements remain available for the search robots. In order to fix this, you should manually delete the given blocks from the page code</td>
                </tr>
                <tr>
                    <td>Hide the countdown (counter) on the first screen</td>
                    <td>Add class <code>hidden-block-data-5</code></td>
                    <td>
                        <code>&lt;body class=”hidden-block-data-5”&gt;</code>
                    </td>
                </tr>
                <tr>
                    <td>Hide title on the first screen</td>
                    <td>Add class <code>hidden-block-data-6</code></td>
                    <td>
                        <code>&lt;body class=”hidden-block-data-6”&gt;</code>
                    </td>
                </tr>
                <tr>
                    <td>Hide social buttons</td>
                    <td>Add class <code>hidden-block-data-7</code></td>
                    <td>
                        <code>&lt;body class=”hidden-block-data-7”&gt;</code>
                    </td>
                </tr>
                <tr>
                    <td>Hide the page Write us</td>
                    <td>Add class <code>disable-feedback</code></td>
                    <td>
                        <code>&lt;body class=”disable-feedback”&gt;</code>
                    </td>
                </tr>
                <tr>
                    <td>Set the background image</td>
                    <td>Add an image link to the attribute <code>data-image-url</code></td>
                    <td>
                        <code>&lt;body data-image-url=”http://www.mrwallpaper.com/wallpapers/manhattan-nyc-skyline.jpg”&gt;</code>
                    </td>
                    <td>An image displayed by default is set up in the css files</td>
                </tr>
                <tr>
                    <td>Set the background video</td>
                    <td>Add a youtube video link to the attribute <code>data-video-url</code></td>
                    <td>
                        <code>&lt;body data-video-url=”https://www.youtube.com/watch?v=s2ew201DhpI”&gt;</code>
                    </td>
                    <td>
                        - If the background video is enabled – the background image won’t be displayed<br/><br/>
                        - The background video is not displayed on mobile devices and tablets in order to save the productivity of the devices, an image from the video is displayed instead.</td>
                </tr>
                <tr>
                    <td>Enable or disable the background video sound</td>
                    <td>Write true or false to the attribute <code>data-mute</code></td>
                    <td>
                        <code>&lt;body data-mute=”true”> или &lt;body data-mute=”false”&gt;</code>
                    </td>
                    <td>The sound is disabled by default</td>
                </tr>
                <tr>
                    <td>Set the launching date for the countdown counter</td>
                    <td>Write the date in format <code>’YYYY/MM/DD h:m:s’</code> to the attribute <code>data-time</code></td>
                    <td>
                        <code>&lt;body data-time=”2015/03/25 22:15:15”&gt;</code>
                    </td>
                    <td>The New Year is the launching date by default &#9786;</td>
                </tr>
            </table>

        </div>
        <div class="block">
            <h2>Customization</h2>
            <p>If during the theme installation you need to write your own css or javascript code, we recommend to use css/custom.css and  js/custom.js files. They are already linked to the theme pages and are absolutely empty. Such practice allows you to update the theme safely in the future.</p>
        </div>
        <div class="block">
            <h2>Email Setting</h2>
            <p>The form of the Contact Page (CallBack Page) is absolutely working and allows you to receive a letter directly to your email address. For the from to work It is necessary that your server support PHP. The Settings of the form are contained in the file config.php, it is in  the folder with the theme. It contains only 2 lines, that you should change:</p>
            <p>
                <code>$email_to</code> – Your email address.<br/>
                <code>$email_subject</code> – The emails topic that you will be receiving from this form to your email.
            </p>
        </div>
        <div class="block">
            <h2>Credits:</h2>
            <p><code>[font]</code> <a href="http://fonts.googleapis.com/css?family=Open+Sans" target="_blank">Open Sans by <a href="http://www.google.com/webfonts/specimen/Open+Sans" target="_blank">Steve Matteson</a></p>
            <p><code>[plugin]</code> <a href="http://keith-wood.name/countdown.html" target="_blank">Countdown</a> jQuery plugin by <a href="http://keith-wood.name/" target="_blank">Keith Wood</a></p>
            <p><code>[plugin]</code> <a href="http://manos.malihu.gr/jquery-custom-content-scroller/" target="_blank">Scrollbar</a> jQuery plugin by <a href="http://manos.malihu.gr/about" target="_blank">Manos Malihutsakis</a></p>
            <p><code>[plugin]</code> jQuery <a href="https://github.com/carhartl/jquery-cookie" target="_blank">Cookie</a> Plugin by <a href="https://github.com/carhartl" target="_blank">Klaus Hartl</a></p>
        </div>
    </div>
</div>

</body>
</html>
