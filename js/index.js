window.addEventListener("load", function() {
    const weatherApiKey = "6625c26be6cd2ababbf5c28da79850a6"; // weatherApiKey
    const emailToken = "55df45eb-e8dc-4fc9-b00c-73d8c6dce80e"; // emailToken

    // 個人資訊條列
    const personalInfoList = Vue.component('personalInfoList', {
        data() {
            return {
                isSkillButtonClicked: false,
                isAboutButtonClicked: false,
                isExpButtonClicked: false,
                isProjectButtonClicked: false,
                isContactButtonClicked: false
            }
        },
        template:`
            <div :class = "{personal_info_list_container: true}">
                <img src = "./img/personal_resume_personal_photo.png">
                <p :class = "{personal_info_list_name: true}">
                    簡聖舫
                </p>
                <div :class = "{personal_info_list_choose_button: true}">
                    <button :class = "{button_clicked: isSkillButtonClicked}" @click = "scrollToSkill">技能</button>
                    <button :class = "{button_clicked: isAboutButtonClicked}" @click = "scrollToAbout">關於我</button>
                    <button :class = "{button_clicked: isExpButtonClicked}" @click = "scrollToExp">學經歷</button>
                    <button :class = "{button_clicked: isProjectButtonClicked}" @click = "scrollToProject">我的作品</button>
                    <button :class = "{button_clicked: isContactButtonClicked}" @click = "scrollToContact">聯絡我</button>
                </div>
            </div>
        `,
        methods: {
            // 點擊後畫面會移動到技能的最上方，並且更改這5個button的值
            scrollToSkill() {
                if(document.querySelector("div.personal_skill_container")) {
                    window.scrollTo({
                        behavior: "smooth",
                        top: 0
                    })

                    this.isAboutButtonClicked = false;
                    this.isExpButtonClicked = false;
                    this.isProjectButtonClicked = false;
                    this.isContactButtonClicked = false;
                    this.isSkillButtonClicked = true;
                }
            },
            // 點擊後畫面會移動到關於我的最上方，並且更改這5個button的值
            scrollToAbout() {
                if(document.querySelector("div.about_container")) {
                    document.querySelector("div.about_container").scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest"
                    });

                    this.isSkillButtonClicked = false;
                    this.isExpButtonClicked = false;
                    this.isProjectButtonClicked = false;
                    this.isContactButtonClicked = false;
                    this.isAboutButtonClicked = true;
                }
            },
            // 點擊後畫面會移動到學經歷的最上方，並且更改這5個button的值
            scrollToExp() {
                if(document.querySelector("div.experience_container")) {
                    document.querySelector("div.experience_container").scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest"
                    });

                    this.isSkillButtonClicked = false;
                    this.isAboutButtonClicked = false;
                    this.isProjectButtonClicked = false;
                    this.isContactButtonClicked = false;
                    this.isExpButtonClicked = true;
                }
            },
            // 點擊後畫面會移動到我的作品的最上方，並且更改這5個button的值
            scrollToProject() {
                if(document.querySelector("div.project_container")) {
                    document.querySelector("div.project_container").scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest"
                    });

                    this.isSkillButtonClicked = false;
                    this.isAboutButtonClicked = false;
                    this.isExpButtonClicked = false;
                    this.isContactButtonClicked = false;
                    this.isProjectButtonClicked = true;
                }
            },
            // 點擊後畫面會移動到聯絡我的最上方，並且更改這5個button的值
            scrollToContact() {
                if(document.querySelector("div.contact_container")) {
                    document.querySelector("div.contact_container").scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest"
                    });

                    this.isSkillButtonClicked = false;
                    this.isAboutButtonClicked = false;
                    this.isExpButtonClicked = false;
                    this.isProjectButtonClicked = false;
                    this.isContactButtonClicked = true;
                }
            }
        },
    });

    // 畫面最上方的區塊，裡面有天氣相關的資訊
    const personalHeader = Vue.component('personalHeader', {
        template:`
            <header>
                <div :class = "{city_and_temperature: true}">
                    <p :class = "{city_name: true}">{{ weatherCity }}</p>
                    <p :class = "{city_temperature: true}">{{ weatherTemp }}℃</p>
                </div>
                <img :src = "weatherIcon">
            </header>
        `,
        props: {
            weatherInfo: {
                type: Object
            }
        },
        computed: {
            weatherIcon() {
                return this.weatherInfo? `https://openweathermap.org/img/wn/${this.weatherInfo.weather[0].icon}@2x.png`:"http://openweathermap.org/img/wn/10d@2x.png";
            },
            weatherCity() {
                return this.weatherInfo?this.weatherInfo.name:"";
            },
            weatherTemp() {
                return this.weatherInfo?this.weatherInfo.main.temp:"";
            }
        },
    });
    
    // 技能的部分
    const personalSkill = Vue.component('personalSkill', {
        template:`
            <div :class = "{personal_skill_container: true}">
                <ul :class = "{personal_skill_front_end: true}">
                    <p>前端技能</p>
                    <li>
                        <p>
                            HTML5
                        </p>
                    </li>
                    <li>
                        <p>
                            CSS3 — Scss
                        </p>
                    </li>
                    <li>
                        <p>
                            JavaScript—Vue
                        </p>
                    </li>
                    <li>
                        <p>
                            Ajax
                        </p>
                        <p>
                            — fetch
                        </p>
                        <p>
                            — promise, asyncFunction處理非同步問題 
                        </p>   
                    </li>
                </ul>
                <ul :class = "{personal_skill_front_end: true}">
                    <p>後端技能</p>
                    <li>
                        <p>
                            PHP
                        </p>
                    </li>
                    <li>
                        <p>
                            MySQL
                        </p>
                    </li>
                </ul>
                <ul :class = "{personal_skill_front_end: true}">
                    <p>工具</p>
                    <li>
                        <p>
                            打包工具 — gulp
                        </p>
                    </li>
                    <li>
                        <p>
                            版控工具 — git
                        </p>
                    </li>
                </ul>
            </div>
        `
    });

    // 關於我的部分
    const aboutMe = Vue.component('aboutMe', {
        template: `
            <div :class = "{about_container: true}">
                <ul>
                    <p>
                        關於我
                    </p>
                    <li>
                        <p>     
                            您好，我叫簡聖舫，畢業於東華大學。專長是切版、作一些網頁上的動態效果、串接資料。喜歡接收新知與幫助他人解決問題，
                            在緯育製作團專的過程中常常幫助其他人解決一些他們所面臨到的問題。會想要應徵前端工程師這份工作是因為在來到緯育
                            之前，我自己本身就有自學過一些網頁前端的相關知識，雖然當時的學習方向很亂，但我對寫網頁這件事情並沒有因此而覺得厭煩
                            甚至還變得更加喜歡，也因此在那時萌生出了想要轉職當前端工程師的想法。如果之後有幸能進入貴公司的話，希望能盡快了解貴
                            公司的團隊運作流程，讓自己能夠在最短的時間裡融入團隊。在下班時間的時候能夠持續進修，讓自己有能夠獨立完成任務並且協
                            助他人的能力。
                        </p>
                    </li>
                </ul>
            </div>
        `
    });

    // 學經歷的部分
    const experience = Vue.component('experience', {
        template: `
            <div :class = "{experience_container: true}">
                <ul>
                    <p>
                        學歷
                    </p>
                    <li>
                        <p>     
                            2013.09 ~ 2017.06, 2019.09 ~ 2021.06 
                        </p>
                        <p>
                            東華大學歷史系
                        </p>
                    </li>
                </ul>
                <ul>
                    <p>
                        工作經歷
                    </p>
                    <li>
                        <p>     
                            2018.03 ~ 2019.08 喜耀建設有限公司
                        </p>
                        <p>
                            負責將客戶所需要的貨物送達指定地點、與客
                            戶溝通並解決所面臨到的問題
                        </p>
                    </li>
                </ul>
                <ul>
                    <p>
                        經歷
                    </p>
                    <li>
                        <p>     
                            2021.09 ~ 2022.01緯育前端培訓班
                        </p>
                        <p>
                            學習有關網頁的相關技能，像是網頁切版、網
                            頁上的動態效果、串接Api等
                        </p>
                    </li>
                </ul>
            </div>
        `
    });

    // 我的作品的部分
    const myProject = Vue.component('myProject', {
        template: `
            <div :class = "{project_container: true}">
                <ul>
                    <p @click = "toMyWebDynamicEffectPractice">
                        網頁上常見小功能練習
                    </p>
                    <li>
                        <p>     
                            簡介：
                            在逛網站時常常會看到一些讓我很欣賞的功能，
                            於是變在寫專題的空閒之餘將這些功能使用最
                            原始的三種東西，HTML、CSS、JavaScript呈
                            現出這些效果。     
                        </p>
                    </li>
                </ul>
                <ul>
                    <p @click = "toCATOPIA">
                        團體專題網站：CATOPIA
                    </p>
                    <li>
                        <p>     
                            簡介：
                            致力於創造一個貓咪可以健康、
                            快樂生活的貓托邦購物中心                            
                        </p>
                        <p>
                            負責部分：
                            留言版前後端、商品總覽前後端、商品搜尋功能
                            、留言版後台管理、註冊頁前後端、串接商品內
                            頁、購物車
                        </p>
                    </li>
                </ul>
            </div>
        `,
        methods: {
            toMyWebDynamicEffectPractice() {
                location.href = "https://github.com/Nicholasneal12345/my_web_dynamic_effect_practice";
            },
            toCATOPIA() {
                location.href = "https://tibamef2e.com/tfd104/g4/TeamWorkCatopia/dist/use.html";
            }
        }
    });

    // 連絡我的部分
    const contactMe = Vue.component('contactMe', {
        template: `
            <div :class = "{contact_container: true}">
                <ul>
                    <p>
                        我的個人資訊
                    </p>
                    <li>
                        <p>     
                            電話：0972856709
                        </p>
                    </li>
                    <li>
                        <p>     
                            地址：新北市三重區
                        </p>
                    </li>
                    <li>
                        <p>     
                            信箱：410203041@gms.ndhu.edu.tw
                        </p>
                    </li>
                </ul>
                <ul>
                    <p>
                        直接聯絡我
                    </p>
                    <li>
                        <input v-model = "sendFrom" type = "email" placeholder = "請輸入您的mail"/>
                    </li>
                    <li>
                        <input v-model = "sendTitle" type = "text" placeholder = "請輸入標題"/>
                    </li>
                    <li>
                        <textarea v-model = "messageValue" :class = "{message_input_container: true, text_content_too_long: messageValue.length > 500 ? true : false}" placeholder = "請輸入訊息，最多500個字元">
                        </textarea>
                        <button @click = "sendMessageToEmail">
                            確認送出
                        </button>
                    </li>
                </ul>
            </div>
        `,
        data() {
            return {
                messageValue: "",
                sendFrom: "",
                sendTitle: ""
            }
        },
        methods: {
            sendMessageToEmail() {
                if(this.messageValue && this.sendFrom && this.sendTitle) {
                    if(this.messageValue.length <= 500) {
                        // 放入載入動畫
                        document.querySelector("div.background_img_container").classList.add("background_img_container_open");

                        // 這裡的Email method是從smtp.js裡來的
                        // smtp.js在index.html的地方以CDN的方式被引入進來了
                        Email.send({
                            SecureToken: emailToken, // 放emailToken
                            To: '410203041@gms.ndhu.edu.tw', // 訊息會寄送到的位置
                            From: this.sendFrom, // 發送訊息的郵件
                            Subject: this.sendTitle, // 訊息標題
                            Body: this.messageValue // 訊息內容
                        }).then(message => {
                                alert(message);
                                document.querySelector("div.background_img_container").classList.remove("background_img_container_open");
                                this.sendFrom = "";
                                this.sendTitle = "";
                                this.messageValue = "";
                            }
                        )
                    }
                }else {
                    alert("表單填寫未完成！");
                }
            }
        }
    });

    const vm = new Vue({
        el: "#personal_resume_app",
        data() {
            return {
                weatherInfo: {}
            }
        },
        template: `
            <div :class = "{personal_resume_container: true}" >
                <personal-info-list/>
                <div :class = "{personal_resume_header_and_personal_info_content: true}">
                    <personal-header
                        :weatherInfo = "weatherInfo"
                    />
                    <personal-skill/>
                    <about-me/>
                    <experience/>
                    <my-project/>
                    <contact-me/>
                </div>
            </div>
        `,
        mounted() {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=Taipei&appid=${weatherApiKey}&lang=zh_tw&units=metric`)
            .then(res => res.json())
            .then(weatherData => {
                this.weatherInfo = weatherData;
                // console.log(this.weatherInfo);
            })
        },
        
    });

    //重新整理或載入網頁時高度為置頂並且給skill button增加一個button_clicked的class
    // window.scrollTo({
    //     behavior: "smooth",
    //     top: 0
    // });

    // 判斷目前的高度來決定button的class
    // window.addEventListener("scroll", function() {
    //     if(window.scrollY < document.querySelector("div.about_container").offsetTop && document.querySelector("div.about_container")) {
    //         document.querySelector("div.personal_info_list_choose_button").children[0].classList.add("button_clicked");
    //         document.querySelector("div.personal_info_list_choose_button").children[1].classList.contains("button_clicked")?document.querySelector("div.personal_info_list_choose_button").children[1].classList.remove("button_clicked"):"";
    //         document.querySelector("div.personal_info_list_choose_button").children[2].classList.contains("button_clicked")?document.querySelector("div.personal_info_list_choose_button").children[2].classList.remove("button_clicked"):"";
    //         document.querySelector("div.personal_info_list_choose_button").children[3].classList.contains("button_clicked")?document.querySelector("div.personal_info_list_choose_button").children[3].classList.remove("button_clicked"):"";
    //         document.querySelector("div.personal_info_list_choose_button").children[4].classList.contains("button_clicked")?document.querySelector("div.personal_info_list_choose_button").children[4].classList.remove("button_clicked"):"";
        
    //     }else if(window.scrollY >= document.querySelector("div.about_container").offsetTop && window.scrollY < document.querySelector("div.experience_container").offsetTop && document.querySelector("div.about_container") && document.querySelector("div.experience_container")) {
    //         document.querySelector("div.personal_info_list_choose_button").children[1].classList.add("button_clicked");
    //         document.querySelector("div.personal_info_list_choose_button").children[0].classList.contains("button_clicked")?document.querySelector("div.personal_info_list_choose_button").children[0].classList.remove("button_clicked"):"";
    //         document.querySelector("div.personal_info_list_choose_button").children[2].classList.contains("button_clicked")?document.querySelector("div.personal_info_list_choose_button").children[2].classList.remove("button_clicked"):"";
    //         document.querySelector("div.personal_info_list_choose_button").children[3].classList.contains("button_clicked")?document.querySelector("div.personal_info_list_choose_button").children[3].classList.remove("button_clicked"):"";
    //         document.querySelector("div.personal_info_list_choose_button").children[4].classList.contains("button_clicked")?document.querySelector("div.personal_info_list_choose_button").children[4].classList.remove("button_clicked"):"";
        
    //     }else if(window.scrollY >= document.querySelector("div.experience_container").offsetTop && window.scrollY < document.querySelector("div.project_container").offsetTop - 16 && document.querySelector("div.experience_container") && document.querySelector("div.project_container")) {
    //         document.querySelector("div.personal_info_list_choose_button").children[2].classList.add("button_clicked");
    //         document.querySelector("div.personal_info_list_choose_button").children[0].classList.contains("button_clicked")?document.querySelector("div.personal_info_list_choose_button").children[0].classList.remove("button_clicked"):"";
    //         document.querySelector("div.personal_info_list_choose_button").children[1].classList.contains("button_clicked")?document.querySelector("div.personal_info_list_choose_button").children[1].classList.remove("button_clicked"):"";
    //         document.querySelector("div.personal_info_list_choose_button").children[3].classList.contains("button_clicked")?document.querySelector("div.personal_info_list_choose_button").children[3].classList.remove("button_clicked"):"";
    //         document.querySelector("div.personal_info_list_choose_button").children[4].classList.contains("button_clicked")?document.querySelector("div.personal_info_list_choose_button").children[4].classList.remove("button_clicked"):"";
        
    //     }else if(window.scrollY >= document.querySelector("div.project_container").offsetTop - 16 && window.scrollY < document.querySelector("div.contact_container").offsetTop && document.querySelector("div.project_container") && document.querySelector("div.contact_container")) {
    //         document.querySelector("div.personal_info_list_choose_button").children[3].classList.add("button_clicked");
    //         document.querySelector("div.personal_info_list_choose_button").children[0].classList.contains("button_clicked")?document.querySelector("div.personal_info_list_choose_button").children[0].classList.remove("button_clicked"):"";
    //         document.querySelector("div.personal_info_list_choose_button").children[1].classList.contains("button_clicked")?document.querySelector("div.personal_info_list_choose_button").children[1].classList.remove("button_clicked"):"";
    //         document.querySelector("div.personal_info_list_choose_button").children[2].classList.contains("button_clicked")?document.querySelector("div.personal_info_list_choose_button").children[2].classList.remove("button_clicked"):"";
    //         document.querySelector("div.personal_info_list_choose_button").children[4].classList.contains("button_clicked")?document.querySelector("div.personal_info_list_choose_button").children[4].classList.remove("button_clicked"):"";
        
    //     }else {
    //         document.querySelector("div.personal_info_list_choose_button").children[4].classList.add("button_clicked");
    //         document.querySelector("div.personal_info_list_choose_button").children[0].classList.contains("button_clicked")?document.querySelector("div.personal_info_list_choose_button").children[0].classList.remove("button_clicked"):"";
    //         document.querySelector("div.personal_info_list_choose_button").children[1].classList.contains("button_clicked")?document.querySelector("div.personal_info_list_choose_button").children[1].classList.remove("button_clicked"):"";
    //         document.querySelector("div.personal_info_list_choose_button").children[2].classList.contains("button_clicked")?document.querySelector("div.personal_info_list_choose_button").children[2].classList.remove("button_clicked"):"";
    //         document.querySelector("div.personal_info_list_choose_button").children[3].classList.contains("button_clicked")?document.querySelector("div.personal_info_list_choose_button").children[3].classList.remove("button_clicked"):"";
    //     }
    // });
});