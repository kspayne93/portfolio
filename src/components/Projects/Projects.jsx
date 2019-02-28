import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Projects.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Projects extends Component {
   state = {
      projects: [
         {
            name: 'Milestone',
            keyPoint1: 'Full CRUD web app that allows users to keep track of significant events in their life',
            keyPoint2: 'Won Best Design / Styling out of 18 projects',
            keyPoint3: 'AWS S3 Integration allows users to upload photos & videos',
            keyPoint4: 'Responsive design works on Mobile',
            technologies: "REACT | REDUX | NODE | EXPRESS | MASSIVE | AXIOS | SASS | POSTGRESQL | BCRYPT | AMAZON S3 | SESSIONS",
            liveSiteURL: 'https://www.milestone.page/#/',
            username: 'milo',
            password: 'milo',
            codeURL: 'https://github.com/kspayne93/milestone',
            mainPhoto: 'https://lh3.googleusercontent.com/4S86dAv46fA_NQMo6C1HABm64DUADvMcJL50fBexgfk10RBQd9275YhE_GyJQAnsx7-bZpgdwIEqG1pblJod38cUm8ESL3NgqyUVk19Xs9-x661JD0nBlL4-vP6ti8HhLKfMTEcro2TS5FIFpWomLu9tdOu4UzBKCmmPPnAkLQRNY3-uCq4ZIcSJByKvunfNJUQTvAU-KeEWEj4cjOO127XuaknNYO4HwlLylcT5xdahHhwH569ZtyNeZZYDs-scp9mltrq5UeB5_dDKe5t7ZjpZ9dSXRlNhGfXFbkFDRjcN4TjFhpZDQgy-hUgxp7miTmwzjuHVvZgZOIMgkuTKXopWBYPwPkX7_rj_gk0t5rToYEdqmdsQw7lrQ5_eIPt7z8USHzjNJ__zLGagUL-kT8-wwM79bpxBXPCQSGPT7v2l-gm57PBVeg9dPW9yIbPIUBjTphpYcnaT5Ws60-gVxB1fy0ZS-RYvOvREDaOuuAXy672Uj52W4e0DHECYmgoOQl5bkS9c8JFOD3KUZxrC4-DPrmSOIiVoI5OMVrlFIbLphA9XaI3hk-v8G9zy3kSERQXqlxf8eQjb7kZ8TIgGL1Qtvua6PvNiqWSleKrqPru20tf3yiFK9V45RgjGNyy6tOLej5UwKblDnnimqm4ANP0wNJuEGa6nUU_HHZqdIwTRhWOHYh0YxCHh9f85FFR2uelVwCLO7bopagj24wmzHD-qeg=w1667-h969-no',
            image1: 'https://lh3.googleusercontent.com/4S86dAv46fA_NQMo6C1HABm64DUADvMcJL50fBexgfk10RBQd9275YhE_GyJQAnsx7-bZpgdwIEqG1pblJod38cUm8ESL3NgqyUVk19Xs9-x661JD0nBlL4-vP6ti8HhLKfMTEcro2TS5FIFpWomLu9tdOu4UzBKCmmPPnAkLQRNY3-uCq4ZIcSJByKvunfNJUQTvAU-KeEWEj4cjOO127XuaknNYO4HwlLylcT5xdahHhwH569ZtyNeZZYDs-scp9mltrq5UeB5_dDKe5t7ZjpZ9dSXRlNhGfXFbkFDRjcN4TjFhpZDQgy-hUgxp7miTmwzjuHVvZgZOIMgkuTKXopWBYPwPkX7_rj_gk0t5rToYEdqmdsQw7lrQ5_eIPt7z8USHzjNJ__zLGagUL-kT8-wwM79bpxBXPCQSGPT7v2l-gm57PBVeg9dPW9yIbPIUBjTphpYcnaT5Ws60-gVxB1fy0ZS-RYvOvREDaOuuAXy672Uj52W4e0DHECYmgoOQl5bkS9c8JFOD3KUZxrC4-DPrmSOIiVoI5OMVrlFIbLphA9XaI3hk-v8G9zy3kSERQXqlxf8eQjb7kZ8TIgGL1Qtvua6PvNiqWSleKrqPru20tf3yiFK9V45RgjGNyy6tOLej5UwKblDnnimqm4ANP0wNJuEGa6nUU_HHZqdIwTRhWOHYh0YxCHh9f85FFR2uelVwCLO7bopagj24wmzHD-qeg=w1667-h969-no',
            image2: 'https://lh3.googleusercontent.com/RT3dknR2GBxS31R_RwrOd6eQInHlyj9ANy5q1pQtlGP9muCJ7v7H6NWTQ_WRXeD0nNoAABJ1iD0dzygAFDvI650hR0PfluLenR0ARx_2A4u9eI44P7Z1jMZkrq61ckHdR978UQm2jfp86uTHhunP6BDZMnY70qyHDklGGUJfAY0KnM01Lashn5m-oeWk-X7kdHwAiDWdqDlH_VVGmcRT5ZBOO8o4mdWDkNHe6Jx52GLGmo_Ubtuj_GufGXQogV6B-e7dTI6b_NUQa8dXrmsUvUnhH39UqhKdNvvznyPQViYYyGxieW8ilpIbdArRld3LQ5V3rkZE1paS8O1fh_X8VU0WSVbqIyfnATM-oBZG3jp0FX8x_oK3iEG1gWAd8JrnSVJSbTz2rzjXIott_-JcmayzGWO-qx1I_TBhoYllmpI2u9OaE-XI7dRLbhDM5xf6HQXRC_iRVb99FjRJ19qWDlQNlg2REE_bZtmCpfQciF4Ir-yyBLHWjxIa0PGDmyk3HROktkxGpP1_M1dzXBCZzCW6kN5Is0RNLKfgyZRl0PkhkXk8kT9ibv0v-RUXD0qpQraCWqB9qm2rUo70kxfyunayfCivxbC4FUj3zrsy-U9it7icPdyiEp8ZFM6bWMMXPmbJws3rE7OYWsUJkHBXC9L_V6H0buuV=w693-h380-no',
            image3: 'https://lh3.googleusercontent.com/Ehqb4aq4eBBlw8dWdVW3gjpLTT9AYUFEL_dyFK4HHDIk-77lfU5JCUq7ts11mFD775ZTuRRJYB1nWHOV2RqkbDQgis0mojhCMkUDFU8nMzxDLNwzPDiChlnY_9y_86UxO8HI-JGfOqcd1BLF9hNQRjT9se6XxMXYqGgA70aDi5ZuVIArFannr9Zwm9Bft4tztZisy1ApXk7ZYdiDV9pH-Os8ppUtiQP_7aytP-fX8H_P4zK3dmLCEFUwWt7rymtBVb-oIQgFi659bAkemTkuq1TcrozYtY9qWtDvfa0hDQZsgAk4zrwjEskR0n3wmouAO-I9pjwG5hxIVpl3MGR3GomXSdTuRD-Nv07kY7jKUHbTM_OMM7qszHbbfDNVvIk3jYylnOvXSVOVxp5iNOH9xQ4GcCJq3ylaCX-pdSJYKRU-oG2pjWCruAH8BLmBznfneJvM_U-N32kwD6XZXtgWwDFBhx9NI2SIsIe-0dpu0amfYSLeaf4U0cEPgPY79EHfbd5G6u5r_VyvoRuHSvEAVyENvrXGiij5Yiv2Pie8IP5ZH6LXmJWNdK-iswblZHbVFVFhXs2Ml_6tG3S4M633Ig3gRnIe5CUwJ6GtP9h8KHT68jW-8UxYrEFPiTwXTGRWNmDUnwYqFl16lh4VYnOH5lQb-mycX23fVcLqVUKZCa0xSEv2sJwYQFxxD0WGi6UFkSqtCajXbz9IfLvBo6umKujl1w=w2880-h1574-no',
            image4: 'https://lh3.googleusercontent.com/wyx_goNOQq5AQbHuUDg23l_j6srpyOclqCmBwE_eODZ7u5IpENguR7gd8Ff3gYa6K3oP6y2dovJhA8Wlrvh9zoess81cVJOYPdJGbVGtEPg8stDhkJO48GEBglEV44z6s-QOWwkL2R7EG2PLCrKLUYHGhPArz8-HpTrMD4-cpWKt3hzwESVUf3AFKpDyDTkdkfEvcjTMF7HiXs3ALipxSdcMqjBiDqYnYTORimesfUMn4-bK0C2X3FpPTTdSvGVlMZ7h7QqxJ8yqaiNCDEoL2r89ILrOvw4uaZQsU8RX26nNSDjuuHn94V-7azbYvioWHmPPyLjUnOUzOHF8Mt06Lz6Y9T5M6Paezfg8VHnIGxXTefdHlUFrUfg1DdowSBLY_q0kd1tFf8dX-rnbMoCRliR7VE07aJW16xMdOgyyJwyzsgBKmA_zp1Yp-xcfhVtLOFNzMAQ-dmO6AmbvsDnJfxsfb_wlZTfnwtCmTP6YLeE0n4gxf8VEX9n3CDjtwgSoylM9cGIWmKpy0HAJLM0fN53BHVf43UOoZd7Jcudae4_zF35Z-0KMwJF9E3UjkEaShRCi6M5GUD1MbO3a6QGiM-S8B7r8Vc7pwov-cJAsz8ZssFCmij40P_4x11BpzOISThKOQemeahYGKj4b4s90O9hVn0jn5lMWaMn6EQH5H5rRX1Ky58gTXFI6-0a2Ki4nPfg0sRr8VEoi948k8eaFklXFaw=w2652-h1440-no',
            image1description: 'Landing Page',
            image2description: `Dashboard View showing user's milestones`,
            image3description: 'Edit Milestone Modal',
            image4description: 'Search Functionality',
         },
         {
            name: 'Kanoo',
            keyPoint1: 'An all-in-one travel planning app that enables users to collaborate with friends to plan upcoming trips. Developed in a group of 4',
            keyPoint2: `Keeps track of destinations, budget, activities, travelers (friends), and trip notes, as well as as a user's bucket list`,
            keyPoint3: `Built with a focus on design, the end result is a simple yet intuitive user experience that displays a user's travel details all in one place`,
            technologies: 'REACT | REDUX | NODE | EXPRESS | MASSIVE | AXIOS | SASS | POSTGRESQL | BCRYPT | SESSIONS | QUILL',
            liveSiteURL: 'https://kanoo.fun/#/',
            username: 'k',
            password: 'k',
            codeURL: 'https://github.com/wpr-45-studentdevs/travel-app',
            mainPhoto: 'https://lh3.googleusercontent.com/R2ApV5YtZ6YVIC3iCDv9quhP-SxYYcctdYCmn_37DStLy5mCt0jd-_zbICaBC8fHzbAElCGv0i1oVwT3BET1Q-zRGIOZp3F1d036s9Dr1RjTwb7-22J5au-Exq4Ys-k79qSnHFauFEfikPELLu47X7DlwVGCJxxQ12EENwf05ji0K6y3uhqKSvdNrf8En-uJmZkjmddYaXsy8ViV4qVmxxQj5dqN5yEEQ-bS-RTfJcrSfVFBlk8GzPinPL6Tgm07tMWLbCCAjGmlzqst1TQUQh8FTGkJ1A96hZYdeyWaWaoLYC24ntid9z4MrBVFA2kI3QT_CShkcHuB-dhLbNmTYoFjB0js1V_sPD9iGaSgl9KRUU9AOKYjxuW_5QulVsd8nMfQNzb2icvYw6q1VgYqRkyUGzdKwzjOIBJVCswtJncy1SAUHkkKUf0DSIwIbVvVkUEL8e1NQ1UrvnLf0K6Dcinyf8FwczrQcQIBBDAQEnqPs5ID9V9tkb9Cgv6ax345hbQzrt4UWHG9x05fNSpJOiYQnDU9xBZxMrlncAefMI0nT46DL8i5RDKwmqvKaklQ22te7E70lzu_xAO7LT42hfbxEgabUKJws5cXmuPYcDiFnHz5Lxh6zPYn3RmXfYpZ4Lh2kyArAhkbKikvNab-ZQBxDk-YCkUDA8UDXLNMx1fWsPTwHbWEMzRJEq4Z5fQziPi6xvkdBIa9m528DWJ3NMNmfQ=w1917-h968-no',
            image1: 'https://lh3.googleusercontent.com/R2ApV5YtZ6YVIC3iCDv9quhP-SxYYcctdYCmn_37DStLy5mCt0jd-_zbICaBC8fHzbAElCGv0i1oVwT3BET1Q-zRGIOZp3F1d036s9Dr1RjTwb7-22J5au-Exq4Ys-k79qSnHFauFEfikPELLu47X7DlwVGCJxxQ12EENwf05ji0K6y3uhqKSvdNrf8En-uJmZkjmddYaXsy8ViV4qVmxxQj5dqN5yEEQ-bS-RTfJcrSfVFBlk8GzPinPL6Tgm07tMWLbCCAjGmlzqst1TQUQh8FTGkJ1A96hZYdeyWaWaoLYC24ntid9z4MrBVFA2kI3QT_CShkcHuB-dhLbNmTYoFjB0js1V_sPD9iGaSgl9KRUU9AOKYjxuW_5QulVsd8nMfQNzb2icvYw6q1VgYqRkyUGzdKwzjOIBJVCswtJncy1SAUHkkKUf0DSIwIbVvVkUEL8e1NQ1UrvnLf0K6Dcinyf8FwczrQcQIBBDAQEnqPs5ID9V9tkb9Cgv6ax345hbQzrt4UWHG9x05fNSpJOiYQnDU9xBZxMrlncAefMI0nT46DL8i5RDKwmqvKaklQ22te7E70lzu_xAO7LT42hfbxEgabUKJws5cXmuPYcDiFnHz5Lxh6zPYn3RmXfYpZ4Lh2kyArAhkbKikvNab-ZQBxDk-YCkUDA8UDXLNMx1fWsPTwHbWEMzRJEq4Z5fQziPi6xvkdBIa9m528DWJ3NMNmfQ=w1917-h968-no',
            image2: 'https://lh3.googleusercontent.com/aNdGVLqife_Adc5nnmnEiQJKrSgIlNRlcWtO9fVIgIqg7fNuxrlgbny0g0312YziKT4HOxmb5Pm6S-7kl0-KfFeFjDJNVhnVo75wo4suuhmEyAijPBFLXwPVDOfDCPGYgH3eFgdThKEu9bZcx6LWurb7CdwaI01bOXuEQzlI3EOiYBgIRuBwuTT6vvIVgtnhb9oiGJSnHr5n0j5Qbbf8hbcj_XToF7oaqNElyYMjTgDSvfGpwevbjchshdupRwAu3vjjuAJ81seorpz2kygoWE61DNcYPvb7q0AHsifdPlQzD-6vUH3AL199jaxMgjEK0zUygtO6JtbbEN6P9qOPLmh8XufVr_WieOiQkV4G-8WrDrH0axwOXUKd5yltUfI8MXHG-PkyRMrt5SUq8p43L_TPGVEWkwCapk_ltqdF7fpfTgMLAIQ6sNdWpPS4oqWA_KDTNIdvUjAyjC7_ZniFNfvZK99BlOO91uSBMLHhTvJUgRrM9kEkFwYDG3yMbE8gLNyeoLAXo9c36PSTCNYMqKAvl8PXydsgEioOWWO1c6xNdpPz4vB65vQ4Bm09e1PHMCa48VL_yN5bQbS-QKtjj4qpIl-tCvt7fY8q-SrOwwpoLl_KDg55VAiW11YrmYsUSeIT0qVGssmfYOMCKseiQO_9IAOOVRL5ArfT4ncIOQqF1nYgW-0zUMJoGLrKAsJkOuib6oXWQ2pvpcpFN0dfjXs8gA=w1920-h969-no',
            image3: 'https://lh3.googleusercontent.com/EiUiJtagkAMcHdRa56Y8Ez4yaK2yGWUumRTbSZayv1tGya-x-hLBMtv_Pth85qoijyyD0BXmUANGcm-aHPQtQUfBNKuMwpsN-C5deiywoh9nOVTgRM-eWfKwkeQsjCgpQs3VseDg6u25sDNeIN_8GaoVi32kI8NKRKvxXeoNOySAHtSqENkysIEKR-7N_429QuL9kQX2jlrMuv0Kl967dxnliR9zsr4Wks_0IwW8ZGOvSxPkltC7kXnLG2e08kMhZaRt6QEugh3z0X3Mwx_HnpYexj0VQAy4dKrFYLl2aH5Q0lk_Fv91sytj3QNcMkbJIG8bI8mC-08Y7c4JUFmhPx-9Odnd0pVAPCSiJOxGezyrjLVLQapxmg21HcWi59Rkbh_MYdc_n1XJm5BWNnjw2IQk4mYsyRovyYe2LVGUUm4yPp6R1q42u0DTpzDgjgUIYLM9Wzi54-HUqd0F6RujKBiVKdYcZWPOVp7f_IZeUb6mlIHpXuAz109AzA7JoIsRBNRASNxwtBP1zSLQshuo4iHZTXz0Hp8jwp9fI9EXQqQcVofXHqYxqlnanjJ7bZSYEsL6rlEPqGDXv_1zSx7Sx90xs9rzuPbgFlis8miATRZ-5USI-jZkKbyp1oJXVY7SDjUBWYaqtvRllS_XapPro57uUhuiiHxquup9-s9N8n42U-cKCoVj7Dvd7aDvXmhfjNnfgw9fn18WgbBhd2lF49z9qQ=w1920-h970-no',
            image4: 'https://lh3.googleusercontent.com/uti7y4JINVUO0uaFC5LBGXu41rNRnFtuZm7LEPAMF6_px943mhhBid4zO0Hum_efAmRrXzwXVTmMmuTcqafAJa7XBg_80ZhFzS-Fv6C0ZSoxN_yIntv9EwO4k1tengIEtwlxz70xhxEs4dT2DvRI4uCQuEDzMBg6l83oahMm9EOtPrLf-ImhV3oZGcjQekZBnGXp4pns7Ogqp0GiLat4bRojrVJAPmNNkSVRtfAHAUluBikaSxKF4trjVceP_8_-2x_Kyb9xAb1EXIiP9i45oNyOkLxz92qEvei0GXEeE8vk2zzVo_fR37eQDwH2Yyo_3tGf7hdZYk7NykvVBiLuRQWoYCbxaTYZe650pgZlRMhGLGanCvFJIqyG-zySDyrs5OcayU0gZmkwwnwlv_2Nst0qSRQZPcy2dc4MLha-HXuodcNaEDkp__qA9QyXPd3ce_wGD9AfLmnFGLI0nkufSugtIbgcJOc07C2PTO_nLdw3PZqbQXeAQnAHoS09LhS78ZXP8h6GSj8UjPjM-LgCRtwqsamjXr3Vplkhu9oBEeVz3F9cNoP3CUVSspVYZflsBzqPyjb_gqnyXyIj-BUvbkfgLX3jf9y7mwAsz-eegJXRKW1QjF-jKNtvvhEX87WMzoOODhDOA6SB7r7TWAE_DTSQ5zzzm-wxajWnL3WO0e408gFOHUjR_l32tC2tOYHoYbd0-197AcJyH_nuIgPxnDehAA=w1920-h971-no',
            image5: 'https://lh3.googleusercontent.com/4Lj8rXnkz8VVEZJEiM9HDBHvCdsWccnsrMSiW0YM07vcqlb-JC3jxNXKdgYPS2x67vWfK_7o7hkDCopMAr1lxtkKSYe5xbOW1HJ8t3X1G1AIreqNfTk3OUSs6MRrDBRmNztFX73EYrh66PTmGm3pPUCFR1xkcKiggIbXpgvPWARRoNSfhmLGdsUItSo79DzWMdzZUv0gT73oUiQSG0EsWcqEWVO4nN_N2XFT4jvkuW1ar2lw4Bz_HitlxooQ-SftjLZAaH1hhscIt0NCb5CHDVsvKbIGEwD14jE9kvhkY7Zakw6Tlp6W_0DdcUI2m3WsHeSd4Ovi16J7WBKSwHUyE81otfLVoLGYd-ScXAhaYfSf-2bf4c_RQoIeU8xwO4g6_t_de25B5M1FVq5mSdeEYT3kJrcYwxu8rJ-f9eTdHSzVx9uK3tt6DQ1x_k0iPDkNnJ5U9PkLdebbzDdyUKYQE4reEojTexeiNBeb0a9g3mbUI2zU574rc0DgwrtRnHEBTkByMKlt4u3ShDm5ZfrvXgFS_MvjqdM_3RohgTMfnUkDfSquxtvh_YOyNjMZcDzJ4cNqT88Q6QdpUrHhy8pL6XC6YP22ebbxBQQe5AD-Yhy0dHi76UPBvHJ6E7TUrYAPJ3c3f3FVN2sj16w7LY9xED4tbv8jj68KhcfSu5c4h7Nhy3-3aDp9afCGRQvJblBfax5c-N0pXORQUy_gy7ha5vukbw=w1920-h970-no',
            image1description: 'Landing Page with changing background image',
            image2description: 'Dashboard View displaying all public trips',
            image3description: 'My Trips view showing all user trips (user can search, and toggle between upcoming / completed trips)',
            image4description: 'Trip Details View (user can update budget, take notes, add destinations, add activities, add travelers)',
            image5description: 'Bucket List View'
         }
      ],
      viewMilestoneImages: false,
      viewKanooImages: false,
   }

   render() {
      //Slider Settings
      const settings = {
         dots: true,
         infinite: true,
         speed: 500,
         slidesToShow: 1,
         slidesToScroll: 1,
         fade: true
      };

      const milestone = this.state.projects[0];
      const milestoneProject = (
         <div
            class="project-card milestone-card"
            style={{ backgroundImage: `url(${milestone.mainPhoto})` }}
         >
            <div className='card-text'>
               <div className='project-card-header'>
                  <h2>{milestone.name}</h2>
                  <p onClick={() => this.setState({ viewMilestoneImages: true })} style={{ color: 'salmon' }}>View Photos</p>
               </div>
               <div>
                  <ul>
                     <li>{milestone.keyPoint1}</li>
                     <li>{milestone.keyPoint2}</li>
                     <li>{milestone.keyPoint3}</li>
                     {milestone.keyPoint4 && <li>{milestone.keyPoint4}</li>}
                  </ul>
                  <div className='technologies-list'>
                     <h5>{milestone.technologies}</h5>
                  </div>
                  <div className='link-container'>
                     <div>
                        <a style={{ color: 'white' }} target='_blank' href={milestone.liveSiteURL} rel="noopener noreferrer">View Live Site</a>
                        <div>
                           <span>Username: {milestone.username}</span>
                           <span> | Password: {milestone.password}</span>
                        </div>
                     </div>
                     <div>
                        <a style={{ color: 'white' }} target='_blank' href={milestone.codeURL} rel="noopener noreferrer">View Code</a>
                        <div>
                           <span style={{ opacity: '0' }} > View Code </span>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
         </div>
      )

      const kanoo = this.state.projects[1];
      const kanooProject = (
         <div
            class="project-card milestone-card"
            style={{ backgroundImage: `url(${kanoo.mainPhoto})` }}
         >
            <div className='card-text'>
               <div className='project-card-header'>
                  <h2>{kanoo.name}</h2>
                  <p onClick={() => this.setState({ viewKanooImages: true })} style={{ color: 'salmon' }}>View Photos</p>
               </div>
               <div>
                  <ul>
                     <li>{kanoo.keyPoint1}</li>
                     <li>{kanoo.keyPoint2}</li>
                     <li>{kanoo.keyPoint3}</li>
                     {kanoo.keyPoint4 && <li>{kanoo.keyPoint4}</li>}
                  </ul>
                  <div className='technologies-list'>
                     <h5>{kanoo.technologies}</h5>
                  </div>
                  <div className='link-container'>
                     <div>
                        <a style={{ color: 'white' }} target='_blank' href={kanoo.liveSiteURL} rel="noopener noreferrer">View Live Site</a>
                        <div>
                           <span>Username: {kanoo.username}</span>
                           <span> | Password: {kanoo.password}</span>
                        </div>
                     </div>
                     <div>
                        <a style={{ color: 'white' }} target='_blank' href={kanoo.codeURL} rel="noopener noreferrer">View Code</a>
                        <div>
                           <span style={{ opacity: '0' }} > View Code </span>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
         </div>
      )


      let milestoneImagesModal = (
         <div className='modal-wrapper'>
            <i className="fas fa-times modal-back-button" onClick={() => this.setState({ viewMilestoneImages: false })}></i>
            <div>
               <Slider {...settings} className='slider'>
                  <div>
                     <img src={milestone.image1} alt="" style={{ width: '70vw', height: 'auto' }} className='screenshot' />
                     <p>{milestone.image1description}</p>
                  </div>
                  <div>
                     <img src={milestone.image2} alt="" style={{ width: '70vw', height: 'auto' }} className='screenshot' />
                     <p>{milestone.image2description}</p>
                  </div>
                  <div>
                     <img src={milestone.image3} alt="" style={{ width: '70vw', height: 'auto' }} className='screenshot' />
                     <p>{milestone.image3description}</p>
                  </div>
                  <div>
                     <img src={milestone.image4} alt="" style={{ width: '70vw', height: 'auto' }} className='screenshot' />
                     <p>{milestone.image4description}</p>
                  </div>
               </Slider>
            </div>
         </div>
      )

      let kanooImagesModal = (
         <div className='modal-wrapper'>
            <i className="fas fa-times modal-back-button" onClick={() => this.setState({ viewKanooImages: false })}></i>
            <div>
               <Slider {...settings} className='slider'>
                  <div>
                     <img src={kanoo.image1} alt="" style={{ width: '70vw', height: 'auto' }} />
                     <p>{kanoo.image1description}</p>
                  </div>
                  <div>
                     <img src={kanoo.image2} alt="" style={{ width: '70vw', height: 'auto' }} />
                     <p>{kanoo.image2description}</p>
                  </div>
                  <div>
                     <img src={kanoo.image3} alt="" style={{ width: '70vw', height: 'auto' }} />
                     <p>{kanoo.image3description}</p>
                  </div>
                  <div>
                     <img src={kanoo.image4} alt="" style={{ width: '70vw', height: 'auto' }} />
                     <p>{kanoo.image4description}</p>
                  </div>
                  <div>
                     <img src={kanoo.image5} alt="" style={{ width: '70vw', height: 'auto' }} />
                     <p>{kanoo.image5description}</p>
                  </div>
               </Slider>
            </div>
         </div>
      )


      return (
         <div className='page projects-page-main'>
            <Link to='/' className='link'>
               <i className="fas fa-undo class back-button"></i>
            </Link>
            <h1 style={{ marginBottom: '1rem' }} className='projects-text'>Projects</h1>
            <h3 style={{ margin: '0px' }}>(Hover over picture for details)</h3>
            <div className='projects-container'>
               {milestoneProject}
               {kanooProject}
            </div>
            {this.state.viewMilestoneImages && milestoneImagesModal}
            {this.state.viewKanooImages && kanooImagesModal}
         </div>
      )
   }
}
