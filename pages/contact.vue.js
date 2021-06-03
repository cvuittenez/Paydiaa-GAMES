var Contact = Vue.component('Contact',{
    template:`

    <div class="template">
    <img src="img/fond4.png" alt="fond" class="fond">
      
        <form class="cases" @submit.prevent="sendEmail">
            <label>Adresse mail</label>
            <input type="text" name="email" id="mail" required>
            <label>Votre pseudo</label>
            <input type="text" name="from_name" id="pseudo" required>
            <label>Objet</label>
            <input type="text" name="name" id="objet" required>
            <label>Message</label>
            <textarea cols="30" rows="20" name="message" id="message" required></textarea>
            <input class="envoi" type="submit" value="Send">
        </form>
        
        


        <p class="reseaux-sociaux">Retrouvez nous également sur les réseaux sociaux :<strong><br>@paydiaa_games !</strong></p>

        <div class="icones">
            <a href="https://dribbble.com/Paydiaa">
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120.07" viewBox="0 0 120 120.07">
                    <g id="Groupe_133" data-name="Groupe 133" transform="translate(-363 -2063)">
                        <path id="Tracé_3361" data-name="Tracé 3361" d="M226.536,150.525v7.969c-.075.336-.175.669-.219,1.009-.269,2.045-.4,4.116-.8,6.136a59.428,59.428,0,0,1-22.319,36.341,57.657,57.657,0,0,1-26.216,11.606c-2.143.364-4.3.624-6.457.932h-7.969c-1.426-.176-2.855-.324-4.276-.533-11.588-1.7-22.027-6.128-30.742-13.968-18.072-16.259-24.589-36.463-19.124-60.147,3.341-14.478,11.58-25.985,23.75-34.488,14.152-9.888,29.854-13.018,46.733-9.6a60.113,60.113,0,0,1,46.7,48.17C225.974,146.134,226.224,148.334,226.536,150.525Zm-91.36,43.266c.142.122.28.253.43.368a49.99,49.99,0,0,0,28.8,10.593,50.658,50.658,0,0,0,21.783-3.9,1.307,1.307,0,0,0,.936-1.74,193.588,193.588,0,0,0-9.595-34.234,8.456,8.456,0,0,0-.38-.775C161.573,168.85,145.859,180.154,135.176,193.791Zm-18.742-41.348c-2.172,7.9,5.282,29.507,11.831,34.4a104.257,104.257,0,0,1,20.362-19.074,92.121,92.121,0,0,1,24.962-12.7l-5.148-10.952a150.924,150.924,0,0,1-25.733,6.245A172.255,172.255,0,0,1,116.435,152.443Zm47.3-17.006c-2.634-5.592-15.056-24.638-17.522-26.9-15.27,6.417-26.017,21.326-28.437,34.226A160.964,160.964,0,0,0,163.735,135.437Zm41.877-12.591a100.451,100.451,0,0,1-27.974,17.744c1.881,4.082,3.7,8.028,5.545,12.027a85.5,85.5,0,0,1,33.609.318A50.1,50.1,0,0,0,205.612,122.846Zm-6.822-6.9a49.769,49.769,0,0,0-27.268-11.51,44.684,44.684,0,0,0-15.021.8l16.882,26.619A88.638,88.638,0,0,0,198.79,115.944Zm-12.016,45.8a203.185,203.185,0,0,1,9.446,33.387c10.894-8.352,17.567-18.993,19.985-32.387A76.092,76.092,0,0,0,186.773,161.742Z" transform="translate(256.464 1968.551)" fill="#586e59"/>
                    </g>
                </svg>
            </a>
            <a href="https://www.behance.net/paydiaagames_">
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
                    <g id="Groupe_132" data-name="Groupe 132" transform="translate(-590 -2070.874)">
                        <g id="Groupe_131" data-name="Groupe 131" transform="translate(590 2070.875)">
                            <path id="Tracé_3362" data-name="Tracé 3362" d="M296.76,368.7v119.74H177.021V368.7Zm-68.937,56.659c.347-.189.685-.375,1.023-.557,7.354-3.972,7.949-13.4,5.132-18.193-2.788-4.742-7.362-6.812-12.507-6.97-10.161-.312-20.337-.128-30.506-.146a3.527,3.527,0,0,0-.554.085v57.013c.241.018.427.044.613.044,9.118,0,18.236.038,27.354-.025a22.837,22.837,0,0,0,12.655-3.448c2.692-1.756,5-3.815,6.089-6.98a22.4,22.4,0,0,0,.824-8.875c-.279-4.346-2.495-7.439-6.025-9.709C230.628,426.765,229.224,426.113,227.823,425.354Zm55.4,13.415c.059-.545.126-.962.146-1.382a22.526,22.526,0,0,0-5.533-16.486,20.356,20.356,0,0,0-31.785,1.325,22.51,22.51,0,0,0-4.209,17.1,21.115,21.115,0,0,0,7.7,13.845c5.238,4.227,11.265,5.122,17.733,4.063a17.968,17.968,0,0,0,11.951-6.822,17.263,17.263,0,0,0,3.131-6.642c-3.126,0-6.123-.024-9.119.033a1.632,1.632,0,0,0-1.036.724,10.542,10.542,0,0,1-12.626,4.149,9.508,9.508,0,0,1-6.16-9.909Zm-9.161-35.525H250.972v5.608h23.086Z" transform="translate(-176.76 -368.435)" fill="#586e59"/>
                            <path id="Tracé_3363" data-name="Tracé 3363" d="M296.76,368.669H176.995V488.435a3.233,3.233,0,0,1-.224-.819c-.014-4.6-.01-9.2-.01-13.794V368.435h1.812q58.569,0,117.137.01A5.049,5.049,0,0,1,296.76,368.669Z" transform="translate(-176.76 -368.435)" fill="#586e59"/>
                            <path id="Tracé_3364" data-name="Tracé 3364" d="M205.927,455.856V438.485a2.448,2.448,0,0,1,.591-.144c5.331.034,10.669-.077,15.99.178,3.363.161,6.438,1.455,7.885,4.819,2.053,4.77.646,11.25-7.3,12.225-3.892.477-7.874.228-11.815.289C209.55,455.878,207.821,455.856,205.927,455.856Z" transform="translate(-180.41 -376.596)" fill="#586e59"/>
                            <path id="Tracé_3365" data-name="Tracé 3365" d="M205.927,428.544V414.033c.119-.074.192-.159.265-.159,5.195.037,10.4-.1,15.582.177,4.854.263,7.5,3.887,6.779,8.681-.419,2.786-2.828,5-6.123,5.536a20.877,20.877,0,0,1-3.227.264C214.833,428.56,210.462,428.544,205.927,428.544Z" transform="translate(-180.325 -373.612)" fill="#586e59"/>
                            <path id="Tracé_3366" data-name="Tracé 3366" d="M282.391,438.545H262.069a10.466,10.466,0,0,1,9.958-9.955C277.3,428.463,281.9,432.817,282.391,438.545Z" transform="translate(-186.965 -375.027)" fill="#586e59"/>
                        </g>
                    </g>
                </svg>
            </a>
            <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="59.861" height="120" viewBox="0 0 59.861 120">
                    <path id="Tracé_3367" data-name="Tracé 3367" d="M228.73,531.3l5.467.473,3.581.306v19.151c-.352,0-.761-.006-1.17,0-4.021.064-8.051-.024-12.059.236-4.821.312-7.472,2.813-7.7,7.611-.267,5.686-.062,11.394-.062,17.246h19.289l-2.653,21.328H216.734V651.3H195.285v-53.6H177.918V576.33h17.307v-1.376c0-5.431-.056-10.863.03-16.292a32.585,32.585,0,0,1,2.728-13.189c3.559-7.8,9.743-12.137,18.041-13.691.873-.163,1.749-.318,2.622-.477Z" transform="translate(-177.918 -531.304)" fill="#586e59"/>
                </svg>
            </a>
            <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="119.941" viewBox="0 0 120 119.941">
                    <g id="Groupe_134" data-name="Groupe 134" transform="translate(-369.242 -376.954)">
                        <path id="Tracé_3368" data-name="Tracé 3368" d="M448.609,496.9h-38.73c-1.048-.081-2.1-.138-3.144-.246-3.723-.386-7.523-.436-11.15-1.249-13.51-3.029-21.833-11.425-24.909-24.948-1.3-5.721-1.315-11.561-1.364-17.375q-.137-16.187,0-32.376c.051-5.892.074-11.815,1.394-17.607,2.862-12.549,10.39-20.795,22.816-24.406a51.672,51.672,0,0,1,14.5-1.727c15.171,0,30.343-.041,45.512.127a48.477,48.477,0,0,1,10.422,1.353c10.638,2.493,18.215,8.776,22.347,18.978,2.308,5.7,2.9,11.717,2.909,17.8.024,13.8.08,27.607-.036,41.409a90.7,90.7,0,0,1-.963,12.477,31.043,31.043,0,0,1-7.265,15.986c-6.451,7.483-14.927,10.6-24.5,11.321C453.832,496.608,451.22,496.736,448.609,496.9Zm-19.272-10.636c4.345-.212,8.69-.125,13.029-.234,6.01-.15,12.059.1,18-1.1,8.577-1.728,14.242-6.717,16.663-15.222a44.944,44.944,0,0,0,1.356-11.956q.177-18.243.1-36.487c-.014-5.114.01-10.252-1.006-15.3-1.765-8.773-6.829-14.527-15.612-16.809-5.01-1.3-10.151-1.294-15.259-1.356-9.934-.12-19.871-.073-29.807-.046-5.939.016-11.9-.089-17.776.962-9.025,1.615-15.015,6.675-17.387,15.716a52.99,52.99,0,0,0-1.3,13.144q-.152,19.3.007,38.6a77.081,77.081,0,0,0,.947,11.426,19.9,19.9,0,0,0,9.4,14.457,25.92,25.92,0,0,0,12.842,3.542C412.133,485.926,420.737,486.05,429.337,486.259Z" transform="translate(0 0)" fill="#586e59"/>
                        <path id="Tracé_3370" data-name="Tracé 3370" d="M427.792,405.177a30.144,30.144,0,1,0,30.2,30.153A30.257,30.257,0,0,0,427.792,405.177Zm31.312,5.882a7.019,7.019,0,0,0,7.077-7,7.093,7.093,0,0,0-7.039-7.075,7.019,7.019,0,0,0-7.037,7.038A6.94,6.94,0,0,0,459.1,411.059Z" transform="translate(1.77 1.247)" fill="#fff"/>
                        <path id="Tracé_3371" data-name="Tracé 3371" d="M429.3,405.177a31.652,31.652,0,1,1-31.612,31.76A31.771,31.771,0,0,1,429.3,405.177Zm-20.391,31.631a20.445,20.445,0,1,0,20.547-20.426A20.359,20.359,0,0,0,408.908,436.808Z" fill="#586e59"/>
                        <path id="Tracé_3372" data-name="Tracé 3372" d="M459.1,411.059a6.94,6.94,0,0,1-7-7.036,7.019,7.019,0,0,1,7.037-7.038,7.093,7.093,0,0,1,7.039,7.075A7.019,7.019,0,0,1,459.1,411.059Z" transform="translate(2.43 0.587)" fill="#586e59"/>
                    </g>
                </svg>
            </a>
            <a href="https://twitter.com/paydiaa">
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120.031" viewBox="0 0 120 120.031">
                    <g id="Groupe_135" data-name="Groupe 135" transform="translate(-355.879 -92.936)">
                        <path id="Tracé_3373" data-name="Tracé 3373" d="M455.957,212.967H375.8l-1.7-.343a22.468,22.468,0,0,1-18.218-22.155q-.025-37.5.009-75a23.452,23.452,0,0,1,.325-4.192,22.46,22.46,0,0,1,21.936-18.318q37.729-.041,75.457,0a22.4,22.4,0,0,1,21.049,15.064c.542,1.571.817,3.232,1.215,4.852v80.171a4.128,4.128,0,0,0-.221.655c-1.405,8.772-6.436,14.631-14.546,17.925A39.279,39.279,0,0,1,455.957,212.967Zm-55.813-39.124a33.188,33.188,0,0,1-23.88,6.882c.406.288.55.407.709.5a46.19,46.19,0,0,0,30.432,6.255c9.427-1.208,17.837-4.693,24.784-11.268,10.4-9.841,15.658-21.93,15.535-36.308a2.087,2.087,0,0,1,.652-1.329c1.1-1.05,2.356-1.94,3.407-3.033,1.338-1.392,2.533-2.922,3.952-4.58l-8.866,2.424-.18-.3a15.859,15.859,0,0,0,6.892-8.88,34.424,34.424,0,0,1-9.5,3.747,1.439,1.439,0,0,1-1.524-.452A15.517,15.517,0,0,0,428,123.325a16.088,16.088,0,0,0-13.06,16.388c.013,1.106.142,2.211.225,3.447-13.71-1.015-24.9-6.733-33.926-17.262-3.694,8.539-2.726,15.839,4.612,21.838l-.188.359-7.324-1.977c.635,8.32,5.2,13.493,13.108,15.98l-.057.358h-6.5C387.752,169.415,392.632,173.219,400.144,173.843Z" transform="translate(0 0)" fill="#586e59"/>
                    </g>
                </svg>
            </a>
        </div>
    </div>
       `,
    data(){
        return{}
    },
    methods: {
        sendEmail: (e)=>{
            emailjs.sendForm('service_0uyp8bu', 'template_5mgcghr', e.target, 'user_vLjqEzNJm1ai4Xq0mEIQb')
                .then((result) => {
                    console.log('SUCCESS!', result.status, result.text);
                }, (error) => {
                    console.log('FAILED...', error);
                });
        }
    }
});